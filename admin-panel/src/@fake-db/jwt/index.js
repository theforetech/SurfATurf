import mock from '@/@fake-db/mock'
import jwt from 'jsonwebtoken'

const data = {
  users: [
    {
      id: 1,
      fullName: 'John Doe',
      name: 'johndoe',
      password: 'admin',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/13-small.png'),
      email: 'admin@demo.com',
      role: 'admin',
      ability: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
      extras: {
        eCommerceCartItemsCount: 5,
      },
    },
    {
      id: 2,
      fullName: 'Jane Doe',
      name: 'janedoe',
      password: 'client',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/1-small.png'),
      email: 'client@demo.com',
      role: 'client',
      ability: [
        {
          action: 'read',
          subject: 'ACL',
        },
        {
          action: 'read',
          subject: 'Auth',
        },
      ],
      extras: {
        eCommerceCartItemsCount: 5,
      },
    },
  ],
}

// ! These two secrets shall be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
  expireTime: '10m',
  refreshTokenExpireTime: '10m',
}

mock.onPost('/jwt/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong'],
  }

  const user = data.users.find(u => u.email === email && u.password === password)

  if (user) {
    try {
      const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })
      const refreshToken = jwt.sign({ id: user.id }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime,
      })

      const userInfo = { ...user }

      delete userInfo.password

      const response = {
        userInfo,
        accessToken,
        refreshToken,
      }

      return [200, response]
    } catch (e) {
      error = e
    }
  } else {
    error = {
      email: ['Email or Password is Invalid'],
    }
  }

  return [400, { error }]
})

mock.onPost('/jwt/register').reply(request => {
  const { name, email, password } = JSON.parse(request.data)

  // If not any of data is missing return 400
  if (!(name && email && password)) return [400]

  const isEmailAlreadyInUse = data.users.find(user => user.email === email)

  const error = {
    password: !password ? ['Please enter password'] : null,
    email: (() => {
      if (!email) return ['Please enter your email.']
      if (isEmailAlreadyInUse) return ['This email is already in use.']
      return null
    })(),
    name: (() => {
      if (!name) return ['Please enter your name.']
      return null
    })(),
  }

  if (!error.name && !error.email) {
    const userInfo = {
      email,
      password,
      name,
      fullName: '',
      avatar: null,
      role: 'admin',
      ability: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
    }

    // Add user id
    const { length } = data.users
    let lastIndex = 0
    if (length) {
      lastIndex = data.users[length - 1].id
    }
    userInfo.id = lastIndex + 1

    data.users.push(userInfo)

    const accessToken = jwt.sign({ id: userInfo.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })

    const user = { ...userInfo }
    delete user.password
    const response = {
      userInfo: user,
      accessToken,
    }

    return [200, response]
  }
  return [400, { error }]
})

mock.onPost('/jwt/refresh-token').reply(request => {
  const { refreshToken } = JSON.parse(request.data)

  try {
    const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

    const userInfo = { ...data.users.find(user => user.id === id) }

    const newAccessToken = jwt.sign({ id: userInfo.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn })
    const newRefreshToken = jwt.sign({ id: userInfo.id }, jwtConfig.refreshTokenSecret, {
      expiresIn: jwtConfig.refreshTokenExpireTime,
    })

    delete userInfo.password
    const response = {
      userInfo,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    }

    return [200, response]
  } catch (e) {
    const error = 'Invalid refresh token'
    return [401, { error }]
  }
})

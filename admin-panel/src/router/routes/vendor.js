export default [
  {
    path: '/vendor',
    name: 'dashboard-vendor',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Your Dashboard',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
      ],
    },
  },
  {
    path: '/create-profile',
    name: 'vendor-create-profile',
    component: () => import('@/views/pages/vendor/account-setting/AccountSetting'),
    meta: {
      layout: 'full',
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Create Profile',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Create Profile',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/turfs',
    name: 'vendor-turfs',
    component: () => import('@/views/pages/vendor/turfs/UsersList.vue'),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Turfs',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Turfs',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/bookings',
    name: 'vendor-bookings',
    component: () => import('@/views/pages/vendor/bookings/BookingTable'),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Bookings',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Bookings',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/bookings/:id',
    name: 'vendor-summary',
    component: () => import('@/views/pages/vendor/bookings/Summary'),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Summary',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Bookings',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/booking/new',
    name: 'vendor-new-booking',
    component: () => import('@/views/pages/vendor/booking/Booking'),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'New Booking',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Bookings',
        },
        {
          text: 'New',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/booking-form',
    name: 'vendor-new-booking-form',
    component: () => import('@/views/pages/vendor/booking/form/AccountSetting'),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'New Booking',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Bookings',
        },
        {
          text: 'New',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/turfs/:id',
    name: 'vendor-turf',
    component: () => import('@/views/pages/vendor/turfs/TurfPage'),
    props: ({ params }) => ({ id: Number.parseInt(params.id, 10) || 0 }),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Turfs',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Turfs',
        },
        {
          text: 'Turf',
          active: true,
        },
      ],
    },
  },
  {
    path: '/vendor/turfs/edit/:id',
    name: 'vendor-turf-edit',
    component: () => import('@/views/pages/vendor/turfs/account-setting/AccountSetting.vue'),
    props: ({ params }) => ({ id: Number.parseInt(params.id, 10) || 0 }),
    meta: {
      resource: 'Vendor',
      action: 'read',
      pageTitle: 'Turfs',
      breadcrumb: [
        {
          text: 'Vendor Panel',
        },
        {
          text: 'Turfs',
        },
        {
          text: 'Edit Turf',
          active: true,
        },
      ],
    },
  },
]

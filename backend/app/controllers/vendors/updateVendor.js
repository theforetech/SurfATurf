const Vendor = require('../../models/vendor')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const { updateItem } = require('../../middleware/db')
const { emailExistsExcludingMyself } = require('../../middleware/emailer')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateVendor = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await isIDGood(req.id)
    const doesEmailExists = await emailExistsExcludingMyself(id, req.email)
    if (!doesEmailExists) {
      res.status(200).json(await updateItem(id, Vendor, req))
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateVendor }

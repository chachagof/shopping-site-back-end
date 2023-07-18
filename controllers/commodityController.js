const commodityService = require('../services/commodityService')

const commodityController = {
  // create
  createCommodity: (req, res, next) => {
    commodityService.createCommodity(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = commodityController

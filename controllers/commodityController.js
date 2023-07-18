const commodityService = require('../services/commodityService')

const commodityController = {
  // create
  createCommodity: (req, res, next) => {
    commodityService.createCommodity(req, (err, data) => err ? next(err) : res.json(data))
  },
  // edit
  editCommodity: (req, res, next) => {
    commodityService.editCommodity(req, (err, data) => { err ? next(err) : res.json(data) })
  },
  // delete
  deleteCommodity: (req, res, next) => {
    commodityService.deleteCommodity(req, (err, data) => { err ? next(err) : res.json(data) })
  },
  // read all
  getCommodities: (req, res, next) => {
    commodityService.getCommodities(req, (err, data) => { err ? next(err) : res.json(data) })
  },
  // read one
  getCommodity: (req, res, next) => {
    commodityService.getCommodity(req, (err, data) => { err ? next(err) : res.json(data) })
  }
}

module.exports = commodityController

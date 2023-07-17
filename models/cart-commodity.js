'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CartCommodity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      CartCommodity.belongsTo(models.Cart, { foreignKey: 'cartId' })
    }
  }
  CartCommodity.init({
    commodityId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartCommodity',
    tableName: 'CartCommodities',
    underscored: true
  })
  return CartCommodity
}

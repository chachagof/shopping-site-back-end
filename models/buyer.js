'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Buyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Buyer.hasOne(models.Cart, { foreignKey: 'buyerId' })
    }
  }
  Buyer.init({
    name: DataTypes.STRING,
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Buyer',
    tableName: 'Buyers',
    underscored: true
  })
  return Buyer
}

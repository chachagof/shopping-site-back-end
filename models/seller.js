'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Seller.hasMany(models.Commodity, { foreignKey: 'sellerId' })
    }
  }
  Seller.init({
    name: DataTypes.STRING,
    account: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    avatar: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Seller',
    tableName: 'Sellers',
    underscored: true
  })
  return Seller
}

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      room.hasMany(models.booking)
      room.belongsToMany(models.customer, { through: models.booking, foreignKey: "roomId"})
    }
  }
  room.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field name can't be empty.",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field image can't be empty.",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Field price can't be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "room",
    }
  );
  return room;
};
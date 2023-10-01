"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.customer)
      booking.belongsTo(models.room)
    }
  }
  booking.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      roomId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Field roomId can't be empty.",
          },
        },
      },
      customerId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Field customerId can't be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "booking",
    }
  );
  return booking;
};

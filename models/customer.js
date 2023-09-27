'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");
const HASH_ROUND = 12;
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customer.hasMany(models.booking)
      customer.belongsToMany(models.room, { through: models.booking, foreignKey: "customerId" });
    }
  }
  customer.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field name can't be empty.",
          },
        },
      },
      nik: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field nik can't be empty.",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field email can't be empty.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field password can't be empty.",
          },
        },
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Field address can't be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "customer",
    }
  );

  customer.beforeCreate(async (customer, options) => {
    const hashedPassword = bcrypt.hashSync(customer.password, HASH_ROUND);
    customer.password = hashedPassword;
  });

  return customer;
};
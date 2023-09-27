'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "Christof",
          nik: "1871116704930001",
          email: "christofora@mail.com",
          password: "admin123",
          address: "Lampung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diana",
          nik: "1842226704930001",
          email: "dianajr@mail.com",
          password: "admin123",
          address: "Lampung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jhonny",
          nik: "1842226704930990",
          email: "jndoe@mail.com",
          password: "admin123",
          address: "Lampung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("customers", null, {});
  }
};

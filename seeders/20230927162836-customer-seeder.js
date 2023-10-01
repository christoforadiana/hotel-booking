'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "Christofora",
          nik: "1871116704930001",
          email: "christofora@mail.com",
          password: "12345678",
          address: "Gandaria City",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diana",
          nik: "1842226704930001",
          email: "dianajr@mail.com",
          password: "diana123",
          address: "Pantai Indah Kapuk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jhonny",
          nik: "1842226704930990",
          email: "jndoe@mail.com",
          password: "jhndep01",
          address: "Town Square",
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

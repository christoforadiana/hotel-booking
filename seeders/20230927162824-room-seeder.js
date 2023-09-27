"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          name: "Suite",
          image: "https://via.placeholder.com/150",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suite 2",
          image: "https://via.placeholder.com/150",
          price: 1500000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suite 3",
          image: "https://via.placeholder.com/150",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};

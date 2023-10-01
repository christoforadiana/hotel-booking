"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          name: "Suite 1",
          image: "https://www.hardrockhotels.com/ibiza/files/6149/13907615_ImageLargeWidth.jpg",
          price: 1000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suite 2",
          image: "https://www.hardrockhotels.com/ibiza/files/6149/13907585_ImageLargeWidth.jpg",
          price: 2000000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suite 3",
          image: "https://www.hardrockhotels.com/bali/files/6079/13271939_ImageLargeWidth.jpg",
          price: 3000000,
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

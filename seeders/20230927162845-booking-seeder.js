'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bookings",
      [
        {
          roomId: 1,
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 2,
          customerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roomId: 1,
          customerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bookings", null, {});
  }
};

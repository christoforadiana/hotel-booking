'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bookings",
      [
        {
          name: "Christof",
          image: "https://via.placeholder.com/150",
          price: 1000000,
          roomId: 1,
          customerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Diana",
          image: "https://via.placeholder.com/150",
          price: 1000000,
          roomId: 2,
          customerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jhonny",
          image: "https://via.placeholder.com/150",
          price: 1000000,
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

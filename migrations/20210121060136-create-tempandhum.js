'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "TempAndHum", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "id"
      },
      temperature: {
        type: Sequelize.FLOAT,
        comment: "측정된 온도"
      },
      humidity: {
        type: Sequelize.FLOAT,
        comment: "측정된 습도"
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TempAndHum');
  }
};

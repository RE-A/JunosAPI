'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "User", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "id"
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        comment: "유저의 이메일"
      },
      password: {
        type: Sequelize.STRING(50),
        comment: "암호화된 유저의 비밀번호"
      },
      verify: {
        type: Sequelize.BOOLEAN,
        comment: "유저 인증 여부"
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User');
  }
};

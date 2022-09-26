"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      //column user_id
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: true,
        primaryKey: true,
        autoIncrement: true,
      },
      //column name
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        notEmpty: true,
        unique: true,
      },
      //column email
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        notEmpty: true,
        unique: true,
      },
      //column password
      password: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};

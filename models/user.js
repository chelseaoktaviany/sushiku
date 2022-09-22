const Sequelize = require("sequelize");

const bcrypt = require("bcrypt");

const db = require("../db.config");

module.exports = db.define(
  "user",
  {
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
      validate: {
        notEmpty: true,
      },
    },
  },
  {}
);

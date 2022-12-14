'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lists_tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Tarea"
      },

      creation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      date_of_resolution: {
        type: Sequelize.DATE,
        allowNull: true
      },

      status: {
        type: Sequelize.STRING,
        defaultValue: 'sin resolver'
      },

      archivada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lists');
  }
};

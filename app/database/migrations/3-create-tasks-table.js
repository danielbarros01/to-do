'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      title: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "Tarea"
      },

      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "Tarea"
      },

      priority: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "1"
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "sin resolver"
      },

      expiration_date: {
        type: Sequelize.DATE,
        allowNull: true
      },

      creation_date: {
        type: Sequelize.DATE,
        allowNull: false
      },

      date_of_resolution: {
        type: Sequelize.DATE,
        allowNull: true
      },

      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lists_tasks",
          key: "id"
        },
        /* onDelete: "CASCADE",
        onUpdate: "CASCADE" */
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};

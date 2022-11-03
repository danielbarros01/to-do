'use strict';

const faker = require('faker');
//const { Task } = require('../../models/index');
const { List } = require('../db');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let tasks = [];
    //Obtenemos las listas
    let lists = await List.findAll();

    //Recorremos las listas, 4 por cada lista
    lists.forEach(list => {
      for (let index = 0; index < 4; index++) {
        tasks.push({
          title: faker.company.bsBuzz(),
          description: faker.commerce.productDescription(),
          priority: '2',
          status: 'sin resolver',
          expiration_date: faker.datatype.datetime({ min: 1667437716000, max: 1893456000000 }),
          creation_date: new Date(),
          list_id: list.id
        });
      }
    });

    await queryInterface.bulkInsert('tasks', tasks, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};

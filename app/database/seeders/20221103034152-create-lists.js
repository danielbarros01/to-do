'use strict';

const { User } = require('../../models/index'),
  bcrypt = require('bcrypt'),
  authConfig = require('../../../config/auth');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //Se ejecuta cuando hacemos la siembra
  async up(queryInterface, Sequelize) {
    let lists = [];
    let users = await User.findAll();

    users.forEach(user => {
      lists.push(
        { title: "Escuela", creation_date: new Date(), status: 'sin resolver', user_id: user.id },
        { title: "Universidad", creation_date: new Date(), status: 'sin resolver', user_id: user.id },
        { title: "Gimnasia", creation_date: new Date(), status: 'sin resolver', user_id: user.id },
        { title: "Proyectos", creation_date: new Date(), status: 'sin resolver', user_id: user.id },
        { title: "Casa", creation_date: new Date(), status: 'sin resolver', user_id: user.id }
      )
    });

    await queryInterface.bulkInsert('lists_tasks', lists, {});
  },

  //Se ejecuta cuando se deshace la siembra
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lists_tasks', null, {});
  }
};


/* */

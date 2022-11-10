'use strict';

const { User } = require('../../models/index'),
  bcrypt = require('bcrypt'),
  authConfig = require('../../../config/auth')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      
      User.create({
        name: "Anton",
        email: "azr@azr.es",
        password: bcrypt.hashSync("123456", Number(authConfig.rounds)),
        lists: [
          {
            title: "Escuela", 
            creation_date: new Date(), 
            status: 'sin resolver',
            archivada:false
          },
          {
            title: "Universidad", 
            creation_date: new Date(), 
            status: 'sin resolver',
            archivada:false
          },
        ]
      }, {
        include: "lists"
      }),

      User.create({
        name: "Lucia",
        email: "lucia@gmail.com",
        password: bcrypt.hashSync("123456", Number(authConfig.rounds)),
        lists: [
          {
            title: "Escuela", 
            creation_date: new Date(), 
            status: 'sin resolver',
            archivada:false
          },
          {
            title: "Universidad", 
            creation_date: new Date(), 
            status: 'sin resolver',
            archivada:false
          },
        ]
      }, {
        include: "lists"
      })


    ])

  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('lists', null, {}),
      queryInterface.bulkDelete('users', null, {})
    ])
  }
};

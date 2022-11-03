'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //Se ejecuta cuando hacemos la siembra
  async up(queryInterface, Sequelize) {
    let lists = [
      {title: "Escuela", creation_date: new Date(), status:'sin resolver'},
      {title: "Universidad", creation_date: new Date(), status:'sin resolver'},
      {title: "Gimnasia", creation_date: new Date(), status:'sin resolver'},
      {title: "Proyectos", creation_date: new Date(), status:'sin resolver'},
      {title: "Casa", creation_date: new Date(), status:'sin resolver'},
    ]
     await queryInterface.bulkInsert('lists_tasks', lists, {});
  },

  //Se ejecuta cuando se deshace la siembra
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lists_tasks', null, {});
  }
};

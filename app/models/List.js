'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    static associate(models) {
      List.hasMany(models.Task, {as: "tasks", foreignKey: "list_id"})
    }
  }
  List.init({
    title: DataTypes.STRING,
    creation_date: DataTypes.DATE,
    date_of_resolution: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'List',
    tableName: 'lists_tasks'
  });
  return List;
};
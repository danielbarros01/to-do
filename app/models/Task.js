'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.List, { as: "lista", foreignKey: "list_id"})
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    creation_date: DataTypes.DATE,
    date_of_resolution: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks'
  });

  return Task;
};
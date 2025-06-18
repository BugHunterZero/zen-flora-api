const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HomePageContent = sequelize.define('HomePageContent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  hero_title: {
    type: DataTypes.STRING
  },
  hero_subtitle: {
    type: DataTypes.STRING
  },
  description:{
    type:DataTypes.STRING
  },
  hero_image: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'homepage_content',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = HomePageContent;

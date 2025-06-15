const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plant = sequelize.define('Plant', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    scientific_name: { 
        type: DataTypes.STRING, 
        field: 'scientific_name' // maps to scientific_name in DB
    },
    categories: {
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('categories');
            return rawValue ? rawValue.split(',') : [];
        },
        set(value) {
            this.setDataValue('categories', value.join(','));
        }
    },
    description: { 
        type: DataTypes.TEXT 
    },
    watering: { 
        type: DataTypes.STRING 
    },
    light: { 
        type: DataTypes.STRING 
    },
    image_url: { 
        type: DataTypes.STRING, 
        field: 'image_url' // maps to image_url in DB
    }
}, {
    tableName: 'plants',
    timestamps: true,
    createdAt: 'created_at',  // map createdAt to created_at column
    updatedAt: 'updated_at'   // map updatedAt to updated_at column
});

module.exports = Plant;

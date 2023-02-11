const {DataTypes}=require('sequelize')
const db=require('../utils/database')


const Posts = db.define('publicacion', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isPublished:{
        type:DataTypes.STRING,
    }

})

module.exports = Posts
const Sequelize = require('sequelize');
const db=require('../index.js')

const Campus = db.define('campuses', {
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    imageURL:{
        type:Sequelize.STRING,
        defaultValue:"https://static.pexels.com/photos/46274/pexels-photo-46274.jpeg"
    },
    description:{
        type:Sequelize.TEXT
    }
})
module.exports=Campus;
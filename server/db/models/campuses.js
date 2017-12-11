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
        defaultValue:"https://www.nasa.gov/images/content/738996main_pia16884-43_946-710.jpg"
    },
    description:{
        type:Sequelize.TEXT
    }
})
module.exports=Campus;
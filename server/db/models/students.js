const Sequelize = require('sequelize');
const db=require('../index.js')

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
        notEmpty:true
    }
  },
  lastName: {
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
          notEmpty:true
      }
},
email:{
    type:Sequelize.STRING,
    allowNull:false,
    validate:{
        isEmail: true,
        notEmpty:true
    }, 
},

gpa:{
    type:Sequelize.FLOAT,
    validate:{
        min:0.0,
        max:4.0
    }
},
fullName:{
    type:Sequelize.VIRTUAL,
    get(){
        const first=this.getDataValue('firstName');
        const last=this.getDataValue('lastName')
        return first +" "+ last;
    }
}
});

module.exports = Student;
import database from '../config/database';
import Sequelize from 'sequelize';

const UserAccount = database.define('user_account', {
  userId: {
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  username : {
      type : Sequelize.STRING,
      allowNull : false
  },
  password : {
      type : Sequelize.STRING,
      allowNull : false
  },
  name :{
    type : Sequelize.STRING(50)
  }
});

export default UserAccount;

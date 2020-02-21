import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('helloAPI','root','',{
    dialect : 'mysql',
    port : '33060'
})

export default sequelize;


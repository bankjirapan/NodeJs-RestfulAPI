# NodeJs-RestfulAPI 
this is repo is a simple nodejs project for initial 

## require
1. MySQL
2. NodeJS

## Structure
    .
    ├── config                   #config file
    ├── controller               #controller 
    ├── lib                     
    ├── middleware                   
    ├── router                   
    ├── LICENSE
    └── README.md

## How to install
1. Clone this project
```
git clone https://github.com/bankjirapan/NodeJs-RestfulAPI.git
```
2. into folder and open terminal and mac or windows use power-shell , cmd
```
npm install
```
3. Create database scheme
4. Edit config database in folder config/database
```
const sequelize = new Sequelize('databasename','username','password',{
    dialect : 'mysql',
    port : '3306'
})

```
5. Create file .babelrc in the root project
6. Copy below code to .bablrc and save
```
{
    "presets": ["env"]
}
```
6. ``npm run dev`` for development or ``npm start` for production

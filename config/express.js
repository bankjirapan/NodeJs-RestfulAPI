import express from 'express';
import morgan from 'morgan';
import config from './config';
import bodyParser from 'body-parser';

// Database
import sequelize from './database';

// Database Table
import userModel from '../models/user.model';

// Router
import userRouter from '../router/user.route';

const createApp = {
  setup: () => {
    const app = express();

    if (process.env.NODE_ENV == 'development') {
      app.use(morgan('dev'));
    } else {
      app.use(morgan('combined'));
    }

    // ตรวจสอบการเชื่อมต่อ Database
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

    // สร้าง Table
    sequelize.sync({
        force : false
    })


    app.use(bodyParser.urlencoded({extended : false}))

    app.use(userRouter);
    app.use((req, res, next) => {
      res
        .json({
          status: 404,
          message: 'page not found'
        })
        .status(404);
    });

    app.listen(config.port, () => {
      console.log('application started at port ' + config.port);
    });
  }
};

export default createApp;

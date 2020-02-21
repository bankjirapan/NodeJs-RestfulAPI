import userModel from '../models/user.model';
import bcrypt from 'bcryptjs';

const userController = {
  getUsers: (req, res) => {
    userModel
      .findAll()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
  },

  addUser: (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let name = req.body.name;

    userModel
      .findOne({ where: { username: username } })
      .then(user => {
        // กรณีมี user อยู่แล้ว
        if (user) {
          return res
            .json({
              status: 400,
              message: 'have user in database',
              body: user
            })
            .status(400);
        }

        return bcrypt.hash(password,12).then(hasPassword => {
          const newUser = new userModel({
            username: username,
            password: hasPassword,
            name: name
          });

          console.log('ada')

          return newUser.save();
        });
      })
      .then(result => {
        console.log('eiei')
        res
          .json({
            status: 200,
            message: 'add user successful',
            body : result
          })
          .status(200);
      })
      .catch(err => {
        res
          .json({
            status: 400,
            message: 'bad request',
            body : err
          })
          .status(400);
      });
  }
};

export default userController;

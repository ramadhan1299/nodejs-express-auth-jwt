const { readAuth, saveAuth } = require('../helper/read-auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        res.status(400).json({ message: 'Invalid Username or Password' });
        return;
      }

      const data = await readAuth();

      const findUserExist = data.find((item) => item.username == username);

      if (findUserExist) {
        res.status(400).json({ message: 'Username already exist' });
        return;
      }

      const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

      const newData = {
        username,
        password: hashPassword,
      };

      await saveAuth(newData);

      res.status(201).json({ message: 'Register successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        res.status(400).json({ message: 'Invalid Username or Password' });
        return;
      }

      const data = await readAuth();

      const findUserExist = data.find((item) => item.username == username);

      if (!findUserExist) {
        res.status(400).json({ message: 'Invalid Username or Password' });
        return;
      }

      const isValid = bcrypt.compareSync(password, findUserExist.password);

      if (!isValid) {
        res.status(400).json({ message: 'Invalid Username or Password' });
        return;
      }

      const token = jwt.sign({ username: findUserExist.username }, 'secretKey');

      res.status(200).json({ message: 'Login successfully', token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = AuthController;

import client from '../db.js';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

class User {
  async createUser(req,res) {
    var { username, email, password } = req.body;
    const fixedSalt = '$2b$10$abcdefghijklmnopqrstuv';
    const hashedPassword = bcrypt.hashSync(password, fixedSalt);
    
    const values = [Math.random() * (100000000 - 0), username, email, hashedPassword];
    const query = `INSERT INTO "Users" (id, username, email, password) VALUES (${values[0]}, '${values[1]}', '${values[2]}', '${values[3]}') RETURNING *`;
    const token = jwt.sign({ email: email}, process.env.hashtoken);
      return client.query(query, function(err, result) {
        if(err) {
          return res.status(400).json({ error: err });
        }
        return res.status(200).json({token: token, data: result.rows[0]});
      });

  }

  async getUserByEmail(req, res) {
    const {email, password} = req.body;
    const fixedSalt = '$2b$10$abcdefghijklmnopqrstuv';
    const hashedPassword = bcrypt.hashSync(password, fixedSalt);
    const query = `SELECT * FROM "Users" WHERE email='${email}' and password='${hashedPassword}'`;
    const token = jwt.sign({ email: email}, process.env.hashtoken);
    client.query(query, function(err, result) {
      if(err) {
        return res.status(400).json({ error: err });
      }
      console.log(result.rows);
      return res.status(200).json({token: token, data: result.rows[0]});
    });
  }

};

export default User;
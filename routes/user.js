// routes/user.js

import express from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import { isValidEmail, isValidPassword } from '../utils/validation.js';

const router = express.Router();
const userModel = new User();


router.post('/register', async (req, res) => {
  var { username, email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  try {
    const newUser = await userModel.createUser(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  var { username, email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  try {
    const newUser = await userModel.getUserByEmail(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

import express from 'express';
import Folder from '../models/folder.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();
const folderModel = new Folder();

router.post('/', authenticateToken, async (req, res) => {

  try {
      const newFolder = await folderModel.createFolder(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;

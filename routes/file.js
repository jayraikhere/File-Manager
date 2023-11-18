import express from 'express';
import File from '../models/file.js';
import authenticateToken from '../middleware/auth.js';
import uploadFileToS3 from '../services/s3.js';
import client from '../db.js';

const router = express.Router();
const fileModel = new File();

// Upload a file
router.post('/', authenticateToken, async (req, res) => {
  const { name, userId, folderId } = req.body;
  // const userId = req.user.id;

  // try {
  //   // Check if the user has permission to upload to the specified folder
  //   // (similar to the route handler in the previous example)
  //   // Check if the user has permission to upload to the specified folder
  //   const query = 'SELECT * FROM folders WHERE id = $1 AND user_id = $2';
  //   const values = [folderId, userId];
  //   const result = await client.query(query, values);

    // Upload the file to S3
    // const fileUrl = await uploadFileToS3(req.file, 'all_data');

  //   // Save file metadata to the database
  // //   const newFile = await fileModel.uploadFile(name, size, uploadDate, userId, folderId);
  // //   res.status(201).json({ ...newFile, url: fileUrl });
  // } 
  // catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }


  try {
    await fileModel.uploadFile(req, res).then(data => {
      res.status(200).json({
        message: "Success",
        data: data
      })
    })
    .catch(error => {
      res.status(400).json({
        message: "An error occurred.",
        error
      });
    });
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}
});

export default router;

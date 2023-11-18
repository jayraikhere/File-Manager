import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import userRoutes from './routes/user.js';
import folderRoutes from './routes/folder.js';
import fileRoutes from './routes/file.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/folders', folderRoutes);
app.use('/api/files', fileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

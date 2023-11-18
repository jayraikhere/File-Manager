import client from '../db.js';
import uploadFileToS3 from '../services/s3.js';
class File {
  async uploadFile(req, res) {

    const { name, userId, folderId } = req.body;
    const values = [Math.random() * (100000000 - 0), name, userId, folderId];
 
    const fileUrl = await uploadFileToS3(req);
    // console.log(fileUrl);
    // const query = `INSERT INTO "Files" (id, name, userid, folderid, fileurl) VALUES (${values[0]}, '${values[1]}', ${values[2]}, ${values[3]}, '${fileUrl}') RETURNING *`;
    // client.query(query, function(err, result) {
    //     if(err) {
    //       // return console.error('error running query', err);
    //       return res.status(400).json({ error: err });
    //     }
    //     // console.log(result.rows[0]);
    //     // return result.rows[0];
    //     return res.status(200).json(result.rows[0]);
    //   });
    }
};
export default File;

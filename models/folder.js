import client from '../db.js';

class Folder {
  async createFolder(req, res) {

    const parentFolderId = req.params.folderId;
    let query = "";
    const { name, userId} = req.body;
    if(parentFolderId)
    {
      query = `SELECT * FROM Folders WHERE name='${name}' AND parentname='${parentFolderId}' AND userid='${userId}'`;
    }
    else
    {
      query = `SELECT * FROM Folders WHERE name='${name}' AND parentname='root' AND userid='${userId}'`;
    }
    
    client.query(query, function(err, result) {
      if(err) {
        return res.status(400).json({message:"error running query", error: err});
      }
      
      if(result.rows.length > 0)
      return res.status(400).json({message:"Folder already exist, try to rename the folder"});

      else
      {
        const values = [Math.random() * (100000000 - 0), name, "root" || parentFolderId, userId];
        query = `insert into folders (id, name, parentname, userid) values (${values[0]}, '${values[1]}', '${values[2]}', ${values[3]}) RETURNING *`;
        client.query(query, function(err, result) {
          if(err) {
            return res.status(400).json({ error: err });
          }
          console.log(result.rows);
          return res.status(200).json(result.rows[0]);
          // client.end();
        });
      }
    });
    
  }

  async getFolderByName(req, res) {
    const { name, parentName, userId} = req.body;
    const query = `SELECT * FROM Folders WHERE name='${name}' AND parentname='${parentName}' AND userid='${userId}'`;
    client.query(query, function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }

      return result;
    });
  }

}

export default Folder;

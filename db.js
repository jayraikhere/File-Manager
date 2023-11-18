import pg from "pg";
import dotenv from "dotenv"


dotenv.config();
const conString = process.env.DATABASE_URL 
var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    client.end();
    return console.error('could not connect to postgres', err);
  }

    else{
      console.log("Postgre SQL connected");
    }
  });

export default client;

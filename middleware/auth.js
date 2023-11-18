import jwt from 'jsonwebtoken';

import dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];

    if(token)
    req.user = jwt.verify(token, process.env.hashtoken);
    next();
};
export default auth;
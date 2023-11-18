## `File Manager Application`

The File Manager Application is a Node.js-based web application that allows users to manage files and folders efficiently. It leverages PostgreSQL for database storage, AWS S3 for file storage, and provides a RESTful API for various functionalities.

## Features

- User Registration and Authentication
- Folder Creation
- File Upload to AWS S3


## Tech stack and concepts used
  - Nodejs
  - Expressjs
  - AWS S3
  - Postgre SQL
  - Multer
  - Bcrypt
  - JsonWebToken

## API Endpoints

- ### User:
    - POST /api/users/register: User registration
    - POST /api/users/login: User login
- ### Folder:
    - POST /api/folders: Create a new folder
- ### File:
    - POST /api/files: Upload a file to AWS S3

## Further Improvements
- I am planing to make subfolder functionality.

## Hosted Link 
https://file-manager-ytun.onrender.com

## Instructions for local setup:

Clone this repo using
```bash
git clone https://github.com/jayraikhere/File-Manager.git
cd File-Manager
```
After cloning create a <code>.env</code> file to store all the environment variables.
<br>Fill in the <code>.env</code> file with the content as follows.

```env
AWS_ACCESS_KEY_ID  = RETRACTED (Put Your AWS Access Key)
AWS_SECRET_ACCESS_KEY = RETRACTED (Put Your AWS Secret Access Key)
S3_REGION =  RETRACTED (Put Your S3 Region)
S3_BUCKET = RETRACTED (Put Your S3 Bucket Name)
DATABASE_URL = RETRACTED (URL for Postgre SQL)
hashtoken =  RETRACTED (Put a secret string)
PORT = 3000
```
After setting the <code>.env</code> file,
<br>For installing all Modules and Packages

```bash
npm install
```
To start the server run the command
```bash
npm start
```

The server will start on port `3000`.
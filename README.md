# mPATH-VENOMY
Under construction:  This repo is currently being built with the VueExpressNodeMySQL (Venomy) tech stack.  

# Requirements
NodeJS 16x or above
mySQL database
.env file with the values of your own database (not the example values given below)


# Installation Steps
Git clone this link with to your local machine https://github.com/MicroHealthLLC/mPATH-VENOMY.git
cd to mPATH-VENOMY/server directory
Run npm i to install back-end dependencies
Create a .env file in the root of the server directory with the values below
Run npm run dev to startup the server and the database
Open an additional terminal and cd to client directory
Run npm i to install front-end dependencies.
Run npm run dev in client diretory to start up the app - your terminal should start up on port localhost:5173.


Values for the server .env file:
```
DB_NAME=you-db-name
DB_USER=username
DB_PASSWORD=password
DB_HOST=127.0.0.1
DB_PORT=3306
PORT=3000
JWT_SECRET_KEY='you-jwt-secret-key'
```

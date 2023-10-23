# mPATH-VENOMY
Under construction:  This repo is currently being built with the VueExpressNodeMySQL (Venomy) tech stack.  

# Requirements
- NodeJS 16x or above
- Vue 3
- mySQL database
- .env file with the values of your own database (not the example values given below)


# Installation Steps
1. Git clone this link to your local machine **https://github.com/MicroHealthLLC/mPATH-VENOMY.git**
2. cd to **mPATH-VENOMY/server** directory
3. Run _npm i_ to install back-end dependencies
4. Create a .env file in the root of the server directory with the values below
5. Run _npm run dev_ to startup the server and the database
6. Open an additional terminal and cd to **client** directory
7. Run _npm i_ to install front-end dependencies.
8. Run _npm run dev_ in client diretory to start up the app - your terminal should start up on port localhost:5173.


# Values for the server .env file:
```
DB_NAME=you-db-name
DB_USER=username
DB_PASSWORD=password
DB_HOST=127.0.0.1
DB_PORT=3306
PORT=3000
JWT_SECRET_KEY='you-jwt-secret-key'
```

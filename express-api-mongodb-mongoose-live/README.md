# Express API with MongoDB, Mongoose
This project is an API built with Express, using MongoDB as the database and Mongoose for object data modeling (ODM). It provides endpoints for managing aliens and interacting with a MongoDB database.


## Installation and Setup


### 1. Install Express Generator
Use `express-generator` to quickly create a basic project template:
```bash
npm i -g express-generator
express -h
express --no-view 
npm install
```


### 2. Install Required Dependencies
Install the essential and development dependencies:
```bash
npm install dotenv mongoose
npm install --save-dev nodemon
```


### 3. Update package.json
Add a script to run the server using `nodemon` for development:
```json
"server": "nodemon ./bin/www"
```


### 4. Create Controllers
Define controllers for your routes. For example, create `controllers/aliens.js` to manage alien-related functionality.


### 5. Running the Application
Before running the application, ensure you have added the following line to your `.env` file to define the port:
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/aliens
```
After setting up your MongoDB connection and adding the .env file with your credentials, you can run the application:
```bash
npm run server
```
This will start the server in development mode and connect it to your MongoDB database. By default, it will run on `localhost:8000` (or the port defined in .env).


### 6. License
This project is licensed under the MIT License.
# Express API with SQLite3 and Swagger UI
This project is an API built with Express, using SQLite3 as the database.
It provides endpoints for managing posts and interacting with a SQLite3 database. Additionally, it integrates Swagger UI for API documentation and testing.


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
npm install dotenv sqlite3 swagger-ui-express swagger-jsdoc
npm install --save-dev nodemon
```


### 3. Update package.json
Add a script to run the server using `nodemon` for development:
```json
"server": "nodemon ./bin/www"
```


### 4. Create Controllers
Define controllers for your routes. For example, create `controllers/posts.js` to manage post-related functionality.


### 5. Running the Application
Before running the application, ensure you have added the following line to your `.env` file to define the port:
```env
PORT=8000
```
After setting up your database and adding the `.env` file with your credentials, you can run the application:
```bash
npm run server
```
This will start the server in development mode and connect it to your SQLite3 database. By default, it will run on `localhost:8000` (or the port defined in `.env`).

#### Swagger Documentation
Access the Swagger UI documentation at:
```bash
http://localhost:8000/docs
```


### 6. License
This project is licensed under the MIT License.
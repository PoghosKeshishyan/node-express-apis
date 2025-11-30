# Express API with PostgreSQL
This project is an API built with Express, using PostgreSQL as the database.  
It provides endpoints for managing cars and interacting with a PostgreSQL database.


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
npm install dotenv pg
npm install --save-dev nodemon
```


### 3. Update package.json
Add a script to run the server using `nodemon` for development:
```json
"server": "nodemon ./bin/www"
```


### 4. Create Controllers
Define controllers for your routes. For example, create `controllers/cars.js` to manage car-related functionality.


### 5. Database Setup
- Ensure you have PostgreSQL installed and running.
- Create a database for your application.
- Use environment variables (via `.env`) to store your database credentials:
```env
PORT=8000
DB_HOST=localhost
DB_USER=postgres
DB_NAME=postgres
DB_PASSWORD=123456
DB_PORT=5432
```


### 6. Running the Application
After setting up your database and adding the `.env` file with your credentials, you can run the application:
```bash
npm run server
```
This will start the server in development mode and connect it to your PostgreSQL database. By default, it will run on `localhost:8000` (or the port defined in `.env`).


### 7. License
This project is licensed under the MIT License.
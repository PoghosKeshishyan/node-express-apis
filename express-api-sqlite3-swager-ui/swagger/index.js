const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express CRUD API",
            version: "1.0.0",
            description: "A simple REST API built with <strong>Express.js</strong>, <strong>SQLite3</strong>, and <strong>Swagger UI</strong> for managing posts.",
        },
    },
    apis: ["./routes/*.js"], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerDocs;
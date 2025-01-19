const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Product API',
            version: '1.0.0',
            description: 'API documentation for the Product API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                Product: {
                    type: 'object',
                    required: ['name', 'quantity', 'price'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'The name of the product',
                        },
                        quantity: {
                            type: 'integer',
                            description: 'The quantity of the product',
                        },
                        price: {
                            type: 'number',
                            description: 'The price of the product',
                        },
                        image: {
                            type: 'string',
                            description: 'The image URL of the product',
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js', './models/*.js'], // Path to the API docs
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = { swaggerUi, swaggerDocs };

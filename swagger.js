import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuarios y Mascotas',
            version: '1.0.0',
            description: 'API para manejar usuarios y sus mascotas'
        },
        servers: [
            {
                url: 'http://localhost:18868',
            },
        ],
    },
    apis: ['./routes/mocks.router.js'], // Ruta a tu archivo de rutas
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
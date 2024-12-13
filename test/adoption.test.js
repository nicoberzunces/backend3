const request = require('supertest');
const app = require('../app'); // Asegúrate de que app.js exporta el servidor Express

describe('Pruebas para adoption.router.js', () => {
    it('debería responder con un estado 200 al obtener la lista de adopciones', async () => {
        const res = await request(app).get('/api/adoption');
        expect(res.statusCode).toEqual(200);
    });

});
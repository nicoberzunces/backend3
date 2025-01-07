import request from 'supertest';
import app from '../app.js'; 

describe('Tests para adoption.router.js', () => {
    it('Debería devolver todas las adopciones con un código 200', async () => {
        const res = await request(app).get('/api/adoption');
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array); 
    });

    it('Debería crear una nueva adopción con un código 201', async () => {
        const res = await request(app)
            .post('/api/adoption')
            .send({
                adopter: '1234567890abcdef12345678', 
                pet: '1234567890abcdef12345679',  
                date: '2025-01-07',
            });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('id');
    });

    it('Debería devolver un error 400 si los datos enviados son incorrectos', async () => {
        const res = await request(app)
            .post('/api/adoption')
            .send({
                adopter: '',
                pet: '',
                date: '',
            });
        expect(res.status).toBe(400); 
        expect(res.body).toHaveProperty('error'); 
    });

    it('Debería devolver una adopción específica por ID con un código 200', async () => {
        const adoptionId = '1234567890abcdef12345680'; 
        const res = await request(app).get(`/api/adoption/${adoptionId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id', adoptionId);
    });

    it('Debería devolver un error 404 si la adopción no existe', async () => {
        const invalidId = '000000000000000000000000'; 
        const res = await request(app).get(`/api/adoption/${invalidId}`);
        expect(res.status).toBe(404); 
        expect(res.body).toHaveProperty('error');
    });

    it('Debería eliminar una adopción por ID con un código 200', async () => {
        const adoptionId = '1234567890abcdef12345681'; 
        const res = await request(app).delete(`/api/adoption/${adoptionId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message', 'Adopción eliminada correctamente');
    });

    it('Debería devolver un error 404 si intenta eliminar una adopción inexistente', async () => {
        const invalidId = '000000000000000000000000'; 
        const res = await request(app).delete(`/api/adoption/${invalidId}`);
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty('error');
    });
});

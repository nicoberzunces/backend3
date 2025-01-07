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
});

import request from 'supertest';
import app from '../app'; // Asegúrate de que la ruta sea correcta

describe('Adopciones API', () => {
  
  let adoptionId;

  test('Crear adopción', async () => {
    const response = await request(app)
      .post('/adoptions')
      .send({
        adopter: '1234567890abcdef12345678', // Cambia esto por un ID válido o mock
        animal: '1234567890abcdef12345678', // Cambia esto por un ID válido o mock
      });
    expect(response.status).toBe(201);
    adoptionId = response.body._id; // Guarda el ID de la adopción para las pruebas posteriores
  });

  test('Actualizar adopción', async () => {
    const response = await request(app)
      .put(`/adoptions/${adoptionId}`)
      .send({
        adopter: 'new-adopter-id', 
        animal: 'new-animal-id', 
      });
    expect(response.status).toBe(200);
  });

  test('Eliminar adopción', async () => {
    const response = await request(app)
      .delete(`/adoptions/${adoptionId}`);
    expect(response.status).toBe(200);
  });

});


/**
 * @swagger
 * /adoptions:
 *   post:
 *     summary: Crear una nueva adopción
 *     requestBody:
 *       description: Información de la adopción
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adopter:
 *                 type: string
 *               animal:
 *                 type: string
 *     responses:
 *       201:
 *         description: Adopción creada correctamente
 */

/**
 * @swagger
 * /adoptions/{id}:
 *   put:
 *     summary: Actualizar una adopción por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la adopción a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Información de la adopción a actualizar
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               adopter:
 *                 type: string
 *               animal:
 *                 type: string
 *     responses:
 *       200:
 *         description: Adopción actualizada correctamente
 *       404:
 *         description: Adopción no encontrada
 */

/**
 * @swagger
 * /adoptions/{id}:
 *   delete:
 *     summary: Eliminar una adopción por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la adopción a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción eliminada correctamente
 *       404:
 *         description: Adopción no encontrada
 */

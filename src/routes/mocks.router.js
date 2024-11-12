import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Pet from '../models/Pet.js';

const mocksRouter = Router();

const generateMockUsers = (numUsers) => {
    const roles = ['user', 'admin'];
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        const passwordHash = bcrypt.hashSync('coder123', 10);
        users.push({
            username: `user${i}`,
            email: `user${i}@example.com`,
            password: passwordHash,
            role: roles[Math.floor(Math.random() * roles.length)],
            pets: []
        });
    }
    return users;
};

mocksRouter.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});

mocksRouter.post('/generateData', async (req, res) => {
    const { users = 0, pets = 0 } = req.body;

    const generatedUsers = generateMockUsers(users);
    try {
        const insertedUsers = await User.insertMany(generatedUsers);
        console.log(`Se generaron e insertaron ${insertedUsers.length} usuarios.`);

        
        const generatedPets = [];
        for (let i = 0; i < pets; i++) {
            const randomOwner = insertedUsers[Math.floor(Math.random() * insertedUsers.length)]._id;
            generatedPets.push({ name: `pet${i}`, type: 'unknown', owner: randomOwner });
        }
        await Pet.insertMany(generatedPets);
        console.log(`Se generaron e insertaron ${pets} mascotas.`);

        res.json({ message: `Generados ${users} usuarios y ${pets} mascotas.` });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar datos', details: error.message });
    }
});

export default mocksRouter;

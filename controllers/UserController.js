import * as UserDAO from '../daos/UserDAO.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserDAO.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

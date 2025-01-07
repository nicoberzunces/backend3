import User from '../models/User.js';

export const getAllUsers = () => User.find();
export const getUserById = (id) => User.findById(id);
export const createUser = (userData) => User.create(userData);
export const updateUser = (id, userData) => User.findByIdAndUpdate(id, userData, { new: true });
export const deleteUser = (id) => User.findByIdAndDelete(id);

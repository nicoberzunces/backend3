import Pet from '../models/Pet.js';

export const getAllPets = () => Pet.find();
export const getPetById = (id) => Pet.findById(id);
export const createPet = (petData) => Pet.create(petData);
export const updatePet = (id, petData) => Pet.findByIdAndUpdate(id, petData, { new: true });
export const deletePet = (id) => Pet.findByIdAndDelete(id);

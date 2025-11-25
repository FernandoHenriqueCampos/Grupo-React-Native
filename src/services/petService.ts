<<<<<<< HEAD
import { api } from './api';
import { Pet } from '../types';
=======
// src/services/petService.ts
import { Pet } from '../@types/types'; // Importa a interface Pet
>>>>>>> bfea7f014a8b3e25981ab926d8560d40930f5814


interface ApiAnimal {
  id: string;
  nome: string;
  raca: string;
  image: string;
  cor: string;
  peso: number;
  porte: string;
  idade: number;
  genero: string;
  tipo: string;
}

export const fetchPetDetailsByIds = async (ids: string[] = []): Promise<Pet[]> => {
  
  if (!ids || ids.length === 0) return []; 

  try {
    
    const response = await api.get('/animais');
    const todosAnimais: ApiAnimal[] = response.data;

    
    const favoritosDaApi = todosAnimais.filter(animal => 
      ids.includes(String(animal.id))
    );

    
    const favoritosFormatados: Pet[] = favoritosDaApi.map(animal => ({
      id: String(animal.id),
      name: animal.nome,        
      breed: animal.raca,        
      photo: animal.image,       
      location: 'Abrigo Mock',   
      distance: 0,               
      description: `Cor: ${animal.cor}, Peso: ${animal.peso}kg`, 
      sex: animal.genero === 'macho' ? 'male' : 'female',
      age: `${animal.idade} anos`,
      species: animal.tipo       
    }));

    return favoritosFormatados;

  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return []; 
  }
};


export const fetchAllPets = async (): Promise<Pet[]> => {
    try {
        const response = await api.get('/animais');
        const lista: ApiAnimal[] = response.data;
        
        return lista.map(animal => ({
            id: String(animal.id),
            name: animal.nome,
            breed: animal.raca,
            photo: animal.image,
            location: 'Abrigo Mock',
            distance: 2.5,
            age: `${animal.idade} anos`
        }));
    } catch (error) {
        console.error("Erro ao buscar todos:", error);
        return [];
    }
};
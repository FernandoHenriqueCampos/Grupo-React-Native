import { api } from './api';
import { Pet } from '../types';

// Interface exata baseada no JSON que você forneceu
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
  // Se não tem IDs, retorna vazio
  if (!ids || ids.length === 0) return []; 

  try {
    // 1. Busca todos os animais da API
    const response = await api.get('/animais');
    const todosAnimais: ApiAnimal[] = response.data;

    // 2. Filtra apenas os que estão nos favoritos (IDs batem?)
    const favoritosDaApi = todosAnimais.filter(animal => 
      ids.includes(String(animal.id))
    );

    // 3. Mapeia (Transforma os dados da API nos dados do APP)
    const favoritosFormatados: Pet[] = favoritosDaApi.map(animal => ({
      id: String(animal.id),
      name: animal.nome,         // JSON 'nome' -> App 'name'
      breed: animal.raca,        // JSON 'raca' -> App 'breed'
      photo: animal.image,       // JSON 'image' -> App 'photo'
      location: 'Abrigo Mock',   // Dado fixo (não tem no JSON)
      distance: 0,               // Dado fixo
      description: `Cor: ${animal.cor}, Peso: ${animal.peso}kg`, // Montamos uma descrição
      sex: animal.genero === 'macho' ? 'male' : 'female',
      age: `${animal.idade} anos`,
      species: animal.tipo       // 'gato' ou 'cachorro'
    }));

    return favoritosFormatados;

  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return []; 
  }
};

// Função para buscar todos (para a Home, se precisar)
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
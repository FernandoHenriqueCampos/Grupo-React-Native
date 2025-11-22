import { api } from '../services/api';
import { Pet } from '../types';

// Interface que define o formato dos dados que vêm da API do colega (em Português)
interface ApiAnimal {
  id: string | number;
  nome: string;
  raca: string;
  image: string;
  tipo: string;
  localizacao?: string; // Campo opcional
  idade?: string;       // Campo opcional
}

/**
 * Busca os detalhes dos pets favoritos usando a API real.
 * Realiza a conversão (Mapper) dos dados para não quebrar o layout.
 */
export const fetchPetDetailsByIds = async (ids: string[] = []): Promise<Pet[]> => {
  // Se a lista de IDs favoritos estiver vazia ou nula, retorna array vazio imediatamente
  if (!ids || ids.length === 0) {
    return []; 
  }

  try {
    // 1. Busca a lista completa de animais da API
    const response = await api.get('/animais');
    const todosAnimais: ApiAnimal[] = response.data;

    // 2. Filtra apenas os animais cujos IDs estão na lista de favoritos do usuário
    // Convertemos ambos para String para evitar erros de comparação
    const favoritosDaApi = todosAnimais.filter(animal => 
      ids.includes(String(animal.id))
    );

    // 3. Mapeia os dados: Converte do formato da API (ApiAnimal) para o formato do App (Pet)
    const favoritosFormatados: Pet[] = favoritosDaApi.map(animal => ({
      id: String(animal.id),
      name: animal.nome,      // De 'nome' (API) para 'name' (Componente)
      breed: animal.raca,     // De 'raca' (API) para 'breed' (Componente)
      photo: animal.image,    // De 'image' (API) para 'photo' (Componente)
      
      // Preenche campos faltantes com valores padrão
      location: animal.localizacao || 'Unidade Pet', 
      distance: 0,             
      age: animal.idade || 'Idade não informada',
      species: animal.tipo
    }));

    return favoritosFormatados;

  } catch (error) {
    console.error("Erro ao buscar favoritos na API:", error);
    return []; 
  }
};

// Função auxiliar para buscar todos os pets
export const fetchAllPets = async (): Promise<Pet[]> => {
    try {
        const response = await api.get('/animais');
        return response.data.map((animal: ApiAnimal) => ({
            id: String(animal.id),
            name: animal.nome,
            breed: animal.raca,
            photo: animal.image,
            location: 'Unidade Pet',
            distance: 0,
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
};
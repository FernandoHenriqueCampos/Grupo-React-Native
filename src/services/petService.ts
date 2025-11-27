import { Animal } from '../@types/types'; 
import { apiPets } from './api'; 
import { AxiosError } from 'axios'; 

const ENDPOINT = '/animais'; 

export const fetchPetDetailsByIds = async (ids: string[] = []): Promise<Animal[]> => {
  if (!ids || ids.length === 0) return []; 

  if (!apiPets) {
    console.error("ERRO CRÍTICO: apiPets não está definido. Verifique a configuração da BASE_URL em src/services/api.ts e suas variáveis de ambiente.");
    return [];
  }

  try {
    const response = await apiPets.get(ENDPOINT); 
    const todosAnimais: Animal[] = response.data;

    const favoritos = todosAnimais.filter(animal => 
      ids.includes(String(animal.id))
    );

    return favoritos;

  } catch (error) {
    if (error instanceof AxiosError) {
        console.error("Erro Axios ao buscar favoritos:", error.message, error.response?.status);
    } else {
        console.error("Erro desconhecido ao buscar favoritos:", error);
    }
    return []; 
  }
};

export const fetchAllPets = async (): Promise<Animal[]> => {
    if (!apiPets) {
      console.error("ERRO CRÍTICO: apiPets não está definido. Verifique a configuração da BASE_URL em src/services/api.ts e suas variáveis de ambiente.");
      return [];
    }
    
    try {
        const response = await apiPets.get(ENDPOINT);
        
        return response.data; 
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error("Erro Axios ao buscar todos os pets:", error.message, error.response?.status);
        } else {
            console.error("Erro desconhecido ao buscar todos os pets:", error);
        }
        return [];
    }
};
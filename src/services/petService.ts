// src/services/petService.ts
import { Pet } from '../types'; // Importa a interface Pet

// Mock de dados (Simulando uma resposta de API)
const mockPetData: Pet[] = [
  {
    id: '1',
    name: 'Gatito',
    breed: 'SRD',
    photo: 'https://picsum.photos/id/237/120/120',
    location: 'São Paulo - SP',
    distance: 5,
  },
  {
    id: '2',
    name: 'Rex',
    breed: 'Labrador',
    photo: 'https://picsum.photos/id/1025/120/120',
    location: 'Rio de Janeiro - RJ',
    distance: 12,
  },
  {
    id: '3',
    name: 'Luna',
    breed: 'Poodle',
    photo: 'https://picsum.photos/id/1084/120/120',
    location: 'Belo Horizonte - MG',
    distance: 8,
  },
  {
    id: '4',
    name: 'Bolinha',
    breed: 'SRD',
    photo: 'https://picsum.photos/id/219/120/120',
    location: 'Curitiba - PR',
    distance: 15,
  },
];

/**
 * Simula a busca de detalhes de pets com base em uma lista de IDs.
 * Se nenhum ID for fornecido, retorna todos os pets mockados.
 * @param ids Lista de IDs de pets favoritos.
 * @returns Promessa de um array de objetos Pet.
 */
export const fetchPetDetailsByIds = async (ids: string[] = []): Promise<Pet[]> => {
  // Simula um delay de rede
  await new Promise(resolve => setTimeout(resolve, 500)); 
  
  if (ids.length === 0) {
    // Se não há IDs nos favoritos, retorna uma lista vazia,
    // ou você pode retornar uma lista para fins de demonstração inicial.
    // Vamos retornar a lista mockada para facilitar o teste inicial.
    return mockPetData.filter(pet => ['1', '2'].includes(pet.id)); // Retorna 2 pets como padrão
  }

  // Filtra os dados mockados para retornar apenas os pets que estão na lista de favoritos (ids)
  return mockPetData.filter(pet => ids.includes(pet.id));
};
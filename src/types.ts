// --- ENTIDADES (Usadas no App todo) ---
export interface Pet {
  id: string;
  name: string;
  breed: string;
  location: string;
  distance: number;
  photo: string;
  // Campos opcionais que usamos no Modal (boa prática adicionar aqui)
  sex?: string;
  age?: string;
  size?: string;
  description?: string;
}

// --- TIPOS DE CONTEXTO ---
export interface FavoritesContextType {
  favoritePetIds: string[];
  toggleFavorite: (petId: string) => void;
  removeFavorite: (petId: string) => void; // Adicionado para bater com a implementação real
  isFavorite: (petId: string) => boolean;
  isReady: boolean;
}
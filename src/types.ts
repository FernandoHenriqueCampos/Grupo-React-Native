export interface Pet {
  id: string;
  name: string;
  breed: string;
  location: string;
  distance: number;
  photo: string;
}

// --- TIPOS DE CONTEXTO ---
export interface FavoritesContextType {
  favoritePetIds: string[];
  toggleFavorite: (petId: string) => void;
  isFavorite: (petId: string) => boolean;
  isReady: boolean;
}

// Em um projeto maior, você adicionaria aqui as interfaces de User, AuthToken, etc.
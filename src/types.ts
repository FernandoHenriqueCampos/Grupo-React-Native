export interface FavoritesContextType {
  favoritePetIds: string[];
  toggleFavorite: (petId: string) => void;
  removeFavorite: (petId: string) => void; 
  isFavorite: (petId: string) => boolean;
  isReady: boolean;
}
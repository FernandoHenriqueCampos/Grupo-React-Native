import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



interface FavoritesContextType {
  favoritePetIds: string[];
  toggleFavorite: (petId: string) => void;
  removeFavorite: (petId: string) => void; 
  isFavorite: (petId: string) => boolean;
  isReady: boolean;
}

const STORAGE_KEY = '@FavoritePetIds';

const defaultContextValue: FavoritesContextType = {
  favoritePetIds: [],
  toggleFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
  isReady: false,
};

const FavoritesContext = createContext<FavoritesContextType>(defaultContextValue);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favoritePetIds, setFavoritePetIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedIds = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedIds) {
          setFavoritePetIds(JSON.parse(storedIds));
        }
      } catch (e) {
        console.error("Erro ao carregar favoritos:", e);
      } finally {
        setIsReady(true);
      }
    };
    loadFavorites();
  }, []);

  
  useEffect(() => {
    if (isReady) {
      const saveFavorites = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favoritePetIds));
        } catch (e) {
          console.error("Erro ao salvar favoritos:", e);
        }
      };
      saveFavorites();
    }
  }, [favoritePetIds, isReady]);

  
  const toggleFavorite = (petId: string) => {
    setFavoritePetIds(prevIds => {
      return prevIds.includes(petId) 
        ? prevIds.filter(id => id !== petId) 
        : [...prevIds, petId]; 
    });
  };

  
  const removeFavorite = (petId: string) => {
    setFavoritePetIds(prevIds => prevIds.filter(id => id !== petId));
  };

  const isFavorite = (petId: string) => favoritePetIds.includes(petId);

  return (
    <FavoritesContext.Provider 
      value={{ favoritePetIds, toggleFavorite, removeFavorite, isFavorite, isReady }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
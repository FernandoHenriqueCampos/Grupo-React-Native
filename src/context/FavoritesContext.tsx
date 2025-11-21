import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoritesContextType } from '../types'; // Importa a interface que criamos

const STORAGE_KEY = '@FavoritePetIds';

// 1. Definição do valor padrão tipado
const defaultContextValue: FavoritesContextType = {
  favoritePetIds: [],
  // As funções vazias são necessárias para evitar erros de TypeScript
  toggleFavorite: () => {},
  isFavorite: () => false,
  isReady: false,
};

// 2. Criação do Context
const FavoritesContext = createContext<FavoritesContextType>(defaultContextValue);

// 3. O Provider que gerencia o estado e a persistência
export const FavoritesProvider = ({ children }: {children:React.ReactNode}) => {
  const [favoritePetIds, setFavoritePetIds] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false); // Flag para indicar que o AsyncStorage carregou

  // --- Efeito 1: Carregar dados do AsyncStorage ao iniciar ---
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedIds = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedIds) {
          // Garante que o JSON.parse retorna um array de strings
          const parsedIds: string[] = JSON.parse(storedIds);
          setFavoritePetIds(parsedIds);
        }
      } catch (e) {
        console.error("Erro ao carregar favoritos:", e);
      } finally {
        // Marca o Context como pronto, independentemente do sucesso
        setIsReady(true);
      }
    };
    loadFavorites();
  }, []);

  // --- Efeito 2: Salvar dados no AsyncStorage sempre que favoritePetIds mudar ---
  useEffect(() => {
    // Só salva se o estado já estiver sido carregado (isReady)
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

  // --- Funções de manipulação exportadas pelo Context ---
  
  const toggleFavorite = (petId: string) => {
    setFavoritePetIds(prevIds => {
      // Se o ID já está na lista, remove. Se não, adiciona.
      return prevIds.includes(petId) 
        ? prevIds.filter(id => id !== petId) 
        : [...prevIds, petId]; 
    });
  };

  const isFavorite = (petId: string) => favoritePetIds.includes(petId);

  return (
    <FavoritesContext.Provider 
      value={{ favoritePetIds, toggleFavorite, isFavorite, isReady }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// 4. Hook customizado para fácil consumo
export const useFavorites = () => useContext(FavoritesContext);
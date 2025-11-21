// src/pages/Favoritos/index.tsx (CÓDIGO FINAL COMPLETO)
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// 🚨 Caminhos de importação
import { styles } from './style';
import { useFavorites } from '../../context/FavoritesContext'; 
import PetCard from '../../components/petcard/PetCard';
import { Pet } from '../../types';                      
import { fetchPetDetailsByIds } from '../../services/petService'; 

// O componente que sua rota espera (export default Favoritos)
const Favoritos: React.FC = () => {
  const { favoritePetIds, isReady } = useFavorites(); 
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Efeito para buscar os detalhes dos pets (simulação de API)
  useEffect(() => {
    const loadFavoritePets = async () => {
      // Impede o carregamento até que o AsyncStorage termine
      if (!isReady) return; 

      setIsLoading(true);
      const data = await fetchPetDetailsByIds(favoritePetIds);
      setFavoritePets(data);
      setIsLoading(false);
    };
    loadFavoritePets();
  }, [favoritePetIds, isReady]);
  
  if (!isReady || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={{ marginTop: 10 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>❤️ Meus Pets Favoritos</Text>
      
      {favoritePets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="heart-dislike-outline" size={50} color="#ccc" />
          <Text style={styles.emptyText}>Você não tem favoritos!</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {favoritePets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Favoritos;
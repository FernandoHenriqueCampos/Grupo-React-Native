import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './style';
import { useFavorites } from '../../context/FavoritesContext';
import PetCard from '../../components/petcard/PetCard';
import PetDetailModal from '../../components/modal/PetDetailModal';
import { Pet } from '../../types';
import { fetchPetDetailsByIds } from '../../services/petService'; 

const Favoritos: React.FC = () => {
  const { favoritePetIds, isReady, toggleFavorite } = useFavorites();

  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Controle do Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  // --- FUNÇÃO DE BUSCA (Reutilizável) ---
  const loadFavoritePets = useCallback(async () => {
    // Se o contexto ainda não carregou os IDs do celular, não faz nada
    if (!isReady) return;

    // Se não for um refresh manual (puxar pra baixo), mostra loading tela cheia
    if (!isRefreshing) setIsLoading(true);

    try {
      if (favoritePetIds.length === 0) {
        setFavoritePets([]); // Lista vazia
      } else {
        // Busca apenas os IDs reais que estão no contexto
        console.log("Buscando na API os IDs:", favoritePetIds);
        const petsData = await fetchPetDetailsByIds(favoritePetIds);
        setFavoritePets(petsData);
      }
    } catch (error) {
      console.error("Erro ao buscar favoritos:", error);
      Alert.alert("Ops", "Não foi possível atualizar a lista de favoritos.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [favoritePetIds, isReady, isRefreshing]);

  // --- EFEITO: Roda quando abre a tela ou quando a lista de favoritos muda ---
  useEffect(() => {
    loadFavoritePets();
  }, [favoritePetIds, isReady]);

  // --- AÇÕES DO USUÁRIO ---
  
  const handleOpenModal = (pet: Pet) => {
    setSelectedPet(pet);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPet(null);
  };

  const handleAdoptAction = (petId: string) => {
    console.log(`Solicitação de adoção para: ${petId}`);
    setIsModalVisible(false);
    Alert.alert("Sucesso!", "O abrigo foi notificado do seu interesse.");
  };

  const handleRemovePet = (petId: string) => {
    Alert.alert(
      "Remover Favorito",
      "Deseja remover este pet da sua lista?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Remover", 
          style: 'destructive',
          onPress: () => {
            // Atualização Otimista: Remove da tela antes mesmo do contexto processar
            setFavoritePets(current => current.filter(p => p.id !== petId));
            toggleFavorite(petId);
          }
        }
      ]
    );
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    loadFavoritePets();
  };

  // --- RENDERIZAÇÃO ---

  if (isLoading && !isRefreshing) {
    return (
      <View style={styles.loadingContainer || {flex: 1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={{ marginTop: 10, color: '#666' }}>Carregando favoritos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>❤️ Meus Favoritos</Text>
      
      {favoritePets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-dislike-outline" size={60} color="#ddd" />
          <Text style={styles.emptyText}>Você ainda não favoritou nenhum pet.</Text>
          <Text style={{color: '#999', fontSize: 14, marginTop: 5, textAlign: 'center', paddingHorizontal: 20}}>
            Vá para a tela inicial e clique no coração dos pets que você gostar!
          </Text>
        </View>
      ) : (
        <FlatList 
          data={favoritePets}
          keyExtractor={(pet) => pet.id}
          renderItem={({ item }) => (
            <PetCard 
              pet={item}
              onDetailPress={handleOpenModal}
              onRemove={() => handleRemovePet(item.id)} 
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          
          // Funcionalidade de "Puxar para atualizar"
          onRefresh={onRefresh}
          refreshing={isRefreshing}
        />
      )}

      <PetDetailModal
        pet={selectedPet}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onAdopt={handleAdoptAction}
      />
    </View>
  );
};

export default Favoritos;
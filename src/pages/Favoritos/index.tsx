import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native'; // Trocado ScrollView por FlatList
import Icon from 'react-native-vector-icons/Ionicons';

// Caminhos de importação
import { styles } from './style';
import { useFavorites } from '../../context/FavoritesContext'; 
import PetCard from '../../components/petcard/PetCard';
import PetDetailModal from '../../components/modal/PetDetailModal';
import { Pet } from '../../types';                      
import { fetchPetDetailsByIds } from '../../service/petService'; 

// --- CONFIGURAÇÃO DE TESTE ---
// Mude para FALSE quando terminar os testes e for usar o Login real
const TEST_MODE = true; 

const MOCK_PETS: Pet[] = [
  { 
    id: '1', 
    name: 'Rex (Teste)', 
    breed: 'Labrador', 
    photo: 'https://placedog.net/500', 
    location: 'São Paulo, SP',
    distance: 2.5
  },
  { 
    id: '2', 
    name: 'Mia (Teste)', 
    breed: 'Siames', 
    photo: 'https://placekitten.com/500', 
    location: 'Rio de Janeiro, RJ',
    distance: 10.0
  },
];
// -----------------------------

const Favoritos: React.FC = () => {
  // Se estiver em modo teste, ignoramos se o contexto não carregou
  const { favoritePetIds, isReady: contextIsReady } = useFavorites(); 
  const isReady = TEST_MODE ? true : contextIsReady;

  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // ESTADOS DO MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  // --- Funções de Manipulação do Modal ---
  const handleOpenModal = (pet: Pet) => { 
    setSelectedPet(pet);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPet(null);
  };

  const handleAdoptAction = (petId: string) => {
    console.log(`Ação de Adoção iniciada para o Pet ID: ${petId}`);
    console.warn(`Obrigado pelo seu interesse em adotar o pet ${petId}!`);
  };

  // Efeito para buscar os detalhes dos pets
  useEffect(() => {
    const loadFavoritePets = async () => {
      setIsLoading(true);

      // --- LÓGICA DE TESTE ---
      if (TEST_MODE) {
          console.log("⚠️ Carregando Favoritos em MODO TESTE");
          setTimeout(() => {
              setFavoritePets(MOCK_PETS);
              setIsLoading(false);
          }, 800); 
          return;
      }
      // -----------------------

      // --- LÓGICA REAL ---
      if (!isReady) return; 

      try {
        if (favoritePetIds.length > 0) {
            const data = await fetchPetDetailsByIds(favoritePetIds);
            setFavoritePets(data);
        } else {
            setFavoritePets([]);
        }
      } catch (error) {
          console.error("Erro ao buscar pets", error);
      } finally {
          setIsLoading(false);
      }
    };

    loadFavoritePets();
  }, [favoritePetIds, isReady]);
  
  // Renderização de Loading
  if (isLoading || (!isReady && !TEST_MODE)) {
    return (
      <View style={styles.loadingContainer || {flex: 1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={{ marginTop: 10 }}>
            {TEST_MODE ? "Gerando dados de teste..." : "Carregando..."}
        </Text>
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
        // --- FLATLIST IMPLEMENTADA ---
        <FlatList 
          data={favoritePets}
          keyExtractor={(pet) => pet.id}
          renderItem={({ item }) => (
            <PetCard 
              key={item.id}
              pet={item}
              onDetailPress={handleOpenModal} 
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
        />
        // -----------------------------
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
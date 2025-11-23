import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native'; 
// CORREÇÃO: Usando a biblioteca nativa do Expo (mesma do PetCard)
import { Ionicons } from '@expo/vector-icons';
=======
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
>>>>>>> 83bb6f62e097b51519bd21b4cdd521c3e1a9f371

import { styles } from './style';
import { useFavorites } from '../../context/FavoritesContext'; 
import PetCard from '../../components/petcard/PetCard';
<<<<<<< HEAD
import PetDetailModal from '../../components/modal/PetDetailModal';
import { Pet } from '../../types';                      
import { fetchPetDetailsByIds } from '../../service/petService'; 

// --- CONFIGURAÇÃO DE TESTE ---
// Mude para FALSE quando terminar os testes e for usar o Login real
const TEST_MODE = true; 

const MOCK_PETS: Pet[] = [
  { 
    id: '1', 
    name: 'Rex', 
    breed: 'Labrador', 
    photo: 'https://images.dog.ceo/breeds/labrador/n02099712_7418.jpg', 
    location: 'São Paulo, SP',
    distance: 2.5
  },
  { 
    id: '2', 
    name: 'Mia', 
    breed: 'Siamês', 
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg', 
    location: 'Rio de Janeiro, RJ',
    distance: 10.0
  },
  { 
    id: '3', 
    name: 'Thor', 
    breed: 'Bulldog Francês', 
    photo: 'https://images.dog.ceo/breeds/bulldog-french/n02108915_1223.jpg', 
    location: 'Curitiba, PR',
    distance: 5.2
  },
  { 
    id: '4', 
    name: 'Luna', 
    breed: 'Persa', 
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg', 
    location: 'Belo Horizonte, MG',
    distance: 15.0
  },
  { 
    id: '5', 
    name: 'Paçoca', 
    breed: 'SRD (Vira-lata)', 
    photo: 'https://images.dog.ceo/breeds/mix/n02104029_110.jpg', 
    location: 'Campinas, SP',
    distance: 1.8
  },
  { 
    id: '6', 
    name: 'Simba', 
    breed: 'Gato Laranja', 
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_March_2010-1.jpg/1200px-Cat_March_2010-1.jpg', 
    location: 'Salvador, BA',
    distance: 8.4
  },
  { 
    id: '7', 
    name: 'Bella', 
    breed: 'Golden Retriever', 
    photo: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg', 
    location: 'Porto Alegre, RS',
    distance: 12.5
  },
  { 
    id: '8', 
    name: 'Frajola', 
    breed: 'Misto', 
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white_cat_in_shirt_M0012904.jpg', 
    location: 'Florianópolis, SC',
    distance: 3.5
  }
];
// -----------------------------

const Favoritos: React.FC = () => {
  
  const { favoritePetIds, isReady: contextIsReady, toggleFavorite } = useFavorites(); 
  
  const isReady = TEST_MODE ? true : contextIsReady;

=======
import PetDetailModal from '../../components/modal/PetDetailModal'; // NOVO
import { Pet } from '../../types'; 
import { fetchPetDetailsByIds } from '../../services/petService'; 

// O componente que sua rota espera (export default Favoritos)
export const Favoritos = () => {
  const { favoritePetIds, isReady } = useFavorites(); 
>>>>>>> 83bb6f62e097b51519bd21b4cdd521c3e1a9f371
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const handleOpenModal = (pet: Pet) => { 
    setSelectedPet(pet);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPet(null);
  };

  const handleAdoptAction = (petId: string) => {
    console.log(`Interesse no Pet ID: ${petId}`);
    setIsModalVisible(false);
    Alert.alert("Sucesso!", "Seu interesse foi registrado.");
  };

  // --- LÓGICA DE REMOVER ---
  const handleRemovePet = (petId: string) => {
    Alert.alert(
      "Remover Favorito",
      "Tem certeza que deseja remover este pet dos favoritos?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Remover", 
          style: 'destructive',
          onPress: async () => {
            // 1. Atualização Otimista (Remove da tela imediatamente)
            setFavoritePets(currentList => currentList.filter(pet => pet.id !== petId));

            // 2. Lógica Real ou Teste
            if (TEST_MODE) {
                console.log(`[TEST_MODE] Pet ${petId} removido visualmente.`);
            } else {
                toggleFavorite(petId); 
            }
          }
        }
      ]
    );
  };
  // ------------------------------

  useEffect(() => {
    const loadFavoritePets = async () => {
      setIsLoading(true);

      if (TEST_MODE) {
          setTimeout(() => {
              setFavoritePets(MOCK_PETS);
              setIsLoading(false);
          }, 800); 
          return;
      }

      if (!isReady) return; 
    }
  }, [isReady]);

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
  
  if (isLoading || (!isReady && !TEST_MODE)) {
    return (
<<<<<<< HEAD
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
          {/* CORREÇÃO: Usando <Ionicons> em vez de <Icon> */}
          <Ionicons name="heart-dislike-outline" size={50} color="#ccc" />
          <Text style={styles.emptyText}>Você não tem favoritos!</Text>
        </View>
      ) : (
        <FlatList 
          data={favoritePets}
          keyExtractor={(pet) => pet.id}
          renderItem={({ item }) => (
=======
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {favoritePets.map(pet => (
            // CONECTA AO HANDLER DO MODAL
>>>>>>> 83bb6f62e097b51519bd21b4cdd521c3e1a9f371
            <PetCard 
              key={item.id}
              pet={item}
              onDetailPress={handleOpenModal}
              onRemove={() => handleRemovePet(item.id)} 
            />
<<<<<<< HEAD
          )}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
        />
      )}
=======
          ))}
        </ScrollView>
      )
>>>>>>> 83bb6f62e097b51519bd21b4cdd521c3e1a9f371

      <PetDetailModal
        pet={selectedPet}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onAdopt={handleAdoptAction}
      />
};
<<<<<<< HEAD

export default Favoritos;
=======
>>>>>>> 83bb6f62e097b51519bd21b4cdd521c3e1a9f371

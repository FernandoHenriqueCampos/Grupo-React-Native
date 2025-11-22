import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    ActivityIndicator, 
    StyleSheet, 
    Platform 
} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../../context/FavoritesContext'; 
import PetCard from '../../components/petcard/PetCard';
import PetDetailModal from '../../components/modal/PetDetailModal';
import { Pet } from '../../types';
import { fetchPetDetailsByIds } from '../../service/petService'; 

const Favoritos: React.FC = () => {
  const { favoritePetIds, isReady } = useFavorites(); 
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
    console.warn(`Obrigado pelo seu interesse em adotar o pet ${petId}!`);
  };

  useEffect(() => {
    const loadFavoritePets = async () => {
      if (!isReady) return; 
      setIsLoading(true);
      if (favoritePetIds.length > 0) {
        const data = await fetchPetDetailsByIds(favoritePetIds);
        setFavoritePets(data);
      } else {
          setFavoritePets([]);
      }
      setIsLoading(false);
    };
    loadFavoritePets();
  }, [favoritePetIds, isReady]); 
  
  if (!isReady || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={{ marginTop: 10, color: '#4CAF50' }}>Carregando Pets...</Text>
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
          <Text style={styles.emptySubText}>Toque no coração na tela principal para adicionar um pet.</Text>
        </View>
      ) : (
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

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f9f9f9', 
        paddingHorizontal: 16, 
        paddingTop: Platform.OS === 'android' ? 30 : 0 
    },
    headerTitle: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#333', 
        marginBottom: 20, 
        textAlign: 'center',
        paddingTop: 10,
    },
    loadingContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff',
    },
    emptyContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 40,
        marginVertical: 40,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    emptyText: { 
        fontSize: 18, 
        color: '#999', 
        marginTop: 15, 
        fontWeight: '700' 
    },
    emptySubText: { 
        fontSize: 14, 
        color: '#aaa', 
        marginTop: 5,
        textAlign: 'center'
    }, 
    scrollContent: { 
        paddingBottom: 40,
        paddingTop: 8,
    },
});

export default Favoritos;

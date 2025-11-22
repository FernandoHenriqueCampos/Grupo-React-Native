// src/pages/Favoritos/index.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Caminhos de importação
import { styles } from './style';
import { useFavorites } from '../../context/FavoritesContext'; 
import PetCard from '../../components/petcard/PetCard';
import PetDetailModal from '../../components/modal/PetDetailModal'; // NOVO
import { Pet } from '../../types';                      
import { fetchPetDetailsByIds } from '../../service/petService'; 

// O componente que sua rota espera (export default Favoritos)
const Favoritos: React.FC = () => {
  const { favoritePetIds, isReady } = useFavorites(); 
  const [favoritePets, setFavoritePets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // ESTADOS DO MODAL
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  // --- Funções de Manipulação do Modal ---
  
  // CORRIGIDO: Tipado para aceitar o objeto Pet
  const handleOpenModal = (pet: Pet) => { 
    setSelectedPet(pet);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPet(null);
  };

  // Simula a ação de "Tenho Interesse"
  const handleAdoptAction = (petId: string) => {
    console.log(`Ação de Adoção iniciada para o Pet ID: ${petId}`);
    alert(`Obrigado pelo seu interesse em adotar o pet ${petId}!`);
  };

  // Efeito para buscar os detalhes dos pets (simulação de API)
  useEffect(() => {
    const loadFavoritePets = async () => {
      if (!isReady) return; 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Cadastro</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {favoritePets.map(pet => (
            // CONECTA AO HANDLER DO MODAL
            <PetCard 
              key={pet.id} 
              pet={pet} 
              onDetailPress={handleOpenModal} 
            />
          ))}
        </ScrollView>
      )}

      {/* COMPONENTE MODAL RENDERIZADO NO FIM */}
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

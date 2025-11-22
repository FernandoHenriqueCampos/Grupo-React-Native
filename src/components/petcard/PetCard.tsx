// src/components/PetCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../../context/FavoritesContext';
import { Pet } from '../../types';

// Tipagem das Props
interface PetCardProps {
  pet: Pet;
  // Opcionalmente, pode-se adicionar um onPress para navegação futura, mas vamos manter simples por enquanto.
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  // Conecta ao Context de Favoritos
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(pet.id);

  // Manipulador do botão de favorito
  const handleToggle = () => {
    toggleFavorite(pet.id);
  };

  return (
    // Componente nativo View para a estrutura do card
    <View style={styles.card}>
      <Image 
        source={{ uri: pet.photo }} 
        style={styles.image} 
        // Componente nativo Image
      />
      
      <View style={styles.infoContainer}>
        {/* Componente nativo Text para exibir dados */}
        <Text style={styles.name}>{pet.name}</Text>
        <Text style={styles.details}>{pet.breed} - {pet.location}</Text>
        <Text style={styles.distance}>
          <Icon name="locate-outline" size={12} color="#666" />
          {` Está a ${pet.distance} km de você`}
        </Text>
      </View>

      {/* Botão de Favorito - Componente nativo TouchableOpacity */}
      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={handleToggle}
      >
        <Icon 
          name={favorite ? "heart" : "heart-outline"} // Ícone dinâmico
          size={24} 
          color={favorite ? "#e74c3c" : "#95a5a6"} // Cor dinâmica
        />
      </TouchableOpacity>
    </View>
  );
};

// Uso do StyleSheet para Estilização (requisito do projeto)
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 15,
    overflow: 'hidden',
    elevation: 3, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    width: 120,
    height: 120,
    // Garante que as bordas arredondadas sejam visíveis
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  details: { fontSize: 14, color: '#666', marginVertical: 2 },
  distance: { fontSize: 12, color: '#999', marginTop: 5, fontStyle: 'italic' },
  favoriteButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PetCard;
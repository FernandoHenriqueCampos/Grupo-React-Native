import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../../context/FavoritesContext';
import { Pet } from '../../types';
import { styles } from './style'; 

interface PetCardProps {
  pet: Pet;
  onDetailPress: (pet: Pet) => void; 
}

const PetCard: React.FC<PetCardProps> = ({ 
  pet, 
  onDetailPress,
 }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(pet.id);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity 
        style={styles.touchableCard}
        onPress={() => onDetailPress(pet)} 
        activeOpacity={0.7}
      >
        <Image 
          source={{ uri: pet.photo }} 
          style={styles.image} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.details}>{pet.breed} - {pet.location}</Text>
          
          
          <View style={styles.distanceContainer}>
            <Icon name="locate-outline" size={12} color="#666" />
            <Text style={styles.distanceText}>{` Está a ${pet.distance} km de você`}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={() => toggleFavorite(pet.id)}
      >
        <Icon 
          name={favorite ? "heart" : "heart-outline"} 
          size={24} 
          color={favorite ? "#e74c3c" : "#95a5a6"} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default PetCard;
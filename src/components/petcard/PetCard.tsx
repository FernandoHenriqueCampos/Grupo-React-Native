import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../../context/FavoritesContext';
import { Pet } from '../../types';
import { styles } from './style'; 

interface PetCardProps {
  pet: Pet;
  onDetailPress: (pet: Pet) => void;
  onRemove?: () => void; 
}

const PetCard: React.FC<PetCardProps> = ({ 
  pet, 
  onDetailPress,
  onRemove 
 }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(pet.id);

  const handleActionPress = () => {
    if (onRemove) {
        onRemove(); 
    } else {
        toggleFavorite(pet.id); 
    }
  };

  
  let iconName: any = "heart-outline";
  let iconColor = "#95a5a6";

  if (onRemove) {
      iconName = "trash-outline"; 
      iconColor = "#e74c3c"; 
  } else if (isFav) {
      iconName = "heart";
      iconColor = "#e74c3c";
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity 
        style={styles.touchableCard}
        onPress={() => onDetailPress(pet)} 
        activeOpacity={0.9}
      >
        <Image 
          source={{ uri: pet.photo }} 
          style={styles.image} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{pet.name}</Text>
          <Text style={styles.details}>{pet.breed} - {pet.location}</Text>
          
          <View style={styles.distanceContainer}>
            <Ionicons name="location-outline" size={14} color="#666" />
            <Text style={styles.distanceText}>
              {` Está a ${pet.distance} km de você`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={handleActionPress}
      >
        <Ionicons 
          name={iconName} 
          size={24} 
          color={iconColor} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default PetCard;
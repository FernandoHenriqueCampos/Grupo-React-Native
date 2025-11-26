import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD

import { Animal } from '../../@types/types'; 
<<<<<<< HEAD:src/components/petcard/index.tsx

import { styles } from './style'; 
=======
// Importação dos estilos
=======
import { Animal } from '../../@types/types'; 
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
import { styles } from "./style"; 
>>>>>>> 0be5dba4f053a4d8cf2f1203dd5afa414e287d26:src/components/PetCard/index.tsx


interface PetCardProps {
  pet: Animal;
  onDetailPress: (pet: Animal) => void;
  isFavorite: boolean;          
  onToggleFavorite: () => void; 
<<<<<<< HEAD
  onRemove?: () => void; 
=======
  onRemove?: () => void;
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
}

const PetCard: React.FC<PetCardProps> = ({ 
  pet, 
  onDetailPress,
  onRemove,
<<<<<<< HEAD
  isFavorite,      
  onToggleFavorite 
}) => {
  
=======
  isFavorite,     
  onToggleFavorite 
}) => {
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
  const isRemoveMode = !!onRemove;

  const handleActionPress = () => {
    if (isRemoveMode && onRemove) {
<<<<<<< HEAD
        
        onRemove(); 
    } else {
        
=======
        onRemove(); 
    } else {
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
        onToggleFavorite(); 
    }
  };

<<<<<<< HEAD
  
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
  let iconName: keyof typeof Ionicons.glyphMap = "heart-outline";
  let iconColor = "#95a5a6";

  if (isRemoveMode) {
    iconName = "close-circle"; 
    iconColor = "#e74c3c"; 
  } else if (isFavorite) {
    iconName = "heart";
<<<<<<< HEAD
    iconColor = "#FF6347";
  }

 

=======
    iconColor = "#FF6347"; 
  }

>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity 
        style={styles.touchableCard}
        onPress={() => onDetailPress(pet)} 
        activeOpacity={0.9}
      >
        <Image 
<<<<<<< HEAD
          
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
          source={{ uri: pet.image || 'https://placehold.co/400x300/e0e0e0/ffffff?text=Pet' }} 
          style={styles.image} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>{pet.nome}</Text>
          <Text style={styles.details} numberOfLines={1}>{pet.raca} - {pet.tipo}</Text>
<<<<<<< HEAD
          
          
          
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
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
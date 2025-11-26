import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Importação correta do tipo Animal
import { Animal } from '../../@types/types'; 
// Importação dos estilos
import { styles } from "./style"; 

// Interface corrigida para incluir props de favorito (usadas pela Home)
interface PetCardProps {
  pet: Animal;
  onDetailPress: (pet: Animal) => void;
  isFavorite: boolean;          // Reintroduzido para controle externo
  onToggleFavorite: () => void; // Reintroduzido para controle externo
  onRemove?: () => void; // Usado apenas pela tela de Favoritos
}

const PetCard: React.FC<PetCardProps> = ({ 
  pet, 
  onDetailPress,
  onRemove,
  isFavorite,      // Recebido via props
  onToggleFavorite // Recebido via props
}) => {
  // Determina se estamos na tela de favoritos (se onRemove for passado)
  const isRemoveMode = !!onRemove;

  const handleActionPress = () => {
    if (isRemoveMode && onRemove) {
        // Se estiver no modo de remoção, executa a função onRemove
        onRemove(); 
    } else {
        // Se estiver no modo normal (Home/Categorias), alterna o favorito
        onToggleFavorite(); 
    }
  };

  // Lógica para determinar o ícone e cor
  let iconName: keyof typeof Ionicons.glyphMap = "heart-outline";
  let iconColor = "#95a5a6";

  if (isRemoveMode) {
    iconName = "close-circle"; // Usando close-circle para remover, como no código anterior
    iconColor = "#e74c3c"; 
  } else if (isFavorite) {
    iconName = "heart";
    iconColor = "#FF6347"; // Cor de favorito (vermelho)
  }

  // NOTE: As propriedades Pet.location e Pet.distance não existem no Animal.
  // Usaremos apenas nome e raça, que são suportados pela interface Animal.

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity 
        style={styles.touchableCard}
        onPress={() => onDetailPress(pet)} 
        activeOpacity={0.9}
      >
        <Image 
          // Usamos 'image' e 'nome' para bater com a interface Animal
          source={{ uri: pet.image || 'https://placehold.co/400x300/e0e0e0/ffffff?text=Pet' }} 
          style={styles.image} 
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name} numberOfLines={1}>{pet.nome}</Text>
          <Text style={styles.details} numberOfLines={1}>{pet.raca} - {pet.tipo}</Text>
          
          {/* Removido: distanceContainer, distanceText e location-outline 
            pois pet.location e pet.distance não existem na interface Animal.
            Se quiser adicionar, a interface Animal em types.ts precisa ser atualizada.
          */}
          
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
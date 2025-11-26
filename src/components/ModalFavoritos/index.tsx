import React, { FC } from 'react';
import { 
  Modal, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView 
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Animal } from '../../@types/types';
import {styles} from './style';

interface PetDetailModalProps {
  pet: Animal | null; 
  isVisible: boolean;
  onClose: () => void;
  onAdopt: (petId: string) => void; 
}

const PetDetailModal: FC<PetDetailModalProps> = ({ 
  pet, 
  isVisible, 
  onClose, 
  onAdopt 
}) => {
  const navigation = useNavigation();

  if (!pet) return null; 

  function handleAdopt() {
    onClose();
    navigation.navigate('StackTermoAdocao');
  }

  return (
    <Modal
      animationType="slide" 
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose} 
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
          <Image
            source={{ uri: pet.image ?? "https://via.placeholder.com/300" }}
            style={styles.petImage}
          />

          
          <ScrollView contentContainerStyle={styles.scrollContent}>
            
            <View style={styles.header}>
              <Text style={styles.petName}>{pet.nome}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Icon name="close-circle-outline" size={30} color="#999" />
              </TouchableOpacity>
            </View>

            <Text style={styles.detailText}>
              <Icon name="git-branch-outline" size={16} /> Raça: **{pet.raca}**
            </Text>

            <Text style={styles.descriptionTitle}>Sobre {pet.nome}:</Text>
            <Text style={styles.descriptionText}>
              {pet.nome} é um pet adorável, resgatado recentemente. Ele é muito brincalhão e se dá bem com crianças. 
              Necessita de um lar que possa oferecer muito espaço e carinho.
            </Text>
          </ScrollView>

          <TouchableOpacity 
            style={styles.adoptButton} 
            onPress={handleAdopt}
          >
            <Text style={styles.adoptButtonText}>Tenho Interesse (Adotar)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PetDetailModal;
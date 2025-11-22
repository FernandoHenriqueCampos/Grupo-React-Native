import React, { FC } from 'react';
import { 
  Modal, View, Text, Image, TouchableOpacity, ScrollView 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pet } from '../../types';
import { styles } from './style';

interface PetDetailModalProps {
  pet: Pet | null; 
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
  if (!pet) return null; 

  const handleAdopt = () => {
    onAdopt(pet.id);
    onClose(); 
  };

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
            source={{ uri: pet.photo ? pet.photo.replace('120', '300') : '' }} 
            style={styles.petImage} 
          />
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
              <Text style={styles.petName}>{pet.name}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Icon name="close-circle-outline" size={30} color="#999" />
              </TouchableOpacity>
            </View>

            
            <View style={styles.detailRow}>
               <Icon name="git-branch-outline" size={18} color="#555" />
               <Text style={styles.detailText}>Raça: <Text style={{fontWeight: 'bold'}}>{pet.breed}</Text></Text>
            </View>

            <View style={styles.detailRow}>
               <Icon name="location-outline" size={18} color="#555" />
               <Text style={styles.detailText}>Local: {pet.location}</Text>
            </View>

            <View style={styles.detailRow}>
               <Icon name="walk-outline" size={18} color="#555" />
               <Text style={styles.detailText}>Distância: {pet.distance} km</Text>
            </View>

            <Text style={styles.descriptionTitle}>Sobre {pet.name}:</Text>
            <Text style={styles.descriptionText}>
              {pet.name} é um pet adorável, resgatado recentemente. Ele é muito brincalhão e se dá bem com crianças. 
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
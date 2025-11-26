import React, { FC } from 'react';
import { 
  Modal, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView 
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Animal } from '../../@types/types';
import {styles} from './style';

<<<<<<< HEAD

=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
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

<<<<<<< HEAD
  if (!pet) return null;
=======
  if (!pet) return null; 
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac

  function handleAdopt() {
    onClose();
    navigation.navigate('StackTermoAdocao');
  }

  return (
<<<<<<< HEAD
    
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
    <Modal
      animationType="slide" 
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose} 
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
<<<<<<< HEAD
          
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
          <Image
            source={{ uri: pet.image ?? "https://via.placeholder.com/300" }}
            style={styles.petImage}
          />

          
          <ScrollView contentContainerStyle={styles.scrollContent}>
            
<<<<<<< HEAD
            
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
            <View style={styles.header}>
              <Text style={styles.petName}>{pet.nome}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Icon name="close-circle-outline" size={30} color="#999" />
              </TouchableOpacity>
            </View>

<<<<<<< HEAD
            
            <Text style={styles.detailText}>
              <Icon name="git-branch-outline" size={16} /> Raça: **{pet.raca}**
            </Text>
            
=======
            <Text style={styles.detailText}>
              <Icon name="git-branch-outline" size={16} /> Raça: **{pet.raca}**
            </Text>

>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
            <Text style={styles.descriptionTitle}>Sobre {pet.nome}:</Text>
            <Text style={styles.descriptionText}>
              {pet.nome} é um pet adorável, resgatado recentemente. Ele é muito brincalhão e se dá bem com crianças. 
              Necessita de um lar que possa oferecer muito espaço e carinho.
            </Text>
          </ScrollView>

<<<<<<< HEAD
          
=======
>>>>>>> eb9d85f9e6f3a01a8767e8e746444f4b54dd2bac
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
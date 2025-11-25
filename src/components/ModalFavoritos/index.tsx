import React, { FC } from 'react';
import { 
  Modal, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView 
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Animal } from '../../@types/types';
import {styles} from './style';

// Tipagem das Props do Modal
interface PetDetailModalProps {
  pet: Animal | null; // Recebe o Pet a ser exibido (ou null se estiver fechado)
  isVisible: boolean;
  onClose: () => void;
  onAdopt: (petId: string) => void; // Função para simular a intenção de adoção
}

const PetDetailModal: FC<PetDetailModalProps> = ({ 
  pet, 
  isVisible, 
  onClose, 
  onAdopt 
}) => {
  const navigation = useNavigation();

  if (!pet) return null; // Não renderiza nada se não houver pet

  function handleAdopt() {
    onClose();
    navigation.navigate('StackTermoAdocao');
  }

  return (
    // Componente Modal nativo
    <Modal
      animationType="slide" // Desliza da parte inferior
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose} // Requisito Android para fechar com o botão Voltar
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
          {/* Imagem do Pet no Topo */}
          <Image
            source={{ uri: pet.image ?? "https://via.placeholder.com/300" }}
            style={styles.petImage}
          />

          
          <ScrollView contentContainerStyle={styles.scrollContent}>
            
            {/* Cabeçalho e Botão Fechar */}
            <View style={styles.header}>
              <Text style={styles.petName}>{pet.nome}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Icon name="close-circle-outline" size={30} color="#999" />
              </TouchableOpacity>
            </View>

            {/* Detalhes do Pet */}
            <Text style={styles.detailText}>
              <Icon name="git-branch-outline" size={16} /> Raça: **{pet.raca}**
            </Text>
            {/* <Text style={styles.detailText}>
              <Icon name="location-outline" size={16} /> Local: {pet.cidade}
            </Text> */}
            {/* <Text style={styles.detailText}>
              <Icon name="walk-outline" size={16} /> Distância: {pet.distance} km
            </Text> */}

            {/* Descrição Simulado (para Modal parecer mais completo) */}
            <Text style={styles.descriptionTitle}>Sobre {pet.nome}:</Text>
            <Text style={styles.descriptionText}>
              {pet.nome} é um pet adorável, resgatado recentemente. Ele é muito brincalhão e se dá bem com crianças. 
              Necessita de um lar que possa oferecer muito espaço e carinho.
            </Text>
          </ScrollView>

          {/* Botão Tenho Interesse (Adoção) */}
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
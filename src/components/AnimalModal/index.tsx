import React from 'react';
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from './style';
import { Animal } from '../../@types/types';
import { useFavorites } from '../../context/FavoritesContext'; 

interface AnimalModalProps {
    visible: boolean;
    animal: Animal | null;
    onClose: () => void;
}

export function AnimalModal({ visible, animal, onClose }: AnimalModalProps) {
    const navigation = useNavigation<any>();
    
    
    const { favoritePetIds, toggleFavorite } = useFavorites();

    if (!animal) return null;

    
    const isFavorite = favoritePetIds.includes(String(animal.id));

    const imageSource = animal.image
        ? { uri: animal.image }
        : require('../../assets/goldenHome.jpg');

    function handleAdopt() {
        onClose();
        navigation.navigate('StackCursos');
    }

    
    function handleFavorite() {
        if (animal) {
            toggleFavorite(String(animal.id));
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose}>
                <TouchableWithoutFeedback onPress={() => { }}>
                    <View style={styles.modalContainer}>

                       
                        <TouchableOpacity 
                            onPress={handleFavorite}
                            style={{
                                position: 'absolute',
                                top: 15,
                                left: 15,
                                zIndex: 1,
                                backgroundColor: 'rgba(255,255,255,0.8)',
                                borderRadius: 20,
                                padding: 8,
                                elevation: 5
                            }}
                        >
                            <Ionicons 
                                name={isFavorite ? "heart" : "heart-outline"} 
                                size={28} 
                                color={isFavorite ? "#FF4081" : "#555"} 
                            />
                        </TouchableOpacity>

                        
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Text style={styles.closeText}>✕</Text>
                        </TouchableOpacity>

                        <Image
                            source={imageSource}
                            style={styles.image}
                            resizeMode="cover"
                        />

                        <Text style={styles.title}>{animal.nome}</Text>
                        <Text style={styles.breed}>{animal.raca}</Text>

                        
                        <Text style={{ textAlign: 'center', color: '#666', marginBottom: 15 }}>
                            {animal.idade ? `${animal.idade} anos` : 'Idade não informada'} • {animal.tipo}
                        </Text>

                        <TouchableOpacity
                            style={styles.adoptButton}
                            activeOpacity={0.8}
                            onPress={handleAdopt}
                        >
                            <Text style={styles.adoptButtonText}>Quero Adotar!</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
}
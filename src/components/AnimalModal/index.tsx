import React from 'react';
import {
    Modal,
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { Animal } from '../../@types/animal';

interface AnimalModalProps {
    visible: boolean;
    animal: Animal | null;
    onClose: () => void;
}

export function AnimalModal({ visible, animal, onClose }: AnimalModalProps) {
    const navigation = useNavigation<any>();

    if (!animal) return null;

    const imageSource = animal.image
        ? { uri: animal.image }
        : require('../../assets/goldenHome.jpg');

    function handleAdopt() {
        onClose();
        navigation.navigate('StackCursos');
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
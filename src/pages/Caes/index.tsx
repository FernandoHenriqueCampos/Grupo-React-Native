import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { api } from '../../services/api';
import { Animal } from '../../@types/types';
import { GridAnimalCard } from '../../components/GridAnimalCard';
import { AnimalModal } from '../../components/AnimalModal';

export function Caes() {
    const navigation = useNavigation<any>();
    const [dogs, setDogs] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDog, setSelectedDog] = useState<Animal | null>(null);

    useEffect(() => {
        async function fetchDogs() {
            try {
                const response = await api.get('/animais');

                const filteredDogs = response.data.filter((item: Animal) =>
                    item.tipo?.toLowerCase() === 'cachorro' || item.tipo?.toLowerCase() === 'dog'
                );

                setDogs(filteredDogs);
            } catch (error) {
                console.log(error);
                Alert.alert("Ops!", "Não conseguimos carregar os cãezinhos.");
            } finally {
                setLoading(false);
            }
        }

        fetchDogs();
    }, []);

    function handleOpenModal(animal: Animal) {
        setSelectedDog(animal);
        setModalVisible(true);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Cães Disponíveis 🐶</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#FFA500" style={{ marginTop: 50 }} />
                ) : (
                    <>
                        <FlatList
                            data={dogs}
                            keyExtractor={(item) => String(item.id)}
                            numColumns={2}
                            columnWrapperStyle={styles.columnWrapper}
                            contentContainerStyle={styles.listContent}
                            renderItem={({ item }) => (
                                <GridAnimalCard
                                    name={item.nome}
                                    breed={item.raca}
                                    imageUrl={item.image}
                                    onPress={() => handleOpenModal(item)}
                                />
                            )}
                            ListEmptyComponent={() => (
                                <Text style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>
                                    Nenhum cachorro encontrado no momento.
                                </Text>
                            )}
                        />
                        <AnimalModal
                            visible={modalVisible}
                            animal={selectedDog}
                            onClose={() => setModalVisible(false)}
                        />
                    </>
                )}
            </View>
        </SafeAreaView>
    );
}
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    Alert,
    ImageBackground
} from 'react-native';
import { NavigationContainerProps, useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { api } from '../../services/api';
import { Animal } from '../../@types/types';
import { GridAnimalCard } from '../../components/GridAnimalCard';
import { AnimalModal } from '../../components/AnimalModal';
import { Header } from '../../components/Header';

export function Gatos() {
    const navigation = useNavigation<NavigationContainerProps>();
    const [cats, setCats] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCat, setSelectedCat] = useState<Animal | null>(null);

    const backgroundUrl = require('../../assets/fundoGatos.png');

    useEffect(() => {
        async function fetchCats() {
            try {
                const response = await api.get('/animais');

                const filteredCats = response.data.filter((item: Animal) =>
                    item.tipo?.toLowerCase() === 'gato' || item.tipo?.toLowerCase() === 'cat'
                );

                setCats(filteredCats);
            } catch (error) {
                console.log(error);
                Alert.alert("Ops!", "Não conseguimos carregar os gatinhos.");
            } finally {
                setLoading(false);
            }
        }

        fetchCats();
    }, []);

    function handleOpenModal(animal: Animal) {
        setSelectedCat(animal);
        setModalVisible(true);
    }

    return (
        <ImageBackground
            source={backgroundUrl}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <Header />
            <View style={styles.container}>

                {loading ? (
                    <ActivityIndicator size="large" color="#FFA500" style={{ marginTop: 50 }} />
                ) : (
                    <>
                        <FlatList
                            data={cats}
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
                                <Text style={{ textAlign: 'center', color: '#FFF', marginTop: 40 }}>
                                    Nenhum gato encontrado no momento.
                                </Text>
                            )}
                        />

                        <AnimalModal
                            visible={modalVisible}
                            animal={selectedCat}
                            onClose={() => setModalVisible(false)}
                        />
                    </>
                )}
            </View>
        </ImageBackground>
    );
}
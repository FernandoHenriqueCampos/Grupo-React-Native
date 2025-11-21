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
import { Animal } from '../../@types/animal';
import { GridAnimalCard } from '../../components/GridAnimalCard';

export function Gatos() {
    const navigation = useNavigation<any>();
    const [cats, setCats] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Gatos Disponíveis 🐱</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#FFA500" style={{ marginTop: 50 }} />
                ) : (
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
                                onPress={() => {
                                    console.log("Clicou em:", item.nome);
                                }}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <Text style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>
                                Nenhum gato encontrado no momento.
                            </Text>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
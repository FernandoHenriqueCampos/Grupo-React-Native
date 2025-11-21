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

export function Filhotes() {
    const navigation = useNavigation<any>();
    const [puppies, setPuppies] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPuppies() {
            try {
                const response = await api.get('/animais');

                const filteredPuppies = response.data.filter((item: Animal) =>
                    item.tipo?.toLowerCase() === 'filhote' || item.tipo?.toLowerCase() === 'puppy'
                );

                setPuppies(filteredPuppies);
            } catch (error) {
                console.log(error);
                Alert.alert("Ops!", "Não conseguimos carregar os filhotes.");
            } finally {
                setLoading(false);
            }
        }

        fetchPuppies();
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Filhotes Disponíveis 🐾</Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#FFA500" style={{ marginTop: 50 }} />
                ) : (
                    <FlatList
                        data={puppies}
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
                                Nenhum filhote encontrado no momento.
                            </Text>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
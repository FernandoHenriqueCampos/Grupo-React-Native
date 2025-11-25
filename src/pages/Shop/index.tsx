import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { CardShop } from '../../components/CardShop';
import { apiShop } from '../../services/api';
import axios, { AxiosError } from 'axios';
import { styles } from './style';

interface Product {
    id: string;
    name: string;
    image: string;
    preco: number;
    descricao: string;
}

export const ShopScreen: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await apiShop.get<Product[]>('/shop');

                setProducts(response.data);

            } catch (err) {
                let errorMessage = 'Falha desconhecida ao buscar dados.';

                if (axios.isAxiosError(err)) {
                    const axiosError = err as AxiosError;
                    if (axiosError.response) {
                        errorMessage = `Erro ${axiosError.response.status}: Servidor retornou erro.`;
                    } else if (axiosError.request) {
                        errorMessage = 'Erro de conexão: Verifique a rede (Timeout).';
                    } else {
                        errorMessage = axiosError.message;
                    }
                }

                setError(errorMessage);
                console.error('Erro ao carregar produtos:', err);

            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#007bff" />
                <Text style={styles.loadingText}>Carregando produtos...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>
                    Não foi possível carregar a loja.
                </Text>
                <Text style={styles.errorMessageDetail}>Detalhe: {error}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.header}>Shop</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardShop {...item} />}
                numColumns={1}
                contentContainerStyle={styles.grid}
            />
        </SafeAreaView>
    );
};




import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, SafeAreaView, Button } from 'react-native';
import axios, { AxiosError } from 'axios';
import { styles } from './style';
import CardShop from '../../components/CardShop';
import { Header } from '../../components/Header';
import { apiShop } from '../../services/api';
import CartScreen from '../Carrinho';
import { useCart } from '../../context/CartContext';

interface Product {
    id: string;
    name: string;
    image: string;
    preco: string;
    descricao: string;
}

export default function ShopScreen() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showCart, setShowCart] = useState(false);

    const { addToCart, cartCount, cartTotal } = useCart();

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
                    errorMessage = 'Erro de conexão: Verifique sua rede.';
                } else {
                    errorMessage = axiosError.message;
                }
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
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
                <Text style={styles.errorText}>Não foi possível carregar a loja.</Text>
                <Text style={styles.errorMessageDetail}>Detalhe: {error}</Text>
                <Button title="Tentar Novamente" onPress={loadProducts} />
            </View>
        );
    }

    if (showCart) {
        return <CartScreen onClose={() => setShowCart(false)} />;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />

            <View style={styles.toggleCartButtonContainer}>
                <Button
                    title={`Ver Carrinho (${cartCount}) - R$ ${cartTotal}`}
                    onPress={() => setShowCart(true)}
                    color="#007bff"
                />
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardShop
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        preco={item.preco}
                        descricao={item.descricao}
                        onAddToCart={() => addToCart(item)}
                    />
                )}
                numColumns={1}
                contentContainerStyle={styles.grid}
            />
        </SafeAreaView>
    );
}
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';
import axios, { AxiosError } from 'axios';
import { styles } from './style';
import CardShop from '../../components/CardShop';
import ProductCard from '../../components/ProductCard';
import { Header } from '../../components/Header';
import { apiShop } from '../../services/api';

interface Product {
    id: string;
    name: string;
    image: string;
    preco: string;
    descricao: string;
}

interface CartItem extends Product {
    quantity: number;
}

export default function ShopScreen() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [showCart, setShowCart] = useState(false);

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

    const handleAddToCart = (product: Product) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const handleIncreaseQuantity = (productId: string) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const handleDecreaseQuantity = (productId: string) => {
        setCartItems(prevItems => {
            const item = prevItems.find(i => i.id === productId);

            if (item && item.quantity > 1) {
                return prevItems.map(i =>
                    i.id === productId
                        ? { ...i, quantity: i.quantity - 1 }
                        : i
                );
            } else if (item && item.quantity === 1) {
                return prevItems.filter(i => i.id !== productId);
            }
            return prevItems;
        });
    };

    const calculateCartTotal = (): string => {
        const total = cartItems.reduce((sum, item) => {
            const price = parseFloat(item.preco.replace(',', '.'));
            return sum + (price * item.quantity);
        }, 0);
        return total.toFixed(2).replace('.', ',');
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            Alert.alert("Carrinho Vazio", "Adicione produtos ao carrinho antes de finalizar a compra.");
            return;
        }

        Alert.alert(
            "Finalizar Compra",
            `Compra de R$ ${calculateCartTotal()} realizada com sucesso!`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        setCartItems([]);
                        setShowCart(false);
                    }
                }
            ]
        );
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
                <Text style={styles.errorText}>
                    Não foi possível carregar a loja.
                </Text>
                <Text style={styles.errorMessageDetail}>Detalhe: {error}</Text>
                <Button title="Tentar Novamente" onPress={loadProducts} />
            </View>
        );
    }

    if (showCart) {
        const total = calculateCartTotal();
        return (
            <SafeAreaView style={styles.safeArea}>
                <Header />

                <View style={styles.toggleCartButtonContainer}>
                    <Button
                        title={`Voltar para Loja`}
                        onPress={() => setShowCart(false)}
                        color="#007bff"
                    />
                </View>

                <Text style={styles.cartTitle}>Meu Carrinho</Text>

                {cartItems.length === 0 ? (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
                        <Text style={styles.emptyCartTextSmall}>Adicione itens da loja para continuar!</Text>
                    </View>
                ) : (
                    <>
                        <FlatList
                            data={cartItems}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <ProductCard
                                    item={item}
                                    onIncrease={handleIncreaseQuantity}
                                    onDecrease={handleDecreaseQuantity}
                                />
                            )}
                            contentContainerStyle={styles.cartList}
                        />

                        <View style={styles.cartSummary}>
                            <Text style={styles.cartTotalText}>Total da Compra: R$ {total}</Text>
                            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                                <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />

            <View style={styles.toggleCartButtonContainer}>
                <Button
                    title={`Ver Carrinho (${cartItems.length}) - R$ ${calculateCartTotal()}`}
                    onPress={() => setShowCart(true)}
                    color="#28a745"
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
                        onAddToCart={handleAddToCart}
                    />
                )}
                numColumns={1}
                contentContainerStyle={styles.grid}
            />
        </SafeAreaView>
    );
};
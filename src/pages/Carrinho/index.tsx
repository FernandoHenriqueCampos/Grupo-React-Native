import React from 'react';
import { View, Text, FlatList, SafeAreaView, Button, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../../context/CartContext';
import { styles } from './style';
import ProductCard from '../../components/ProductCard';
import { Header } from '../../components/Header';

interface CartScreenProps {
    onClose: () => void;
}

export default function CartScreen({ onClose }: CartScreenProps) {
    const {
        cartItems,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    } = useCart();

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            Alert.alert("Carrinho Vazio", "Adicione produtos antes.");
            return;
        }
        Alert.alert(
            "Sucesso",
            `Compra de R$ ${cartTotal} realizada!`,
            [{ text: "OK", onPress: () => { clearCart(); onClose(); } }]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header />
            <View style={styles.toggleCartButtonContainer}>
                <Button title="Voltar para Loja" onPress={onClose} color="#007bff" />
            </View>

            <Text style={styles.cartTitle}>Meu Carrinho</Text>

            {cartItems.length === 0 ? (
                <View style={styles.emptyCartContainer}>
                    <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
                </View>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ProductCard
                                item={item}
                                onIncrease={increaseQuantity}
                                onDecrease={decreaseQuantity}
                            />
                        )}
                        contentContainerStyle={styles.cartList}
                    />
                    <View style={styles.cartSummary}>
                        <Text style={styles.cartTotalText}>Total: R$ {cartTotal}</Text>
                        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                            <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
}
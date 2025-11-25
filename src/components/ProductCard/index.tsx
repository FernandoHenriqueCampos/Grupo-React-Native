import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface CartItem {
    id: string;
    name: string;
    image: string;
    preco: string;
    quantity: number;
}

interface ProductCardProps {
    item: CartItem;
    onIncrease: (productId: string) => void;
    onDecrease: (productId: string) => void;
}

export default function ProductCard({ item, onIncrease, onDecrease }: ProductCardProps) {
    const price = parseFloat(item.preco.replace(',', '.'));
    const subtotal = (price * item.quantity).toFixed(2).replace('.', ',');

    return (
        <View style={styles.cartCardContainer}>
            <Image source={{ uri: item.image }} style={styles.cartImage} accessibilityLabel={item.name} />
            <View style={styles.cartDetails}>
                <Text style={styles.cartName} numberOfLines={1}>{item.name}</Text>

                <Text style={styles.cartPriceUnit}>R$ {item.preco} / un.</Text>
                <Text style={styles.cartSubtotal}>Subtotal: R$ {subtotal}</Text>

                <View style={styles.quantityControls}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => onDecrease(item.id)}
                        disabled={item.quantity === 0}
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{item.quantity}</Text>

                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => onIncrease(item.id)}
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};
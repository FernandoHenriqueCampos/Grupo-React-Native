import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    preco: string;
    descricao: string;
    onAddToCart: (product: Omit<ProductCardProps, 'onAddToCart'>) => void;
}

export default function CardShop({ id, name, image, preco, descricao, onAddToCart }: ProductCardProps) {

    const productData = { id, name, image, preco, descricao };

    return (
        <View style={styles.cardContainer}>
            <Image
                source={{ uri: image }}
                style={styles.image}
                accessibilityLabel={name}
            />
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>R$ {preco}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {descricao}
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onAddToCart(productData)}
                >
                    <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
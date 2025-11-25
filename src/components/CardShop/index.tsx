import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    preco: number;
    descricao: string;
}

export const CardShop: React.FC<ProductCardProps> = ({ name, image, preco, descricao }) => {
    const safePreco = preco || 0;

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: image }} style={styles.image} accessibilityLabel={name} />
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>R$ {safePreco.toFixed(2)}</Text>
                <Text style={styles.description} numberOfLines={2}>{descricao}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    preco: string;
    descricao: string;
}

export default function CardShop({ name, image, preco, descricao }: ProductCardProps) {

    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: image }} style={styles.image} accessibilityLabel={name} />
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>R$ {preco}</Text>
                <Text style={styles.description} numberOfLines={2}>{descricao}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



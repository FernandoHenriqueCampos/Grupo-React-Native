import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface GridAnimalCardProps {
    name: string;
    breed: string;
    imageUrl?: string;
    onPress: () => void;
}

export function GridAnimalCard({ name, breed, imageUrl, onPress }: GridAnimalCardProps) {
    const imageSource = imageUrl
        ? { uri: imageUrl }
        : require('../../assets/goldenHome.jpg');

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
                <Image
                    source={imageSource}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.breed} numberOfLines={1}>{breed}</Text>
            </View>
        </TouchableOpacity>
    );
}
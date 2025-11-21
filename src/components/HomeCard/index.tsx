import React from 'react';
import {
    View,
    Text,
    Image,
    ImageSourcePropType,
    TouchableOpacity
} from 'react-native';
import { styles } from './style';

interface AnimalCardProps {
    name: string;
    description: string;
    imageSource: ImageSourcePropType;
    onPress: () => void;
}

export function AnimalCard({ name, description, imageSource, onPress }: AnimalCardProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <Image
                source={imageSource}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.infoContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>Ver mais</Text>
                    </View>
                </View>

                <Text style={styles.description} numberOfLines={3}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
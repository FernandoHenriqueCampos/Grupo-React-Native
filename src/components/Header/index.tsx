import React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';

const AdoteJaImage = require('../../assets/adoteHeader.png');

export const Header = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <FontAwesome
                    name="paw"
                    size={24}
                    color="#8A2BE2"
                />

                <Image
                    source={AdoteJaImage}
                    style={styles.headerImage}
                    resizeMode="contain"
                />

                <FontAwesome
                    name="bell-o"
                    size={24}
                    color="#8A2BE2"
                />
            </View>
        </SafeAreaView>
    );
};
import React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

const AdoteJaImage = require('../../assets/adoteHeader.png');

export const Header = () => {
    const navigation = useNavigation();

    const numeroNotificacoes = 4;

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

                <TouchableOpacity
                    style={styles.bellContainer}
                    onPress={() => navigation.navigate('StackNotificacoes' as never)}
                >
                    <FontAwesome
                        name="bell-o"
                        size={24}
                        color="#8A2BE2"
                    />
                    {numeroNotificacoes > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{numeroNotificacoes}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

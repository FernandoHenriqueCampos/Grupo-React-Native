import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Cadastro</Text>
        </View>
    );
}

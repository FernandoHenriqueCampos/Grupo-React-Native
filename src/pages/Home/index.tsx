import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard';

const backgroundUrl = require('../../assets/fundoHome.jpg');
const dogImg = require('../../assets/golden.avif');
const catImg = require('../../assets/gatoHome.avif');
const dogImg2 = require('../../assets/Filhotes.webp');

export function Home() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

            <ImageBackground
                source={backgroundUrl}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.safeArea}>

                    <View style={styles.headerContainer}>
                        <Text style={styles.appTitle}>AdotePet 🐾</Text>
                        <Text style={styles.subTitle}>Encontre um amigo para a vida toda</Text>
                    </View>

                    <ScrollView
                        contentContainerStyle={styles.contentList}
                        showsVerticalScrollIndicator={false}
                    >


                        <AnimalCard
                            name="Cachorros"
                            description="O seu melhor amigo se encontra aqui."
                            imageSource={dogImg}
                            onPress={() => navigation.navigate('StackCaes')}
                        />

                        <AnimalCard
                            name="Gatos"
                            description="O animal mais tranquilo, ideal para quem gosta de silêncio."
                            imageSource={catImg}
                            onPress={() => navigation.navigate('StackGatos')}
                        />

                        <AnimalCard
                            name="Filhotes"
                            description="Adote um filhote e dê-lhe a chance de uma vida melhor."
                            imageSource={dogImg2}
                            onPress={() => navigation.navigate('StackFilhotes')}
                        />

                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
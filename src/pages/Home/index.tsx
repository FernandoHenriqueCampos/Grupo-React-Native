import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    FlatList,
    ImageSourcePropType
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard';

const backgroundUrl = require('../../assets/fundoHome.jpg');
const dogImg = require('../../assets/goldenHome.jpg');
const catImg = require('../../assets/gatoHome.jpg');
const dogImg2 = require('../../assets/Filhotes.webp');
interface CategoryData {
    id: string;
    name: string;
    description: string;
    image: ImageSourcePropType;
    route: string;
}

const CATEGORIES: CategoryData[] = [
    {
        id: '1',
        name: 'Cachorros',
        description: 'O seu melhor amigo se encontra aqui.',
        image: dogImg,
        route: 'StackCaes'
    },
    {
        id: '2',
        name: 'Gatos',
        description: 'O animal mais tranquilo, ideal para quem gosta de silêncio.',
        image: catImg,
        route: 'StackGatos'
    },
    {
        id: '3',
        name: 'Filhotes',
        description: 'Adote um filhote e dê-lhe a chance de uma vida melhor.',
        image: dogImg2,
        route: 'StackFilhotes'
    }
];

export function Home() {
    const navigation = useNavigation<any>();
    const renderItem = ({ item }: { item: CategoryData }) => (
        <AnimalCard
            name={item.name}
            description={item.description}
            imageSource={item.image}
            onPress={() => navigation.navigate(item.route)}
        />
    );

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

                    <FlatList
                        data={CATEGORIES}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        contentContainerStyle={styles.contentList}
                        showsVerticalScrollIndicator={false}
                        initialNumToRender={3}
                    />

                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
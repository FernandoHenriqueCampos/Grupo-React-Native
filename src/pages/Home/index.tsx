import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/types';
import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard';
import { CATEGORIES } from '../../data/categories';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';

const backgroundUrl = require('../../assets/fundoHome.jpg');

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

            <Header />
            <Carousel />

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
                renderItem={({ item }) => (
                    <AnimalCard
                        name={item.name}
                        description={item.description}
                        imageSource={item.image}
                        onPress={() => navigation.navigate(item.route)}
                    />
                )}
            />
        </View>
    );
}
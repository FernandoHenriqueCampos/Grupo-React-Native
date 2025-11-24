import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard';
import { CATEGORIES } from '../../data/categories';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';

const backgroundUrl = require('../../assets/fundoHome.jpg');

export function Home() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

            <Header />

            {/* <ImageBackground
                source={backgroundUrl}
                style={styles.backgroundImage}
                resizeMode="cover"
            > */}
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
            {/* 
            </ImageBackground> */}
        </View>
    );
}
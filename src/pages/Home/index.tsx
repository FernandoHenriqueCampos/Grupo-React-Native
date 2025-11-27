import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/types';
import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard';
import { CATEGORIES } from '../../data/categories';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import Ionicons from '@expo/vector-icons/Ionicons';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
    const navigation = useNavigation<NavigationProps>();

    function handleOpenAiAssistant() {
        navigation.navigate('AiAssistant');
    }

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
             <TouchableOpacity
                style={styles.buttonMaintenance}
                onPress={handleOpenAiAssistant}
                activeOpacity={0.8}
            >
                <Ionicons name="chatbubbles" size={24} color="#890be3ff" />
            </TouchableOpacity>
        </View>
    );
}
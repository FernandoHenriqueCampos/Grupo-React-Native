import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 

import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard';
import { CATEGORIES } from '../../data/categories';

const backgroundUrl = require('../../assets/fundoHome.jpg');

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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <View>
                                <Text style={styles.appTitle}>AdotePet 🐾</Text>
                                <Text style={styles.subTitle}>Encontre um amigo para a vida toda</Text>
                            </View>

                            
                            <TouchableOpacity 
                                onPress={() => {
                                    console.log("Botão Favoritos clicado!");
                                    
                                    navigation.navigate('StackFavoritos');
                                }}
                                style={{ 
                                    padding: 10, 
                                    backgroundColor: 'rgba(255,255,255,0.2)', 
                                    borderRadius: 20 
                                }}
                            >
                                <Text style={{ fontSize: 30 }}>❤️</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

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

                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
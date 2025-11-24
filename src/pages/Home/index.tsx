import React, { useEffect } from 'react';
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
import { useFavorites } from '../../context/FavoritesContext';
import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard'; 
import { CATEGORIES } from '../../data/categories';

const backgroundUrl = require('../../assets/fundoHome.jpg');

export function Home() {
    const navigation = useNavigation<any>();
    
    
    const { favoritePetIds, toggleFavorite } = useFavorites();

    
    useEffect(() => {
        favoritePetIds.forEach(id => {
            
            const isGhostId = !id || id.trim().length < 2 || ['1', '2'].includes(id);

            if (isGhostId) {
                console.log(`🧹 Limpeza Automática: Removendo ID fantasma '${id}'`);
               
                toggleFavorite(id);
            }
        });
    }, [favoritePetIds]); 

    
    const validCount = favoritePetIds.filter(id => id && id.length > 1).length;

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
                                    navigation.navigate('StackFavoritos');
                                }}
                                style={{ 
                                    padding: 10, 
                                    backgroundColor: 'rgba(255,255,255,0.2)', 
                                    borderRadius: 20,
                                    position: 'relative' 
                                }}
                            >
                                <Text style={{ fontSize: 30 }}>❤️</Text>
                                
                                
                                {validCount > 0 && (
                                    <View style={{
                                        position: 'absolute',
                                        top: -5,
                                        right: -5,
                                        backgroundColor: '#FF4081',
                                        borderRadius: 12,
                                        minWidth: 24,
                                        height: 24,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 2,
                                        borderColor: '#fff'
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
                                            {validCount}
                                        </Text>
                                    </View>
                                )}
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
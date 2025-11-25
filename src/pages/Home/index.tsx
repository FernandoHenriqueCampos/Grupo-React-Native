import React, { useEffect } from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import { useFavorites } from '../../context/FavoritesContext';
=======
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/types';
>>>>>>> bfea7f014a8b3e25981ab926d8560d40930f5814
import { styles } from './style';
import { AnimalCard } from '../../components/HomeCard'; 
import { CATEGORIES } from '../../data/categories';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';

const backgroundUrl = require('../../assets/fundoHome.jpg');

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
<<<<<<< HEAD
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
=======
    const navigation = useNavigation<NavigationProps>();
>>>>>>> bfea7f014a8b3e25981ab926d8560d40930f5814

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

            <Header />
            <Carousel />

<<<<<<< HEAD
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
=======
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
>>>>>>> bfea7f014a8b3e25981ab926d8560d40930f5814
                    />
                )}
            />
        </View>
    );
}
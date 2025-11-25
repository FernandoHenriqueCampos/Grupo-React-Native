import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing, ImageBackground, Image } from 'react-native';
import { styles } from './style';
import logoText from '../../assets/adoteLogo.png';
import logo from '../../assets/logo.png';
const AnimatedLoadingScreen = () => {
    const pulseAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [pulseAnim]);
    const scale = pulseAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.15],
    });

    return (
        <View style={styles.container}>

            <Animated.View style={[styles.animatedIconContainer, { transform: [{ scale }] }]}>
                <Image
                    source={logo}
                    style={styles.animatedIcon}
                />
            </Animated.View>
            <Image
                source={logoText}
                style={styles.image}
            />
            <Text style={styles.loadingText}>Carregando...</Text>
        </View>
    );
};

export default AnimatedLoadingScreen;
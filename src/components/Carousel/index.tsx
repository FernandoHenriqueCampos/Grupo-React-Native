import React, { useState, useRef } from 'react';
import { View, FlatList, Image, Dimensions, ImageSourcePropType, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { styles } from './style';

const { width } = Dimensions.get('window');

const IMAGE_LIST = [
    require('./../../assets/carrossel1.jpg'),
    require('./../../assets/carrosel2.jpg'),
    require('./../../assets/carrossel3.jpg'),
    require('./../../assets/carrossel4.jpg'),
    require('./../../assets/carrossel5.jpeg'),
];

const renderItem = ({ item }: { item: ImageSourcePropType }) => (
    <View style={styles.slide}>
        <Image source={item} style={styles.image} resizeMode="cover" />
    </View>
);

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offsetX / width);
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    const renderIndicators = () => (
        <View style={styles.dotsContainer}>
            {IMAGE_LIST.map((_, index) => (
                <View
                    key={index.toString()}
                    style={[
                        styles.dot,
                        activeIndex === index ? styles.activeDot : styles.inactiveDot,
                    ]}
                />
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={IMAGE_LIST}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                onScroll={handleScroll}
                scrollEventThrottle={16}
            />
            {renderIndicators()}
        </View>
    );
};
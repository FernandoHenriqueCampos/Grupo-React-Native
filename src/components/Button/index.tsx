import { Text, TouchableOpacity, View,  } from 'react-native';
import { styles } from './style';

interface propsButton {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    color?: string;
}

export default function Button({ title, onPress, backgroundColor, color }: propsButton) {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]} onPress={onPress}>
                <Text style={[styles.title, { color: color }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

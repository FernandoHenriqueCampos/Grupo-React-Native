import { Text, TouchableOpacity, View,  } from 'react-native';
import { styles } from './style';

interface propsButton {
    title: string;
    onPress: () => void;
}

export default function Button({ title, onPress }: propsButton) {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

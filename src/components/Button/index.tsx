import { Text, TouchableOpacity, View,  } from 'react-native';
import { styles } from './style';

interface propsButton {
    title: string;
}

export default function Button({ title }: propsButton) {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

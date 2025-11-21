import { View, TextInput } from 'react-native';
import { styles } from './style';

interface propsInput {
    title: string;
    value: string;
    onChangeText: (value: string) => void;
}

export default function Input({title, value, onChangeText}: propsInput) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={title} value={value} onChangeText={onChangeText}/>
        </View>
    );
}

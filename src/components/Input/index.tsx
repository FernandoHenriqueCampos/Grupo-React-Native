import { View, TextInput } from 'react-native';
import { styles } from './style';

interface propsInput {
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    paddingHorizontal?: number;
    paddingVertical?: number;
}

export default function Input({title, value, onChangeText, paddingHorizontal, paddingVertical}: propsInput) {

    return (
        <View style={styles.container}>
            <TextInput style={{...styles.input, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical}} placeholder={title} value={value} onChangeText={onChangeText}/>
        </View>
    );
}

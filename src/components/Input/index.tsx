import { View, TextInput } from 'react-native';
import { styles } from './style';

interface propsInput {
    title: string;
    value: string;
}

export default function Input({title, value}: propsInput) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={title} value={value}/>
        </View>
    );
}

import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

interface propsInput {
    title: string;
    value: string;
    icon?: keyof typeof Ionicons.glyphMap; 
    onChangeText: (text: string) => void;
}

export default function Input({
    title,
    value,
    icon = "person-outline",
    onChangeText,

}: propsInput) {
    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                
                <Ionicons
                    name={icon}
                    size={20}
                    color="#555"
                    style={styles.icon}
                />

                <TextInput
                    style={styles.input}
                    placeholder={title}
                    placeholderTextColor="#666"
                    value={value}
                    onChangeText={onChangeText}
                />

            </View>
        </View>
    );
}

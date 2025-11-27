import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ButtonIA() {
    const navigation = useNavigation();

    function handleOpenAiAssistant() {
        navigation.navigate('AiAssistant');
    }

    return (
        <View >
            <TouchableOpacity
                style={styles.buttonMaintenance}
                onPress={handleOpenAiAssistant}
                activeOpacity={0.8}
            >
                <Ionicons name="chatbubbles" size={24} color="#890be3ff" />
            </TouchableOpacity>
        </View>
    );
}

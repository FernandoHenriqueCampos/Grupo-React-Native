import { View, Text } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function Admin() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Admin</Text>
            <Text style={styles.title}>Responsável por Fernando</Text>
        </View>
    );
}

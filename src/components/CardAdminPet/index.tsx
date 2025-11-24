import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

interface propsButton {
    name?: string;
    race?: string;
    image?: string;
    handleEdit?: () => void;
    handleDelete?: () => void;
}

export default function CardAdminPet({ name, race, image, handleEdit, handleDelete }: propsButton) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />

            <View style={styles.containerInfo}>
                <Text style={styles.title} numberOfLines={1}>{name}</Text>
                <Text style={styles.text} numberOfLines={1}>{race}</Text>
            </View>

            <TouchableOpacity onPress={handleEdit}>
                <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDelete}>
                <Text style={styles.textButton}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

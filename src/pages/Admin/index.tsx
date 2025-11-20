import { View, Text, Button } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import { api } from "../../service/api";

export default function Admin() {

    const navigation = useNavigation();

    async function getAnimais() {
        const response = await api.get("/animais");
    }

    async function  putAnimais() {
        const response = await api.get("/animais/put");
    }

    return (
        <View style={styles.container}>
<<<<<<< Updated upstream
            <Text style={styles.title}>Tela de Admin</Text>
            <Text style={styles.title}>Responsável por Fernando</Text>
=======
            <Text style={styles.title}>Admin</Text>
            <View style={styles.containerAdmin}>
                
                <Input title="id" value=""/>
                <Input title="Nome" value=""/>
                <Input title="Raca" value=""/>
                <Input title="idade" value=""/>
                <Input title="cor" value=""/>
                <Input title="peso" value=""/>
                <Input title="porte" value=""/>
                <Input title="genero" value=""/>

                <Button title="Salvar" onPress={getAnimais}/>

            </View>
>>>>>>> Stashed changes
        </View>
    );
}

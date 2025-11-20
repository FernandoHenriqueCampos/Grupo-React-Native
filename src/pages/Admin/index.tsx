import { View, Text } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { api } from "../../service/api";
import { useState } from 'react';

export default function Admin() {

    const navigation = useNavigation();

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [idade, setIdade] = useState("");
    const [cor, setCor] = useState("");
    const [peso, setPeso] = useState("");
    const [porte, setPorte] = useState("");
    const [genero, setGenero] = useState("");

    async function putAnimais() {
        try {
            const response = await api.put(`/animais/${id}`, {
            nome,
            raca,
            idade,
            cor,
            peso,
            porte,
            genero,
            });

            console.log("Atualizado:", response.data);

        } catch (error) {
            console.log("Erro ao atualizar:", error);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin</Text>
            <View style={styles.containerAdmin}>

                <Input title="id" value={id} onChangeText={setId}/>
                <Input title="Nome" value={nome} onChangeText={setNome}/>
                <Input title="Raca" value={raca} onChangeText={setRaca}/>
                <Input title="idade" value={idade} onChangeText={setIdade}/>
                <Input title="cor" value={cor} onChangeText={setCor}/>
                <Input title="peso" value={peso} onChangeText={setPeso}/>
                <Input title="porte" value={porte} onChangeText={setPorte}/>
                <Input title="genero" value={genero} onChangeText={setGenero}/>

                <Button title="Salvar" onPress={putAnimais}/>

                    
            </View>
        </View>
    );
}

import { View } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { api } from '../../service/api';

interface Animal {
    id: string | number;
    nome: string;
    raca: string;
    idade?: string;
    cor?: string;
    peso?: number | string;
    porte?: string;
    genero?: string;
}

interface PropsModalEditarAdmin {
    animal: Animal | null;
    onClose: () => void;    
    onUpdate: (animal: Animal) => void; 
}

export default function ModalEditarAdmin({ animal, onClose, onUpdate }: PropsModalEditarAdmin) {

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [idade, setIdade] = useState("");
    const [cor, setCor] = useState("");
    const [peso, setPeso] = useState("");
    const [porte, setPorte] = useState("");
    const [genero, setGenero] = useState("");

    useEffect(() => {
        if (animal) {
            setId(String(animal.id));
            setNome(animal.nome);
            setRaca(animal.raca);
            setIdade(animal.idade ?? "");
            setCor(animal.cor ?? "");
            setPeso(String(animal.peso ?? ""));
            setPorte(animal.porte ?? "");
            setGenero(animal.genero ?? "");
        }
    }, [animal]);

    async function putAnimais() {
        try {
            const { data } = await api.put(`animais/${id}`, {
                nome,
                raca,
                idade,
                cor,
                peso,
                porte,
                genero,
            });

            console.log("Atualizado:", data);

            onUpdate(data);  
            onClose();        
        } catch (error) {
            console.log("Erro ao atualizar:", error);
        }
    }

    return (
        <View style={styles.containerAdmin}>
            <View style={styles.containerModal}>
                <Input title="Nome" value={nome} onChangeText={setNome}/>
                <Input title="Raça" value={raca} onChangeText={setRaca}/>
                <Input title="Idade" value={idade} onChangeText={setIdade}/>
                <Input title="Cor" value={cor} onChangeText={setCor}/>
                <Input title="Peso" value={peso} onChangeText={setPeso}/>
                <Input title="Porte" value={porte} onChangeText={setPorte}/>
                <Input title="Gênero" value={genero} onChangeText={setGenero}/>
                <Button title="Salvar" onPress={putAnimais} />
                <Button title="Cancelar" onPress={onClose} />
            </View>
        </View>
    );
}

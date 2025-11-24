import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { api } from '../../services/api';

interface Animal {
    id: string | number;
    nome: string;
    raca: string;
    idade?: string;
    cor?: string;
    peso?: number | string;
    porte?: string;
    genero?: string;
    tipo?: string;
    image?: string;
    tipoModal: 'criar' | 'editar';
}

interface PropsModalAdmin {
    animal: Animal | null;
    onClose: () => void;
    onUpdate: (animal: Animal) => void;
}

export default function ModalAdmin({ animal, onClose, onUpdate }: PropsModalAdmin) {

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");
    const [idade, setIdade] = useState("");
    const [cor, setCor] = useState("");
    const [peso, setPeso] = useState("");
    const [porte, setPorte] = useState("");
    const [genero, setGenero] = useState("");
    const [image, setImage] = useState("");
    const [tipo, setTipo] = useState("");

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
            setImage(animal.image ?? "");
            setTipo(animal.tipo ?? "");
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
                image,
                tipo
            });

            console.log("Atualizado:", data);
            onUpdate(data);
            onClose();
        } catch (error) {
            console.log("Erro ao atualizar:", error);
        }
    }

    async function postAnimais() {
        try {
            const { data } = await api.post(`animais`, {
                nome,
                raca,
                idade,
                cor,
                peso,
                porte,
                genero,
                image,
            });

            console.log("Criado:", data);
            onUpdate(data);
            onClose();
        } catch (error) {
            console.log("Erro ao criar:", error);
        }
    }

    const exibirEditar = animal?.tipoModal === "editar";
    const exibirCriar = animal?.tipoModal === "criar";

    return (
        <View style={styles.containerAdmin}>

            <View style={[styles.containerModal, { display: exibirEditar ? "flex" : "none" }]}>
                <Input title="Nome" value={nome} onChangeText={setNome}/>
                <Input title="Raça" value={raca} onChangeText={setRaca}/>
                <Input title="Idade" value={idade} onChangeText={setIdade}/>
                <Input title="Cor" value={cor} onChangeText={setCor}/>
                <Input title="Peso" value={peso} onChangeText={setPeso}/>
                <Input title="Porte" value={porte} onChangeText={setPorte}/>
                <Input title="Gênero" value={genero} onChangeText={setGenero}/>
                <Input title="Tipo" value={tipo} onChangeText={setTipo}/>
                <Input title="Imagem" value={image} onChangeText={setImage}/>

                <Button title="Salvar" onPress={putAnimais} 
                    backgroundColor="#8A2BE2"
                    color="#ffffffff"/>
                <Button title="Cancelar" onPress={onClose} 
                    backgroundColor="#8A2BE2"
                    color="#ffffffff"/>
            </View>

            <View style={[styles.containerModal, { display: exibirCriar ? "flex" : "none" }]}>
                <Input title="Nome" value={nome} onChangeText={setNome}/>
                <Input title="Raça" value={raca} onChangeText={setRaca}/>
                <Input title="Idade" value={idade} onChangeText={setIdade}/>
                <Input title="Cor" value={cor} onChangeText={setCor}/>
                <Input title="Peso" value={peso} onChangeText={setPeso}/>
                <Input title="Porte" value={porte} onChangeText={setPorte}/>
                <Input title="Gênero" value={genero} onChangeText={setGenero}/>
                <Input title="Tipo" value={tipo} onChangeText={setTipo}/>
                <Input title="Imagem" value={image} onChangeText={setImage}/>

                <Button title="Salvar" onPress={postAnimais} 
                    backgroundColor="#8A2BE2"
                    color="#ffffffff"/>
                <Button title="Cancelar" onPress={onClose} 
                    backgroundColor="#8A2BE2"
                    color="#ffffffff"/>
            </View>
        </View>
    );
}

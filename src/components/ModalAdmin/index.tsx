import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { api } from '../../services/api';
import * as ImagePicker from 'expo-image-picker';

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

    async function selecionarImagem() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true, 
        });

        if (!result.canceled) {
            const base64 = result.assets[0].base64;

            setImage(base64 || "");
        }
    }

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
                tipo
            });

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

                <Button title={image ? "Trocar imagem" : "Selecionar imagem"} onPress={selecionarImagem} />

                {image !== "" && (
                    <Image 
                        source={{ uri: `data:image/jpeg;base64,${image}` }} 
                        style={styles.preview} 
                    />
                )}

                <Button title="Salvar" onPress={putAnimais} />
                <Button title="Cancelar" onPress={onClose} />
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

                <Button title={image ? "Trocar imagem" : "Selecionar imagem"} onPress={selecionarImagem} />

                {image !== "" && (
                    <Image 
                        source={{ uri: `data:image/jpeg;base64,${image}` }} 
                        style={styles.preview} 
                    />
                )}

                <Button title="Salvar" onPress={postAnimais} />
                <Button title="Cancelar" onPress={onClose} />
            </View>
        </View>
    );
}

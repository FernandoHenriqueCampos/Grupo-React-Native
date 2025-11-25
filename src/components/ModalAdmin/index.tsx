import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { styles } from './style';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { apiPets } from '../../services/api';

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
            const { data } = await apiPets.put(`animais/${id}`, {
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
            const { data } = await apiPets.post(`animais`, {
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={styles.containerAdmin}>

                <View style={[styles.containerModal, { display: exibirEditar ? "flex" : "none" }]}>

                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    >

                        <Text style={styles.titleModal}>Editar Animal</Text>

                        <Input title="Nome" value={nome} onChangeText={setNome} icon="paw-outline" />
                        <Input title="Raça" value={raca} onChangeText={setRaca} icon="layers-outline" />
                        <Input title="Idade" value={idade} onChangeText={setIdade} icon="hourglass-outline" />
                        <Input title="Cor" value={cor} onChangeText={setCor} icon="color-palette-outline" />
                        <Input title="Peso" value={peso} onChangeText={setPeso} icon="barbell-outline" />
                        <Input title="Porte" value={porte} onChangeText={setPorte} icon="resize-outline" />
                        <Input title="Gênero" value={genero} onChangeText={setGenero} icon="male-female-outline" />
                        <Input title="Tipo" value={tipo} onChangeText={setTipo} icon="albums-outline" />
                        <Input title="Imagem" value={image} onChangeText={setImage} icon="image-outline" />

                        <View style={styles.containerButton}>
                            <Button title="Salvar" onPress={putAnimais} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={100} paddingVertical={10} />
                            <Button title="Cancelar" onPress={onClose} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={90} paddingVertical={10} />
                        </View>
                    </ScrollView>
                </View>


                <View style={[styles.containerModal, { display: exibirCriar ? "flex" : "none" }]}>

                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    >

                        <Text style={styles.titleModal}>Criar Animal</Text>

                        <Input title="Nome" value={nome} onChangeText={setNome} icon="paw-outline" />
                        <Input title="Raça" value={raca} onChangeText={setRaca} icon="layers-outline" />
                        <Input title="Idade" value={idade} onChangeText={setIdade} icon="hourglass-outline" />
                        <Input title="Cor" value={cor} onChangeText={setCor} icon="color-palette-outline" />
                        <Input title="Peso" value={peso} onChangeText={setPeso} icon="barbell-outline" />
                        <Input title="Porte" value={porte} onChangeText={setPorte} icon="resize-outline" />
                        <Input title="Gênero" value={genero} onChangeText={setGenero} icon="male-female-outline" />
                        <Input title="Tipo" value={tipo} onChangeText={setTipo} icon="albums-outline" />
                        <Input title="Imagem" value={image} onChangeText={setImage} icon="image-outline" />

                        <View style={styles.containerButton}>
                            <Button title="Salvar" onPress={postAnimais} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={100} paddingVertical={10} />
                            <Button title="Cancelar" onPress={onClose} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={90} paddingVertical={10} />
                        </View>
                    </ScrollView>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}

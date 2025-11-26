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
import { apiUsuarios } from '../../services/api';
import { useUser } from '../../context/UserContext';

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    tipoModal: 'editarNome' | 'editarLogin';
}

interface PropsModalUsuario {
    usuario: Usuario | null;
    onClose: () => void;
    onUpdate: (usuario: Usuario) => void;
}

export default function ModalUsuario({ usuario, onClose, onUpdate }: PropsModalUsuario) {

     const { idUsuarioLogado, logout } = useUser();

    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
        if (usuario) {
            setNome(usuario.nome);
        }
    }, [usuario]);

    async function putUsuarioNome() {
        try {
            const { data } = await apiUsuarios.put(`usuarios/${idUsuarioLogado}`, {
                nome
            });

            onUpdate(data);
            onClose();
        } catch (error) {
            console.log("Erro ao atualizar nome:", error);
        }
    }

    async function putUsuarioLogin() {
        try {
            const { data } = await apiUsuarios.put(`usuarios/${idUsuarioLogado}`, {
                email,
                senha
            });

            onUpdate(data);
            onClose();
        } catch (error) {
            console.log("Erro ao atualizar login:", error);
        }
    }

    const exibirEditarNome = usuario?.tipoModal === "editarNome";
    const exibirEditarLogin = usuario?.tipoModal === "editarLogin";

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <View style={styles.containerAdmin}>

                <View style={[styles.containerModalEditarNome, { display: exibirEditarNome ? "flex" : "none" }]}>

                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    >

                        <Text style={styles.titleModal}>Editar Nome</Text>

                        <Input title="Nome" value={nome} onChangeText={setNome} icon="paw-outline" />

                        <View style={styles.espaco} />

                        <View style={styles.containerButton}>
                            <Button title="Salvar" onPress={putUsuarioNome} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={100} paddingVertical={10} />
                            <Button title="Cancelar" onPress={onClose} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={90} paddingVertical={10} />
                        </View>
                    </ScrollView>
                </View>


                <View style={[styles.containerModalEditarLogin, { display: exibirEditarLogin ? "flex" : "none" }]}>

                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingBottom: 40 }}
                        showsVerticalScrollIndicator={false}
                    >

                        <Text style={styles.titleModal}>Editar Login</Text>

                        <Input title="Login" value={email} onChangeText={setEmail} icon="mail-outline" />
                        <Input title="Senha" value={senha} onChangeText={setSenha} icon="lock-closed-outline" />

                        <View style={styles.espaco} />

                        <View style={styles.containerButton}>
                            <Button title="Salvar" onPress={putUsuarioLogin} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={100} paddingVertical={10} />
                            <Button title="Cancelar" onPress={onClose} backgroundColor="#8A2BE2" color="#fff" paddingHorizontal={90} paddingVertical={10} />
                        </View>
                    </ScrollView>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}

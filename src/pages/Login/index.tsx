import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../services/api';
import styles from './style';

interface LoginProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

interface Usuario {
    email: string;
    senha: string;

}

export default function Login({ navigation }: LoginProps) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.get<Usuario[]>(`${API_URL}/usuario`);
            const usuarios: Usuario[] = response.data;

            const user = usuarios.find(
                (usuario) => usuario.email === email && usuario.senha === senha
            );

            if (user) {
                navigation.navigate('StackHome');
            } else {
                Alert.alert('Erro de Login', 'E-mail ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ImageBackground
                source={require('../../../src/assets/Tela_Login.jpg')}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Text style={styles.title}>Login</Text>

                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="#999"
                            style={styles.input}
                            onChangeText={setEmail}
                            editable={!loading}
                        />

                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#999"
                            secureTextEntry
                            style={styles.input}
                            onChangeText={setSenha}
                            editable={!loading}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
                            <Text style={styles.buttonText}>
                                {loading ? 'Entrando...' : 'Entrar'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('StackCadastro')} disabled={loading}>
                            <Text style={styles.link}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}
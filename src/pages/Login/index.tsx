import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { API_URL } from '../../services/api';
import styles from './style';

interface LoginProps {
    navigation: {
        navigate: (screen: string) => void;
    };
}

export default function Login({ navigation }: LoginProps) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        const response = await fetch(`${API_URL}/usuario`);
        const usuarios = await response.json();

        const user = usuarios.find(
            (u: { email: string; senha: string }) => u.email === email && u.senha === senha
        );

        if (user) {
            navigation.navigate('StackHome');
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
                        />

                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#999"
                            secureTextEntry
                            style={styles.input}
                            onChangeText={setSenha}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('StackCadastro')}>
                            <Text style={styles.link}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

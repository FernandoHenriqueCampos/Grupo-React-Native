import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Alert,
    ActivityIndicator,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Keyboard
} from 'react-native';

import { isAxiosError } from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { apiUsuarios } from '../../services/api';
import styles from './style';
import { RootStackParamList } from '../../@types/types';
import { useUser } from '../../context/UserContext';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'StackLogin'>;

interface LoginProps {
    navigation: LoginScreenProp;
}

interface Usuario {
    id: string;
    email: string;
    senha: string;
    nome?: string;
}

export default function Login({ navigation }: LoginProps) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const loadingUsuarios = async () => {
        try {
            const response = await apiUsuarios.get<Usuario[]>("/usuarios");
            setUsuarios(response.data);
        } catch (err) {
            console.error('Erro ao carregar usuários:', err);
            if (isAxiosError(err) && (err.response?.status === 404 || err.code === "ERR_NETWORK")) {
                Alert.alert('Erro', 'Não foi possível carregar os dados de login. Verifique sua conexão e a API.');
            }
        }
    }

    const { setUsuarioLogado, setIdUsuarioLogado } = useUser();

    const handleLogin = async () => {
        Keyboard.dismiss();
        setError(false);

        const emailSemEspacos = email.trim();
        const emailFinal = emailSemEspacos.toLowerCase();
        const senhaFinal = senha.trim();

        if (emailFinal === '' || senhaFinal === '') {
            Alert.alert('Atenção', 'Por favor, preencha e-mail e senha.');
            setError(true);
            return;
        }

        setLoading(true);

        const teste = usuarios.find(user => user.email === emailFinal && user.senha === senhaFinal)

        try {
            if (!teste) {
                Alert.alert('Acesso Negado', 'E-mail ou senha incorretos.');
                setError(true);
                return;
            }

            setEmail('');
            setSenha('');
            setError(false);

            setUsuarioLogado(true);
            setIdUsuarioLogado(teste.id);

            navigation.navigate('MyTabs');

        } catch (err) {
            console.error('Erro Detalhado Login:', err);
            setError(true);

            if (isAxiosError(err)) {
                if (err.response?.status === 404) {
                    Alert.alert(
                        'Erro (404)',
                        'A rota "/usuarios" não foi encontrada na API.'
                    );
                } else if (err.code === "ERR_NETWORK") {
                    Alert.alert('Sem Conexão', 'Verifique sua internet.');
                } else {
                    Alert.alert('Erro', `Erro na API: ${err.message}`);
                }
            } else {
                Alert.alert('Erro Inesperado', 'Erro interno no app.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChangeEmail = (text: string) => {
        setEmail(text);
        if (error) setError(false);
    };

    const handleChangeSenha = (text: string) => {
        setSenha(text);
        if (error) setError(false);
    };

    useEffect(() => {
        loadingUsuarios()
    }, [])

    return (
        <ImageBackground
            source={require('../../../src/assets/Tela_Login.png')}
            resizeMode="cover"
            style={styles.background}
        >
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={styles.keyboardView}
                >
                    <View style={styles.box}>
                        <Text style={styles.title}>Login</Text>

                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="#5e0cafff"
                            style={[styles.input, error && styles.inputError]}
                            onChangeText={handleChangeEmail}
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            editable={!loading}
                        />

                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#5e0cafff"
                            secureTextEntry
                            style={[styles.input, error && styles.inputError]}
                            onChangeText={handleChangeSenha}
                            value={senha}
                            editable={!loading}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogin}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            {loading ? (
                                <ActivityIndicator color="#FFF" />
                            ) : (
                                <Text style={styles.buttonText}>Entrar</Text>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('StackCadastro')}
                            disabled={loading}
                            style={styles.linkContainer}
                        >
                            <Text style={styles.linkText}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
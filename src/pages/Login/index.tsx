import React, { useState } from 'react';
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
    ScrollView,
    Platform,
    Keyboard
} from 'react-native';

import { api } from '../../services/api';
import styles from './style';

interface LoginProps {
    navigation: {
        navigate: (screen: string) => void;
        reset: (params: any) => void;
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
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        Keyboard.dismiss();
        setError(false);

        if (!email.trim() || !senha.trim()) {
            Alert.alert('Atenção', 'Por favor, preencha e-mail e senha.');
            setError(true);
            return;
        }

        setLoading(true);

        try {
            const response = await api.get<Usuario[]>('/usuario', {
                params: { email: email }
            });

            const usuariosEncontrados = response.data;

            if (usuariosEncontrados.length === 0 || usuariosEncontrados[0].senha !== senha) {
                Alert.alert('Erro', 'E-mail ou senha incorretos.');
                setError(true);
                setLoading(false);
                return;
            }

            setEmail('');
            setSenha('');
            setError(false);
            navigation.navigate('StackHome');

        } catch (err: any) {
            console.error('Erro Login:', err);
            setLoading(false);
            setError(true);
            if (err.response && err.response.status === 404) {
                Alert.alert('Erro', 'E-mail ou senha incorretos.');
            } else {
                Alert.alert('Erro', 'Não foi possível conectar. Verifique sua internet.');
            }
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

    return (
        <ImageBackground
            source={require('../../../src/assets/Tela_Login.jpg')}
            resizeMode="cover"
            style={styles.background}
        >
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={styles.keyboardView}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.box}>
                            <Text style={styles.title}>Login</Text>

                            <TextInput
                                placeholder="E-mail"
                                placeholderTextColor="#999"
                                style={[styles.input, error && styles.inputError]}
                                onChangeText={handleChangeEmail}
                                value={email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                editable={!loading}
                            />

                            <TextInput
                                placeholder="Senha"
                                placeholderTextColor="#999"
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
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { isAxiosError } from 'axios';
import { api } from '../../services/api';
import styles from './style';
import { RootStackParamList, Usuario } from '../../@types/Types';

type CadastroScreenProp = NativeStackNavigationProp<RootStackParamList, 'StackCadastro'>;

export default function Cadastro() {
    const navigation = useNavigation<CadastroScreenProp>();

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(false);

    const handleCadastro = async () => {
        Keyboard.dismiss();
        setError(false);

        if (!nome.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
            Alert.alert('Atenção', 'Preencha todos os campos!');
            setError(true);
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            setError(true);
            return;
        }

        setLoading(true);

        try {
            const checkUser = await api.get<Usuario[]>('/usuario', {
                params: { email: email }
            });

            if (checkUser.data.length > 0) {
                Alert.alert('Atenção', 'Este e-mail já está cadastrado.');
                setError(true);
                setLoading(false);
                return;
            }

            const novoUsuario: Omit<Usuario, 'id'> = {
                nome,
                email,
                senha,
                perfil: 'user'
            };

            await api.post<Usuario>('/usuario', novoUsuario);

            Alert.alert('Sucesso', 'Conta criada! Faça login para continuar.', [
                { text: 'Ir para Login', onPress: () => navigation.navigate('StackLogin') }
            ]);

        } catch (error) {
            console.log("Erro detalhado:", error);
            setError(true);

            if (isAxiosError(error)) {
                if (error.response) {
                    if (error.response.status === 404) {
                        Alert.alert('Erro de Conexão', 'Rota não encontrada (404). Verifique se o recurso no MockAPI se chama "usuario".');
                    } else {
                        Alert.alert('Erro', `Erro com a conexão com a API. Status: ${error.response.status}`);
                    }
                } else if (error.request) {
                    Alert.alert('Erro', 'Erro com a conexão com a API. Verifique sua internet.');
                } else {
                    Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
                }
            } else {
                Alert.alert('Erro', 'Ocorreu um erro inesperado no aplicativo.');
            }
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        if (error) setError(false);
    };

    return (
        <ImageBackground
            source={require('../../assets/Tela_Cadastro.png')}
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
                            <Text style={styles.title}>Junte-se a nós!</Text>
                            <Text style={styles.subtitle}>Adote, ame e cuide.</Text>

                            <TextInput
                                placeholder="Nome Completo"
                                placeholderTextColor="#999"
                                style={[styles.input, error && !nome ? styles.inputError : null]}
                                value={nome}
                                onChangeText={(t) => { setNome(t); clearError(); }}
                            />

                            <TextInput
                                placeholder="E-mail"
                                placeholderTextColor="#999"
                                style={[styles.input, error && !email ? styles.inputError : null]}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={(t) => { setEmail(t); clearError(); }}
                            />

                            <TextInput
                                placeholder="Senha"
                                placeholderTextColor="#999"
                                secureTextEntry
                                style={[styles.input, error && (!senha || senha !== confirmarSenha) ? styles.inputError : null]}
                                value={senha}
                                onChangeText={(t) => { setSenha(t); clearError(); }}
                            />

                            <TextInput
                                placeholder="Confirmar Senha"
                                placeholderTextColor="#999"
                                secureTextEntry
                                style={[styles.input, error && (!confirmarSenha || senha !== confirmarSenha) ? styles.inputError : null]}
                                value={confirmarSenha}
                                onChangeText={(t) => { setConfirmarSenha(t); clearError(); }}
                            />

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleCadastro}
                                disabled={loading}
                                activeOpacity={0.8}
                            >
                                {loading ? (
                                    <ActivityIndicator color="#FFF" />
                                ) : (
                                    <Text style={styles.buttonText}>CRIAR CONTA</Text>
                                )}
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('StackLogin')}
                                style={styles.linkContainer}
                            >
                                <Text style={styles.linkText}>
                                    Já tem conta? <Text style={styles.linkBold}>Faça login</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
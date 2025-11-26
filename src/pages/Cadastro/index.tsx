import React, { useState, useRef, useEffect } from 'react';
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
    Keyboard,
    Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { isAxiosError } from 'axios';
import { apiUsuarios } from '../../services/api';
import styles from './style';
import { RootStackParamList, Usuario } from '../../@types/types';

type CadastroScreenProp = NativeStackNavigationProp<RootStackParamList, 'StackCadastro'>;

type Usuarios = {
    nome?: string;
    email?: string;
    senha?: string;
    confirmarSenha?: string;
};

const FadeError = ({ error }: { error?: string }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (error) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            fadeAnim.setValue(0);
        }
    }, [error]);

    if (!error) return null;

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <Text style={{
                color: 'red',
                marginBottom: 10,
                alignSelf: 'flex-start',
                marginLeft: '10%'
            }}>
                {error}
            </Text>
        </Animated.View>
    );
};

export default function Cadastro() {
    const navigation = useNavigation<CadastroScreenProp>();

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmarSenha, setConfirmarSenha] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [fieldErrors, setFieldErrors] = useState<Usuarios>({});

    const handleCadastro = async () => {
        Keyboard.dismiss();

        let errors: Usuarios = {};
        let hasError = false;

        if (!nome.trim()) {
            errors.nome = 'Nome é obrigatório';
            hasError = true;
        }

        if (!email.trim()) {
            errors.email = 'E-mail é obrigatório';
            hasError = true;
        }

        if (!senha.trim()) {
            errors.senha = 'Senha é obrigatória';
            hasError = true;
        }

        if (!confirmarSenha.trim()) {
            errors.confirmarSenha = 'Confirmação é obrigatória';
            hasError = true;
        }

        if (senha && confirmarSenha && senha !== confirmarSenha) {
            errors.senha = 'As senhas não coincidem';
            errors.confirmarSenha = 'As senhas não coincidem';
            hasError = true;
        }

        if (hasError) {
            setFieldErrors(errors);
            return;
        }

        setLoading(true);
        setFieldErrors({});

        try {
            const novoUsuario = {
                nome,
                email,
                senha
            };

            await apiUsuarios.post<Usuario>('/usuarios', novoUsuario);

            Alert.alert('Sucesso', 'Conta criada! Faça login para continuar.', [
                { text: 'Ir para Login', onPress: () => navigation.navigate('StackLogin') }
            ]);

        } catch (error) {
            console.log("Erro no cadastro:", JSON.stringify(error, null, 2));

            if (isAxiosError(error)) {
                if (error.response?.status === 404) {
                    Alert.alert('Erro', 'Rota não encontrada (404). Verifique o MockAPI.');
                } else {
                    Alert.alert('Erro', 'Falha na conexão com o servidor.');
                }
            } else {
                Alert.alert('Erro', 'Ocorreu um erro inesperado.');
            }
        } finally {
            setLoading(false);
        }
    };

    const clearError = (field: keyof Usuarios) => {
        setFieldErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[field];
            return newErrors;
        });
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
                    style={styles.keyboardView}
                >
                    <View style={styles.box}>
                        <Text style={styles.title}>Junte-se a nós!</Text>
                        <Text style={styles.subtitle}>Adote, ame e cuide.</Text>

                        <TextInput
                            placeholder="Nome Completo"
                            placeholderTextColor="#5e0cafff"
                            style={[styles.input, !!fieldErrors.nome && styles.inputError]}
                            value={nome}
                            onChangeText={(t) => { setNome(t); clearError('nome'); }}
                        />

                        <FadeError error={fieldErrors.nome} />

                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor="#5e0cafff"
                            style={[styles.input, !!fieldErrors.email && styles.inputError]}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(t) => { setEmail(t); clearError('email'); }}
                        />
                        <FadeError error={fieldErrors.email} />

                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#5e0cafff"
                            secureTextEntry
                            style={[styles.input, !!fieldErrors.senha && styles.inputError]}
                            value={senha}
                            onChangeText={(t) => { setSenha(t); clearError('senha'); }}
                        />
                        <FadeError error={fieldErrors.senha} />

                        <TextInput
                            placeholder="Confirmar Senha"
                            placeholderTextColor="#5e0cafff"
                            secureTextEntry
                            style={[styles.input, !!fieldErrors.confirmarSenha && styles.inputError]}
                            value={confirmarSenha}
                            onChangeText={(t) => { setConfirmarSenha(t); clearError('confirmarSenha'); }}
                        />
                        <FadeError error={fieldErrors.confirmarSenha} />


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
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ImageBackground>
    );
}
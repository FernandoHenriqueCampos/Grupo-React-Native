import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Keyboard,
    Alert,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';
import { styles } from './style';
import { getAnimalCareTips } from '../../services/aiService';
import { Header } from '../../components/Header';

export default function AiAssistant() {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSend() {
        if (!inputText.trim()) return;

        Keyboard.dismiss();
        setLoading(true);
        setResponseText('');

        try {
            const result = await getAnimalCareTips(inputText);
            setResponseText(result);
        } catch (error) {
            Alert.alert("Ops!", "Não foi possível conectar com a IA. Verifique sua chave API e internet.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <Header />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.brandTitle}>GeminiPet</Text>
                    <Text style={styles.brandSubtitle}>Seu assistente de cuidados</Text>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Meu gato não quer beber água..."
                        placeholderTextColor="#999"
                        value={inputText}
                        onChangeText={setInputText}
                        multiline
                        textAlignVertical="top"
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSend}
                    disabled={loading}
                    activeOpacity={0.8}
                >
                    {loading ? (
                        <ActivityIndicator color="#FFF" />
                    ) : (
                        <Text style={styles.buttonText}>Enviar Dúvida</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.responseArea}>
                    <Text style={styles.responseLabel}>Resposta do Especialista:</Text>
                    <ScrollView
                        style={styles.responseScroll}
                        contentContainerStyle={styles.responseContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {responseText ? (
                            <Text style={styles.responseText}>{responseText}</Text>
                        ) : (
                            <Text style={styles.placeholderText}>
                                A resposta aparecerá aqui após você enviar sua pergunta.
                            </Text>
                        )}
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    );
}


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import CardCursos from '../../components/CardCursos';
import { fetchMSLearnCourses, Course } from '../../services/courseService';

const PageCursos: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMSLearnCourses()
            .then(fetchedCourses => {
                setCourses(fetchedCourses);
            })
            .catch(error => {
                console.error("Falha ao carregar cursos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0078d4" />
                <Text style={styles.loadingText}>Carregando 5 cursos...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}> Catálogo de Cursos que você ganhou por adotar conosco </Text>

            <FlatList
                data={courses}
                keyExtractor={(item) => item.uid}
                renderItem={({ item }) => <CardCursos course={item} />}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={() => <Text style={styles.errorText}>Nenhum curso encontrado. Verifique sua conexão ou filtros da API.</Text>}
            />
        </SafeAreaView>
    );
};

// ➡️ Estilos do Componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
        color: '#333',
    },
    listContent: {
        paddingBottom: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f7',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#0078d4',
    },
    errorText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        padding: 20
    }
});

export default PageCursos;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import CardCursos from '../../components/CardCursos';
import { fetchMSLearnCourses, Course } from '../../services/courseService';
import { styles } from './style';
import { Header } from '../../components/Header';

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
            <Header />
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



export default PageCursos;
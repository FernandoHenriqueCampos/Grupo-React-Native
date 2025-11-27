import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Course } from '../../services/courseService';
import { styles } from './style';

interface CardCursosProps {
    course: Course;
}

const CardCursos: React.FC<CardCursosProps> = ({ course }) => {
    const handlePress = () => {
        Linking.openURL(course.url).catch(err => console.error("Falha ao abrir URL:", err));
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.card}>
            <Text style={styles.title}>{course.title}</Text>
            <Text style={styles.description} numberOfLines={3}>
                {course.description}
            </Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>⏱️{Math.ceil(course.durationInMinutes / 60)} horas</Text>
                <Text style={styles.linkText}>Ver Curso </Text>
            </View>
        </TouchableOpacity>
    );
};


export default CardCursos;
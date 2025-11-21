import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    box: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        elevation: 5,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },

    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#b3dcee',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 15,
    },

    button: {
        width: '100%',
        height: 45,
        backgroundColor: '#feb680',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },

    link: {
        marginTop: 15,
        color: '#0044aa',
        textDecorationLine: 'underline',
    },
});

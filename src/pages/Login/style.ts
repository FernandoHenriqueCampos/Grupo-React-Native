import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCE6F4',
    },
    safeArea: {
        flex: 1,
        width: '100%',
    },
    keyboardView: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 28,
        paddingVertical: 32,
        paddingHorizontal: 25,
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginBottom: 80,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 25,
        textAlign: 'center',
    },

    input: {
        width: '100%',
        height: 52,
        backgroundColor: '#CFE6F5',
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },

    inputError: {
        borderWidth: 1,
        borderColor: '#FF375B',
    },

    button: {
        width: '100%',
        height: 52,
        backgroundColor: '#8A2BE2',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        elevation: 3,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    linkContainer: {
        padding: 5,
        marginTop: 5,
    },

    linkText: {
        color: '#1E60AA',
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
});

export default styles;
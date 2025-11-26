import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerAdmin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleModal: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,      
        marginBottom: 20,
    },
    containerModalEditarLogin: {
        backgroundColor: '#ffffffff',
        borderRadius: 15,
        width: '95%',
        height: '50%',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',      
    },
    containerModalEditarNome: {
        backgroundColor: '#ffffffff',
        borderRadius: 15,
        width: '95%',
        height: '40%',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.4)',      
    },
    imagePicker: {
        width: '100%',
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    preview: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: "center"
    },
    containerButton: {
        gap: 10,
    },
    espaco: {
        height: 40,
    },
});

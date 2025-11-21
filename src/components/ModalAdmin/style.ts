import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerAdmin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerModal: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '95%',
        height: '90%',
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
    }
});

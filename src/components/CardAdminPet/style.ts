import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: '95%',
        height: 50,
        paddingHorizontal: 10,
        gap: 10,
    },

    image: {
        width: 30,
        height: 30,
    },

    containerInfo: {
        flex: 1,
        flexDirection: 'column',
    },

    title: {
        fontFamily: 'Verdana',
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink: 1,
    },

    text: {
        fontFamily: 'Verdana',
        fontSize: 12,
        flexShrink: 1,
    },
});

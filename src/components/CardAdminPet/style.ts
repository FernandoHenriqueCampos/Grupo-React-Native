import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '95%',
        height: 50,
        paddingHorizontal: 10,
        gap: 10,
        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.12)",
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
        color: '#8A2BE2',
        fontFamily: 'Verdana',
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink: 1,
    },

    text: {
        fontFamily: 'Verdana',
        fontSize: 12,
        flexShrink: 1,
        color: '#8A2BE2',
        fontWeight: '200',
    },
    textButton: {
        fontFamily: 'Verdana',
        fontSize: 12,
        flexShrink: 1,
        color: '#8A2BE2',
        fontWeight: 'bold',
    },
});

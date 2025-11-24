import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
        borderRadius: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '10%',
    },
    title: {
        fontFamily: 'Verdana',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: '5%',
        fontWeight: 'bold',
        marginTop: '2%',
        color: '#8A2BE2',
        marginRight: '20%',
    },
    flatList: {
        width: '100%',
        height: '100%',
    },
    containerAdminPet: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

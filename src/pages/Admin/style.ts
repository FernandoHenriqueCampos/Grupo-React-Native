import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCD6A9',
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
        marginTop: '10%',
    },
    title: {
        fontFamily: 'Verdana',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: '5%',
        fontWeight: 'bold',
        marginTop: '3%',
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

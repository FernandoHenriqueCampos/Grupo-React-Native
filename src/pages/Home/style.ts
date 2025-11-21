import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    
    headerContainer: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        zIndex: 1,
    },
    
    contentList: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 120, 
    },

    appTitle: {
        fontSize: 36,
        fontWeight: '900',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    subTitle: {
        fontSize: 16,
        color: '#F0F0F0',
        fontWeight: '500',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    }
});
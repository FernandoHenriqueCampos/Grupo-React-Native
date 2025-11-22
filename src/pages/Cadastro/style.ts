import { StyleSheet, Platform, StatusBar } from 'react-native';

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#CCE6F4',
    },
    safeArea: {
        flex: 1,
        width: '100%',
    },
    keyboardView: {
        flex: 1,
        width: '100%',
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    box: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 25,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#E3F2FD',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#BBDEFB',
        color: '#333',
    },
    inputError: {
        borderColor: '#FF375B',
        borderWidth: 2,
        backgroundColor: '#FFF0F3'
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF8C42',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        shadowColor: "#FF8C42",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkContainer: {
    },
    linkText: {
        color: '#666',
        fontSize: 14,
    },
    linkBold: {
        color: '#2D72D2',
        fontWeight: 'bold',
    }
});

export default styles;
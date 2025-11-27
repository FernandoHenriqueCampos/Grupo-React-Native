import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonMaintenance: {
        width: 50,
        height: 50,
        position: "absolute",
        bottom: 15,
        right: 15,
        zIndex: 99,
        elevation: 6,
        backgroundColor: "#FFFF",
        borderWidth: 2,
        borderColor: "#8408f1ff",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 1.3, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
});

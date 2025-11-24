import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },

    inputWrapper: {
        width: "90%",
        height: 45,
        backgroundColor: "rgba(75, 75, 75, 0.1)",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
    },

    icon: {
        marginRight: 10,
    },

    input: {
        flex: 1,
        height: "100%",
        textAlignVertical: "center",
        textAlign: "left",
        padding: 0,       
        margin: 0,        
        color: "#000",
    },
});

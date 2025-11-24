import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  tituloSecundario: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  paragrafo: {
    marginBottom: 8,
    lineHeight: 20,
  },
  separador: {
    marginVertical: 10,
    textAlign: "center",
  },
  lista: {
    marginBottom: 10,
    lineHeight: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderRadius: 4,
    padding: 2,
  },
  checkboxIcon: {
    fontSize: 18,
    lineHeight: 18,
    color: "#333",
  },
  label: {
    flexShrink: 1,
    fontSize: 14,
  },
  button: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#007BFF",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
  },
  buttonClose: {
    backgroundColor: "#FF9900",
    marginTop: 15,
  },
});

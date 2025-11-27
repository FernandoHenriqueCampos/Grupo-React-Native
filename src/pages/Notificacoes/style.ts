import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6C47FF",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#F8F6FF",
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  textos: {
    marginLeft: 12,
    flex: 1,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },

  cardDescricao: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },

  cardData: {
    fontSize: 12,
    color: "#888",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    margin: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 16,
    gap: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontWeight: "bold",
    color: "#007bff",
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    color: "#666",
    maxHeight: 40,
  },
  button: {
    backgroundColor: "#28a745",
    borderRadius: 4,
    padding: 10,
    marginTop: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#21a9ff",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  infoText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
  },
  linkText: {
    fontSize: 14,
    color: "#21a9ff",
    fontWeight: "bold",
  },
});

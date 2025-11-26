import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15,
    color: "#666",
  },
  listContent: {
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f7",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#0078d4",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    padding: 20,
  },
});

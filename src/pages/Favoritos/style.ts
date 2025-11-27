import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  headerTitle: {
    fontSize: 24,
    marginLeft: 80,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#8a03f8ff",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 15,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
    marginTop: 10,
  },

  title: {
    marginTop: "10%",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});

import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.95,
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 20,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    padding: 5,
    zIndex: 1,
  },
  closeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#999",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  breed: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
    marginBottom: 24,
    textAlign: "center",
  },
  adoptButton: {
    width: "100%",
    backgroundColor: "#FFD358",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  adoptButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4e3b3b",
  },
});

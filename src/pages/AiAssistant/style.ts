import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#8A2BE2",
    letterSpacing: -0.5,
  },
  brandSubtitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  inputWrapper: {
    marginBottom: 20,
    shadowColor: "#8A2BE2",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  input: {
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    padding: 16,
    fontSize: 16,
    color: "#333",
    minHeight: 100,
  },
  button: {
    backgroundColor: "#8A2BE2",
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    shadowColor: "#8A2BE2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  responseArea: {
    flex: 1,
  },
  responseLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  responseScroll: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  responseContent: {
    padding: 20,
  },
  responseText: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
  },
  placeholderText: {
    color: "#CCC",
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 40,
  },
});

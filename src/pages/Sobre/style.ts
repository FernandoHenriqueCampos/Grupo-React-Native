import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },

  card: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 22,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderWidth: 1,
    borderColor: "#E9E4F8",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7A1CC9",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#7A1CC9",
    marginBottom: 8,
    marginTop: 5,
  },

  text: {
    fontSize: 16,
    color: "#4A4A4A",
    lineHeight: 26,
    textAlign: "justify",
    letterSpacing: 0.3,
  },

  footer: {
    marginTop: 25,
    marginBottom: 35,
    backgroundColor: "#7A1CC9",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",

    shadowColor: "#7A1CC9",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 8,
  },

  footerText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },

  footerRow: {
    flexDirection: "row",
    gap: 14,
  },
});

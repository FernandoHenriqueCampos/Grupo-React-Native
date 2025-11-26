import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },

  imageContainer: {
    borderRadius: 200,
    backgroundColor: "#eaeaea",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 15,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },

  userName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
  },

  optionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  optionText: {
    fontSize: 18,
  },
});

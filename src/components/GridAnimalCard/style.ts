import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const spacing = 12;
const paddingTotal = 40;
const cardWidth = (width - paddingTotal - spacing) / 2;

export const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: cardWidth,
    backgroundColor: "#F1F1F1",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  breed: {
    fontSize: 12,
    color: "#777",
  },
});

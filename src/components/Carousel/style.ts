import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    height: 180,
    marginBottom: 10,
    backgroundColor: "transparent",
    marginTop: 30,
    shadowOpacity: 0,
  },
  slide: {
    width: width,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  image: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  inactiveDot: {
    backgroundColor: "#C0C0C0",
    opacity: 0.6,
  },
  activeDot: {
    backgroundColor: "#8A2BE2",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9826C4",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },
  animatedIconContainer: {
    marginTop: 100,
    marginBottom: 10,
  },
  animatedIcon: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 50,
  },
  loadingText: {
    marginTop: 0,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    transform: [{ translateY: -260 }],
  },
  image: {
    transform: [{ translateY: -160 }],
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 50,
  },
});

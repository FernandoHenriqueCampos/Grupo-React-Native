import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  // backgroundImage: {
  //   flex: 1,
  //   width: "100%",
  //   height: "100%",
  // },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 1,
  },

  contentList: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  buttonMaintenance: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 15,
    right: 15,
    zIndex: 99,
    elevation: 6,
    backgroundColor: "#FFFF",
    borderWidth: 2,
    borderColor: "#8408f1ff",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1.3, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

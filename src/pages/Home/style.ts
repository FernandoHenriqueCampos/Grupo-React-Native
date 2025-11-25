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
});

import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 75,
    width: "100%",
    boxShadow: "0px 6px 8px rgba(122, 5, 246, 0.12)",
  },
  iconPaw: {
    marginRight: 8,
  },
  headerImage: {
    height: 70,
    width: 300,
    resizeMode: "contain",
    marginRight: "0.5%",
    marginLeft: "0.5%",
  },
  bellContainer: {
    marginLeft: 15,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

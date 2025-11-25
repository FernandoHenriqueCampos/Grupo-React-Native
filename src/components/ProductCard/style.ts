import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartCardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#007bff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 2,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 10,
  },
  cartDetails: {
    flex: 1,
    justifyContent: "center",
  },
  cartName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  cartPriceUnit: {
    fontSize: 12,
    color: "#666",
  },
  cartSubtotal: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#007bff",
    marginTop: 4,
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  quantityButton: {
    backgroundColor: "#e9ecef",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    minWidth: 20,
    textAlign: "center",
    color: "#333",
  },
});

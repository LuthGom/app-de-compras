import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function SizeButton({ children, bgcolor, color }) {
  return (
    <View style={[styles.container,{ backgroundColor: bgcolor || "#FFF" }]}>
      <Button style={[styles.button, { color: color || "#ddd" }]} title={children}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "#e6e6e6",
    borderWidth: 3,
    marginHorizontal: 10,
  },
  button: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

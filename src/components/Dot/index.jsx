import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function Dot({color}) {
  return <View style={[styles.container, { backgroundColor: {color} }]}></View>;
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").width * 0.05,
    borderRadius: (Dimensions.get("window").width * 0.05) / 2,
    marginHorizontal: "2.5%",
    elevation: 5,
  },
});

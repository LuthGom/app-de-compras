import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";

export default function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.title}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    width: "90%",
    height: 50,
    backgroundColor: "#17181a",
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    color: "white",
  },
});

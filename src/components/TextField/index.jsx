import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function TextField({ label }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.textField} />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "80%",
  },
  textField: {
    width: "100%",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#eee",
  },
  label: {
    margin: 5,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

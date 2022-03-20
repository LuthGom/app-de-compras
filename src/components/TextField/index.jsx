import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

export default function TextField({ label, value, onChange }) {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", justifyContent: "flex-start" }}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <SafeAreaView style={styles.textContainer}>
        <TextInput
          style={styles.textField}
          defaultValue={value}
          onChangeText={onChange}
        />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  textField: {
    width: "80%",
  },
  label: {
    margin: 5,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

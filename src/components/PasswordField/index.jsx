import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function PasswordField({ label, onChange, value }) {
  const [isInVisible, setInvisible] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{ width: "80%", justifyContent: "flex-start" }}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <SafeAreaView style={styles.textContainer}>
        <TextInput
          style={styles.textField}
          secureTextEntry={isInVisible}
          value={value}
          onChangeText={onChange}
        />

        <TouchableOpacity onPress={() => setInvisible(!isInVisible)}>
          {(isInVisible && <Ionicons name="eye" color="#000" size={25} />) || (
            <Ionicons name="eye-off" color="#000" size={25} />
          )}
        </TouchableOpacity>
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

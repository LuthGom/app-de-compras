import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SEU CARRINHO! {" "}
        <Feather
          name="shopping-cart"
          size={25}
          color="black"
          style={{ textAlign: "center", margin: 10 }}
        />
        ❤
      </Text>
      <ScrollView></ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    textAlign: "center",
  },
});

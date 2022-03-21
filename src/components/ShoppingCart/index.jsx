import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ShoppingCart() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => navigation.navigate("Cart")}
      >
        <Feather
          name="shopping-cart"
          size={30}
          color="black"
          style={{ textAlign: "center", margin: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

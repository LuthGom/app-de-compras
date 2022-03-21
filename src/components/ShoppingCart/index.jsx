import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ShoppingCart() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{ width: "100%", backgroundColor: "#1C1C1C" }}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          0
        </Text>
        <Feather
          name="shopping-cart"
          size={30}
          color="white"
          style={{ textAlign: "center", margin: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

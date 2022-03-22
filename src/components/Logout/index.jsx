import { View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function index() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
      style={{ width: "100%" }}
      onPress={() => navigation.navigate("Start")}
      >
        <AntDesign
         name="logout"
         size={30}
         color="black"
         style={{ textAlign: "center", margin: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

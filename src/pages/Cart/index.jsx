import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logout from "../../components/Logout";
import CartItem from "../../components/CartItem";
export default function Cart({ route }) {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const values = await AsyncStorage.multiGet(keys);

      if (values.length > -1) {
        const result = [];
        for (let j = 0; j < values.length; j++) {
          result.push(JSON.parse(values[j][1]));
        }
        setData([...result]);
        console.log("data", data);
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
              SEU CARRINHO!{" "}
              <Feather
                name="shopping-cart"
                size={25}
                color="black"
                style={{ textAlign: "center", margin: 10 }}
              />
              ❤
            </Text>
          </View>
          {data.map((item) => {
            console.log(item);
            if (item !== "undefined") {
              return (
                <CartItem item={item}/>
              );
            }
          })}
        </View>
      </ScrollView>
      <View style={{ marginVertical: 200 }}>
        <Logout />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto_500Medium",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    borderWidth: 3,
    margin: 5,
    color: "#000",
  },
  
});

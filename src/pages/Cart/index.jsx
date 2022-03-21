import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
export default function Cart({img, titulo, preco}) {

  const [cart, setcart] = useState([]);
  return (
    <View style={styles.container}>
      <ScrollView>
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
      <Image source={cart.url_imagens} style={{height: 120, width: 120}}/>
      <Text>Produto:{cart.subtitulo}</Text>
      <Text>preço:{cart.preco}</Text>

      </ScrollView>
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

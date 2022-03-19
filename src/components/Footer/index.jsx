import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Produtos from "../Produtos";
export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={require("../../assets/cinto.jpg")}
              preco="R$ 35,00"
              titulo="Cinto"
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={require("../../assets/oculos-de-sol.jpg")}
              preco="R$ 70,00"
              titulo="Óculos de Sol"
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={require("../../assets/sapato-preto.jpg")}
              preco="R$ 140,00"
              titulo="Sapato Preto"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Roboto_500Medium",
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});

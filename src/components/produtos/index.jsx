import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Produtos({ img, titulo, preco, onClick }) {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }
    return `${desc.substring(0, 25)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image source={img} style={styles.produtosImg} />
      <Text style={styles.produtosTxt}>{filterDesc(titulo)}</Text>
      <View opacity={0.4}>
        <Text style={styles.produtosTxt}>{preco}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  produtosImg: {
    width: 175,
    height: 175,
  },
  produtosTxt: {
    fontSize: 16,
  },
});

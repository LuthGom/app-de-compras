import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
export default function Produtos({
  img,
  titulo,
  subtitulo,
  preco,
  onClick,
}) {
  function filterDesc(desc) {
    if (desc.length < 15) {
      return desc;
    }
    return `${desc.substring(0, 18)}...`;
  }

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onClick}>
        <Image
          source={{uri: img}}
          style={styles.produtosImg}
        />
        <Text style={styles.produtosTxt}>{filterDesc(titulo)}</Text>
        <Text style={styles.produtosTxt}>{subtitulo}</Text>

        <View opacity={0.4}>
          <Text style={styles.produtosTxt}>{preco}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
  },
  produtosImg: {
    width: 120,
    height: 120,
  },
  produtosTxt: {
    fontSize: 16,
  },
});

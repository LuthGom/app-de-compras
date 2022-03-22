import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import React, { useState } from "react";

export default function CartItem({ item }) {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <ScrollView>
        <View style={styles.produtoContainer}>
          <Image source={{ uri: item.imagem }} style={styles.image} />
          <Text style={styles.subtitle}>{item.titulo}</Text>
          <Text style={styles.preco}>R${item.preco},00</Text>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={styles.increment}
            onPress={() => setCounter(counter + 1)}
          >
            +
          </Text>
        </TouchableOpacity>

        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity>
          <Text
            style={styles.increment}
            onPress={() => setCounter(counter - 1)}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  produtoContainer: {
    borderWidth: 1,
    borderColor: "#000",
    margin: 15,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "#000",
    margin: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto_500Medium",
  },
  preco: {
    fontFamily: "Roboto_500Medium",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    margin: 5,
  },
  increment: {
    fontSize: 25,
    fontWeight: "bold",
    borderWidth: 1,
    padding: 5,
  },
  counter: {
    margin: 10,
    fontSize: 25,
    backgroundColor: "#000",
    color: "#fff",
    paddingHorizontal: 5,
  },
});

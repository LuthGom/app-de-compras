import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton";
import BuyButton from "../../components/Button";
import Footer from "../../components/Footer";
import { useCart } from "../../context/Cart";
import { useNavigation } from "@react-navigation/native";
import ShoppingCart from "../../components/ShoppingCart";
export default function Detail({ route, item }) {
  const { add } = useCart();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={{ uri: route.params?.url_imagens }}
          style={styles.image}
        />
        <View>
          <View>
            <Text style={[styles.title, { fontSize: 24 }]}>R$ 100,00</Text>
          </View>
          <View opacity={0.4}>
            <Text style={[styles.title, { fontSize: 30 }]}>
              {route.params?.subtitulo}{" "}
            </Text>
          </View>
          <View style={styles.dotContainer}>
            <Dot color="orange" />
            <Dot color="lightgreen" />
            <Dot color="black" />
            <Dot color="grey" />
          </View>
          {route.params?.subtitulo === "Óculos Escuros" ? null : (
            <View style={{ flexDirection: "row", width: "100%" }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SizeButton children="44" bgcolor="#cde" color="#def" />
                <SizeButton children="43" />
                <SizeButton children="42" />
                <SizeButton children="41" />
                <SizeButton children="40" />
              </ScrollView>
            </View>
          )}

          <View style={styles.textContent}>
            <Text style={styles.textTitle}></Text>
            <Text style={styles.textContent}>{route.params?.descricao}</Text>
          </View>
          <BuyButton title="COMPRAR" />
          <TouchableOpacity onPress={() => add(item)}>
            <BuyButton title="ADD AO CARRINHO" />
          </TouchableOpacity>

          <View style={styles.line}></View>

          <Footer />
        </View>
      </ScrollView>
      <ShoppingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    paddingHorizontal: "2%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "7%",
  },
  textContent: {
    fontSize: 20,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: "#DDD",
    marginVertical: "2%",
  },
});

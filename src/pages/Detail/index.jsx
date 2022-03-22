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
import { useNavigation } from "@react-navigation/native";
import ShoppingCart from "../../components/ShoppingCart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logout from "../../components/Logout";
export default function Detail({ route }) {
  const navigation = useNavigation();
  const propriedades = {
    imagem: route.params?.url_imagens,
    titulo: route.params?.subtitulo,
    preco: route.params?.preco,
    id: route.params?.id,
  };
  async function handleASyncStorage({route}) {
    try {
      await AsyncStorage.setItem(`${propriedades.id}`, JSON.stringify(propriedades));
      navigation.navigate("Cart");
    }catch(erro) {
      console.log(erro);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: propriedades.imagem }} style={styles.image} />
        <View>
          <View>
            <Text style={[styles.title, { fontSize: 24 }]}>
              R$
              {route.params?.preco},00
            </Text>
          </View>
          <View opacity={0.4}>
            <Text style={[styles.title, { fontSize: 30 }]}>
              {propriedades.titulo}{" "}
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
            <Text style={styles.textContent}>{route.params?.descricao}</Text>
          </View>
          <BuyButton title="COMPRAR" />
          <TouchableOpacity>
            <BuyButton title="ADD AO CARRINHO" onClick={handleASyncStorage} />
          </TouchableOpacity>

          <View style={styles.line}></View>

          <Footer />
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
        <ShoppingCart />
        <Logout />
      </View>
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

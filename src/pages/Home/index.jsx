import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Produtos from "../../components/Produtos";
import {useNavigation} from "@react-navigation/native"
export default function Home() {


  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>-</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}></View>

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={require("../../assets/camisa-azul-listra.jpg")}
            preco={"R$100,00"}
            titulo="Camisa Azul Listrada"
            onClick={() => navigation.navigate('Detail')}
          />
          <Produtos
            img={require("../../assets/bermuda-azul.jpg")}
            preco={"R$100,00"}
            titulo="Bermuda Azul"
            onClick={() => navigation.navigate('Detail')}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={require("../../assets/camisa-polo.jpg")}
            preco={"R$80,00"}
            titulo="Camisa Pólo"
            onClick={() => navigation.navigate('Detail')}
          />
          <Produtos
            img={require("../../assets/chapeu-retro.jpg")}
            preco={"R$65,00"}
            titulo="chapeu-retro"
            onClick={() => navigation.navigate('Detail')}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={require("../../assets/cinto.jpg")}
            preco={"R$35,00"}
            titulo="cinto"
            onClick={() => navigation.navigate('Detail')}
          />
          <Produtos
            img={require("../../assets/oculos-de-sol.jpg")}
            preco={"R$100,00"}
            titulo="oculos-de-sol"
            onClick={() => navigation.navigate('Detail')}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={require("../../assets/sapato-preto.jpg")}
            preco={"R$100,00"}
            titulo="sapato-preto"
            onClick={() => navigation.navigate('Detail')}
          />
          <Produtos
            img={require("../../assets/terno.jpg")}
            preco={"R$100,00"}
            titulo="terno"
            onClick={() => navigation.navigate('Detail')}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Roboto_500Medium",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});

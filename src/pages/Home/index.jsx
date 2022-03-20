import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Detail from "../Detail";
import Api from "../../services/Api";
const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const get = () => {
    fetch(Api + "/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        const filter = data.Produtos;
        setProdutos({ ...filter });
        setLoading(false);
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };
  useEffect(() => {
    get();
  }, []);
  if (loading === true) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          // source={require("../../../assets/icon.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>MODA</Text>

          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINA</Text>
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
            img={produtos[0].url_imagens}
            preco={"R$100,00"}
            titulo={produtos[0].titulo}
            subtitulo={produtos[0].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
          <Produtos
            img={produtos[1].url_imagens}
            preco={"R$100,00"}
            titulo={produtos[1].titulo}
            subtitulo={produtos[1].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={produtos[2].url_imagens}
            preco={"R$80,00"}
            titulo={produtos[2].titulo}
            subtitulo={produtos[2].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
          <Produtos
            img={produtos[3].url_imagens}
            preco={"R$65,00"}
            titulo={produtos[3].titulo}
            subtitulo={produtos[3].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={produtos[4].url_imagens}
            preco={"R$35,00"}
            titulo={produtos[4].titulo}
            subtitulo={produtos[4].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
          <Produtos
            img={produtos[5].url_imagens}
            preco={"R$100,00"}
            titulo={produtos[5].titulo}
            subtitulo={produtos[5].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Produtos
            img={produtos[6].url_imagens}
            preco={"R$100,00"}
            titulo={produtos[6].titulo}
            subtitulo={produtos[6].subtitulo}
            onClick={() => navigation.navigate("Detail")}
          />
          <Produtos
            img={produtos[7].url_imagens}
            preco={"R$100,00"}
            titulo={produtos[7].titulo}
            subtitulo={produtos[7].subtitulo}
            onClick={() => navigation.navigate("Detail")}
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
    textAlign: "center",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});

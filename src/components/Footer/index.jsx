import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Produtos from "../Produtos";
import Api from "../../services/Api";
import { useNavigation } from "@react-navigation/native";
export default function Footer() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
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
    <View>
      <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={produtos[3].url_imagens}
              preco="R$ 35,00"
              titulo={produtos[3].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[3].subtitulo,
                  descricao: produtos[3].descricao,
                  url_imagens: produtos[3].url_imagens,
                })
              }
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={produtos[4].url_imagens}
              preco="R$ 135,00"
              titulo={produtos[4].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[4].subtitulo,
                  descricao: produtos[4].descricao,
                  url_imagens: produtos[4].url_imagens,
                })
              }
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={produtos[5].url_imagens}
              preco="R$ 140,00"
              titulo={produtos[5].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[5].subtitulo,
                  descricao: produtos[5].descricao,
                  url_imagens: produtos[5].url_imagens,
                })
              }
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Produtos
              img={produtos[7].url_imagens}
              preco={"R$100,00"}
              titulo={produtos[7].titulo}
              subtitulo={produtos[7].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[7].subtitulo,
                  descricao: produtos[7].descricao,
                  url_imagens: produtos[7].url_imagens,
                })
              }
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

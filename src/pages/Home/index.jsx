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
import Api from "../../services/Api";
import ShoppingCart from "../../components/ShoppingCart";
import Logout from "../../components/Logout";
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
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/11/28/11/26/sale-1067126_960_720.jpg",
          }}
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
          <TouchableOpacity onPress={() => add(produtos[0].titulo)}>
            <Produtos
              img={produtos[0].url_imagens}
              preco={"R$100,00"}
              titulo={produtos[0].titulo}
              subtitulo={produtos[0].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[0].subtitulo,
                  descricao: produtos[0].descricao,
                  url_imagens: produtos[0].url_imagens,
                  preco: 100,
                  id: produtos[0].id,
                })
              }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Produtos
              img={produtos[1].url_imagens}
              preco={"R$100,00"}
              titulo={produtos[1].titulo}
              subtitulo={produtos[1].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[1].subtitulo,
                  descricao: produtos[1].descricao,
                  url_imagens: produtos[1].url_imagens,
                  preco: 100,
                  id: produtos[1].id,
                })
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => add(produtos[2])}>
            <Produtos
              img={produtos[2].url_imagens}
              preco={"R$80,00"}
              titulo={produtos[2].titulo}
              subtitulo={produtos[2].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[2].subtitulo,
                  descricao: produtos[2].descricao,
                  url_imagens: produtos[2].url_imagens,
                  preco: 80,
                  id: produtos[2].id,
                })
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => add(produtos[3])}>
            <Produtos
              img={produtos[3].url_imagens}
              preco={"R$65,00"}
              titulo={produtos[3].titulo}
              subtitulo={produtos[3].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[3].subtitulo,
                  descricao: produtos[3].descricao,
                  url_imagens: produtos[3].url_imagens,
                  preco: 65,
                  id: produtos[3].id,
                })
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => add(produtos[4])}>
            <Produtos
              img={produtos[4].url_imagens}
              preco={"R$135,00"}
              titulo={produtos[4].titulo}
              subtitulo={produtos[4].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[4].subtitulo,
                  descricao: produtos[4].descricao,
                  url_imagens: produtos[4].url_imagens,
                  preco: 135,
                  id: produtos[4].id,
                })
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => add(produtos[5])}>
            <Produtos
              img={produtos[5].url_imagens}
              preco={"R$140,00"}
              titulo={produtos[5].titulo}
              subtitulo={produtos[5].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[5].subtitulo,
                  descricao: produtos[5].descricao,
                  url_imagens: produtos[5].url_imagens,
                  preco: 140,
                  id: produtos[5].id,
                })
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => add(produtos[6])}>
            <Produtos
              img={produtos[6].url_imagens}
              preco={"R$100,00"}
              titulo={produtos[6].titulo}
              subtitulo={produtos[6].subtitulo}
              onClick={() =>
                navigation.navigate("Detail", {
                  subtitulo: produtos[6].subtitulo,
                  descricao: produtos[6].descricao,
                  url_imagens: produtos[6].url_imagens,
                  preco: 100,
                  id: produtos[6].id,
                })
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => add(produtos[7])}>
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
                  preco: 100,
                  id: produtos[7].id,
                })
              }
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 100,
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

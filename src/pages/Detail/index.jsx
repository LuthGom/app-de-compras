import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Dot from "../../components/Dot";
import SizeButton from "../../components/SizeButton";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Detail({ navigation }) {
  // navigation.setOptions({
  //   title: "Camisa Azul Listrada",
  // });
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/detail.png")} style={styles.image} />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$ 100,00</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Camisa Azul Listrada
          </Text>
        </View>
        <View style={styles.dotContainer}>
          <Dot color="orange" />
          <Dot color="lightgreen" />
          <Dot color="black" />
          <Dot color="grey" />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton children="40" bgcolor="#cde" color="#def" />
            <SizeButton children="39" />
            <SizeButton children="38" />
            <SizeButton children="37" />
            <SizeButton children="36" />
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Camisa Azul Listrada</Text>
          <Text style={styles.textContent}>
            Camisa de manga até média, de um tom de azul-água com listras
            escuras na sua vertical.
          </Text>
          <Text style={styles.textContent}>- Categoria: Amortecimento</Text>
          <Text style={styles.textContent}>- Material: Mesh</Text>
        </View>

        <Button />

        <View style={styles.line}></View>

        <Footer />
      </View>
    </ScrollView>
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
    fontSize: 16,
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

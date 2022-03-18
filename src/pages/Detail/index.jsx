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

export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Camisa Azul Listrada",
  });
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
    marginVertical: '7%'
  },
});

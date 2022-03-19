import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import TextField from "../../components/TextField";
import { useNavigation } from "@react-navigation/native";

export default function Login() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <View style={styles.containerAuxiliar}>
        <Text style={styles.title}>LOGIN</Text>
        <TextField label="Email" />
        <TextField label="Senha" />
      </View>
      <TouchableOpacity style={{ width: "80%" }}>
        <Button
        title="LOGIN"
        color="#aaa"
        onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202020",
    borderWidth: 5,
  },
  containerAuxiliar: {
    backgroundColor: "#eee",
    height: "50%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
  },
  logo: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

import React, { useState } from "react";
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
import PasswordField from "../../components/PasswordField";
import Api from "../../services/Api";

export default function Login() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState({ email: "", senha: "" });
  const post = () => {
    fetch(Api + "/usuario/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        navigation.navigate('Home')
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  function handleLogin() {
    setLogin({ email: input, senha: password });
    post();
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <View style={styles.containerAuxiliar}>
        <Text style={styles.title}>LOGIN</Text>
        <TextField
          label="email"
          value={input}
          onChange={(texto) => setInput(texto)}
        />
        <PasswordField
          label="senha"
          value={password}
          onChange={(texto) => setPassword(texto)}
        />
      </View>
      <TouchableOpacity style={{ width: "80%" }}>
        <Button title="LOGIN" color="#aaa" onPress={handleLogin} />
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

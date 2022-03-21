import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TextField from "../../components/TextField";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import PasswordField from "../../components/PasswordField";
import Api from "../../services/Api";
export default function SignUp() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [complemento, setComplemento] = useState("");
  const [senha, setSenha] = useState("");

  const [cadastro, setCadastro] = useState({
    nome: "",
    apelido: "",
    email: "",
    cpf: "",
    telefone: "",
    endereco: "",
    cep: "",
    cidade: "",
    uf: "",
    complemento: "",
    senha: "",
  });
  const post = () => {
    fetch(Api + "/usuario", {
      method: "POST",
      body: JSON.stringify(cadastro),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((data) => {
        navigation.navigate("Home");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  function handleSignUp() {
    setCadastro({
      nome: nome,
      apelido: apelido,
      email: email,
      cpf: cpf,
      telefone: telefone,
      endereco: endereco,
      cep: cep,
      cidade: cidade,
      uf: uf,
      complemento: complemento,
      senha: senha,
    });
    if (cadastro.nome !== "") {
      post();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP FOR FREE</Text>
      <ScrollView style={{ width: "100%" }}>
        <TextField
          label={<Text style={{ color: "#FFF" }}>Nome</Text>}
          value={nome}
          onChange={(texto) => setNome(texto)}
        />
        <TextField
          label={
            <Text style={{ color: "#FFF" }}>
              Apelido(Como gstaria de ser chamado?)
            </Text>
          }
          value={apelido}
          onChange={(texto) => setApelido(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Email</Text>}
          value={email}
          onChange={(texto) => setEmail(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Cpf</Text>}
          value={cpf}
          onChange={(texto) => setCpf(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Celular</Text>}
          value={telefone}
          onChange={(texto) => setTelefone(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Endereço</Text>}
          value={endereco}
          onChange={(texto) => setEndereco(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>CEP</Text>}
          value={cep}
          onChange={(texto) => setCep(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Cidade</Text>}
          value={cidade}
          onChange={(texto) => setCidade(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>UF</Text>}
          value={uf}
          onChange={(texto) => setUf(texto)}
        />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Complemento</Text>}
          value={complemento}
          onChange={(texto) => setComplemento(texto)}
        />
        <PasswordField
          label={<Text style={{ color: "#FFF" }}>Senha</Text>}
          value={senha}
          onChange={(texto) => setSenha(texto)}
        />
        <PasswordField
          label={<Text style={{ color: "#FFF" }}>Escreva a senha de novo</Text>}
        />

        <View style={styles.checkContainer}>
          <Checkbox color="blue" value={isChecked} onValueChange={setChecked} />
          <Text style={{ color: "#fff", marginLeft: 5 }}>
            I agree to{" "}
            <Text style={{ color: "#B29722" }}>Terms & Conditions</Text>.
          </Text>
        </View>
        {(isChecked && (
          <TouchableOpacity style={styles.btnContainer}>
            <Button
              title="SIGN UP"
              color="#B29722"
              disabled={false}
              onPress={handleSignUp}
            />
          </TouchableOpacity>
        )) || (
          <TouchableOpacity style={styles.btnContainer}>
            <Button title="LOGIN" color="#000" disabled={true} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#202020",
    borderWidth: 5,
  },

  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    color: "#fff",
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 40,
    marginVertical: 20,
  },

  btnContainer: {
    marginVertical: 15,
    marginLeft: 40,
    marginRight: 40,
  },
});

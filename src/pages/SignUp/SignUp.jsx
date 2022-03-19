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
export default function SignUp() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP FOR FREE</Text>
      <ScrollView style={{ width: "100%" }}>
        <TextField label={<Text style={{ color: "#FFF" }}>Nome</Text>} />
        <TextField
          label={
            <Text style={{ color: "#FFF" }}>
              Apelido(Como gstaria de ser chamado?)
            </Text>
          }
        />
        <TextField label={<Text style={{ color: "#FFF" }}>Email</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>Cpf</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>Celular</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>Endereço</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>CEP</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>Cidade</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>UF</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>Complemento</Text>} />
        <TextField label={<Text style={{ color: "#FFF" }}>Senha</Text>} />
        <TextField
          label={<Text style={{ color: "#FFF" }}>Repitir Senha</Text>}
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
              title="LOGIN"
              color="#B29722"
              disabled={false}
              onPress={() => navigation.navigate("Home")}
            />
          </TouchableOpacity>
        )) || (
          <TouchableOpacity style={styles.btnContainer} >
            <Button
              title="LOGIN"
              color="#000"
              disabled={true}
              onPress={() => navigation.navigate("Home")}
            />
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

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require("../../assets/logo.png")} style={styles.img} />
        <Text style={styles.text}>Se vestir bem, é vestir o que gosta!</Text>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity style={styles.btnContainer}>
          <Button
            title="Login"
            color="#ccc"
            onPress={() => navigation.navigate("Login")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer}>
          <Button
            title="Sign Up"
            color="#B29722"
            onPress={() => navigation.navigate("SignUp")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImg: {
    height: "80%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    borderColor: "white",
    borderWidth: 1,
  },
  text: {
    color: "white",
    marginVertical: 10,
  },
  btnContainer: {
    justifyContent: "center",
    marginBottom: 10,
    width: "80%",
    color: "black",
  },
});

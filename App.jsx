import { StatusBar } from "expo-status-bar";
import Routes from "./src/router";
import { useFonts, Roboto_500Medium} from "@expo-google-fonts/roboto";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  })

  if(!fontsLoaded) {
    return null
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'orange',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

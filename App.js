
import { StyleSheet, Text, View } from "react-native";
import EXView from "./components/EXView";

export default function App() {
  return (
    <View style={styles.container}>
        <EXView/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


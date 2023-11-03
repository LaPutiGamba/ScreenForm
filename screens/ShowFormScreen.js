import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ShowFormScreen({ route, navigation }) {
  const name = route.params.name;
  const surname = route.params.surname;
  const age = route.params.age;
  const termsAndConditions = route.params.termsAndConditions;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.formTitle}>Name: {name} </Text>
        <Text style={styles.formTitle}>Surname: {surname} </Text>
        <Text style={styles.formTitle}>Age: {age} </Text>
        <Text style={styles.formTitle}>
          Terms and conditions: {termsAndConditions ? "Accepted" : "Denied"}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    margin: 10,
  },
  formTitle: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: "purple",
  },
});

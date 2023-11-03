import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function FormScreen({ navigation }) {
  function sendInformation() {
    if (name === "" || surname === "" || age === "") {
      return;
    }

    navigation.navigate("ShowFormScreen", {
      name: name,
      surname: surname,
      age: age,
      termsAndConditions: termsAndConditions,
    });
  }

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputs}
          placeholder="Name"
          onChangeText={setName}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Surname"
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.textInputs}
          placeholder="Age"
          keyboardType={"number-pad"}
          onChangeText={setAge}
        />
        <BouncyCheckbox
          size={25}
          fillColor="#a534a5"
          unfillColor="#FFFFFF"
          text="Accept terms and conditions"
          textStyle={{ color: "#a534a5" }}
          iconStyle={{ borderColor: "#a534a5" }}
          innerIconStyle={{ borderWidth: 3 }}
          style={styles.checkbox}
          onPress={(isChecked) => {
            setTermsAndConditions(isChecked);
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Pressable onPress={sendInformation} style={styles.sendButton}>
            <Text style={styles.textButton}>Send data</Text>
          </Pressable>
        </View>
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
  textInputs: {
    flex: 7,
    borderWidth: 1,
    borderRadius: 10,
  },
  sendButton: {
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 30,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    margin: 2,
    color: "#a534a5",
  },
});

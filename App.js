import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormScreen from "./screens/FormScreen";
import ShowFormScreen from "./screens/ShowFormScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#000000" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#c2c2c2" },
            }}
          >
            <Stack.Screen
              name="FormScreen"
              options={{ title: "Fill the form with your data" }}
              component={FormScreen}
            />
            <Stack.Screen
              name="ShowFormScreen"
              options={{ title: "Take a look at your data" }}
              component={ShowFormScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});

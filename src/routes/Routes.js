import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Cuisine from "../screens /Cuisine";
import Dishes from "../screens /Dishes";
import Splash from "../screens /Splash";

const Stack = createStackNavigator();

export function SimpleStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cuisine" component={Cuisine} />
        <Stack.Screen
          name="Recipies"
          component={Dishes}
          options={{ title: "Recipies" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

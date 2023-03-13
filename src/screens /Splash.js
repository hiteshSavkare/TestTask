import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-paper';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateToDisheshIfCuisineType();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const navigateToDisheshIfCuisineType = () => {
    AsyncStorage.getItem("cuisineType").then((item) => {
      if (item) {
        navigation.replace("Recipies", { cuisineType: item });
      } else {
        navigation.replace("Cuisine");
      }
    });
  };

  return (
    <View style={styles.splashScreen}>
      <Text variant="headlineMedium">Splash Screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


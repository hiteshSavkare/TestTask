import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import { getRecipiesRequest } from "../redux/actions/foodActions";
import * as selectors from "../redux/selectors/getFoodStates";

const Dishes = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const recipies = useSelector(selectors.getRecipies);
  const isLoading = useSelector(selectors.getIsLoading);
  const { cuisineType } = route?.params;

  useEffect(() => {
    // api call to get recipies of cuisineType
    dispatch(getRecipiesRequest(cuisineType));
  }, [cuisineType]);

  const gotoCuisine = () => {
    navigation.navigate("Cuisine");
  };
  return (
    <View>
      <Button
        style={{ marginBottom: 8, borderRadius: 8 }}
        mode="contained"
        onPress={gotoCuisine}
      >
        Goto Cuisine
      </Button>
      {isLoading ? <ActivityIndicator size="large" /> : null}
      <FlatList
        data={recipies}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(item) => item.id}
        style={{marginBottom: 50}}
      />
    </View>
  );
};

export default Dishes;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { FlatList, View } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import CuisineItem from "../components/CuisineItem";
import * as selectors from "../redux/selectors/getFoodStates";

const Cuisine = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const cuisines = useSelector(selectors.getCuisines);

  //set the cuisineType in local storage
  const navigateToDishes = (type) => {
    AsyncStorage.setItem("cuisineType", type, () => {
      navigation.navigate("Recipies", { cuisineType: type });
    });
  };

  //Filter the Cuisine types
  const onSearch = (text) => {
    const data = cuisines.filter((cuisine) =>
      cuisine.cuisineLabel.toLowerCase().includes(text.toLowerCase())
    );
    setSearchQuery(text);
    if (text) {
      setFilteredData(data);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onSearch}
        value={searchQuery}
        elevation={3}
      />
      <FlatList
        data={searchQuery ? filteredData : cuisines}
        renderItem={({ item }) => (
          <CuisineItem item={item} onCardPress={navigateToDishes} />
        )}
        style={{marginBottom: 50}}
      />
      {searchQuery && !filteredData.length ? <Text style={{alignSelf: 'center'}} variant="headlineSmall">Match not found</Text> : null}
    </View>
  );
};

export default Cuisine;

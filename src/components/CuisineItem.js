import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const CuisineItem = ({ onCardPress, item }) => {
  return (
    <Card
      mode="elevated"
      key={item.cuisineLabel}
      style={{ margin: 8 }}
      onPress={() => onCardPress(item.cuisineLabel)}
    >
      <Card.Title titleStyle={styles.titleStyle} title={item.cuisineLabel} />
      <Card.Actions>
        <Button style={{ marginBottom: 8, borderRadius: 8 }} mode="contained">
          Explore
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default CuisineItem;

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 4,
    fontSize: 20,
  },
});

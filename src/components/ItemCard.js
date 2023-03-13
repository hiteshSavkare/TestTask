import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

const ItemCard = ({ onCardPress, item }) => {
  return (
    <Card
      mode="elevated"
      key={item?.recipe?.label}
      style={{ margin: 8 }}
      onPress={onCardPress}
    >
      <Card.Cover source={{ uri: item?.recipe?.image }} />
      <Card.Title titleStyle={styles.titleStyle} title={item?.recipe?.label} />
    </Card>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 4,
    fontSize: 20,
  },
});

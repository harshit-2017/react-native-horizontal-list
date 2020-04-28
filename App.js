/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Item from "./Item";
const data = [
  {
    id: 1,
    category: "Super Hero",
    title: "captain america",
    image: require("./assets/images/myimg.jpeg"),
    rating: 3.5
  },
  {
    id: 2,
    category: "Super Hero",
    title: "captain america",
    image: { uri: "https://placeimg.com/200/200/any" },
    rating: 3.5
  },
  {
    id: 3,
    category: "Super Hero",
    title: "captain america",
    image: { uri: "https://placeimg.com/200/200/any" },
    rating: 3.5
  },
  {
    id: 4,
    category: "Super Hero",
    title: "captain america",
    image: { uri: "https://placeimg.com/200/200/any" },
    rating: 3.5
  },
  {
    id: 5,
    category: "Super Hero",
    title:
      "captain americacaptain americacaptain americacaptain americacaptain americacaptain america",
    image: { uri: "https://placeimg.com/200/200/any" },
    rating: 3.5
  }
];
const App = props => {
  const { list } = props;

  const onSelect = url => {
    alert(url);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            category={item.category}
            title={item.title}
            image={item.image}
            rating={item.rating}
            onSelect={onSelect}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#FFF"
  }
});

export default App;

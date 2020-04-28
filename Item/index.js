import React from "react";
import { Image, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";
import { RFValue } from "react-native-responsive-fontsize";

const Item = props => {
  const { category, title, image, rating, onSelect } = props;
  console.log(props);
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={() => {
          onSelect(image ? (image.uri ? image.uri : image) : "no url heres");
        }}
      >
        <Image style={styles.imageStyle} source={image} />
      </TouchableOpacity>
      <Text numberOfLines={2} style={styles.categoryStyle}>
        {category}
      </Text>
      <Rating
        readonly
        startingValue={rating ? rating : 0}
        imageSize={20}
        style={styles.ratingStyle}
      />
      <Text
        onPress={() => {
          onSelect(image ? (image.uri ? image.uri : image) : "no url heres");
        }}
        numberOfLines={2}
        style={styles.titleStyle}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: { marginLeft: RFValue(15), width: RFValue(150) },
  imageStyle: {
    height: RFValue(150),
    width: RFValue(150),
    borderRadius: RFValue(15)
  },
  categoryStyle: {
    marginTop: RFValue(5),
    fontSize: RFValue(9)
  },
  ratingStyle: { alignSelf: "flex-start", paddingVertical: RFValue(5) },
  titleStyle: { fontSize: RFValue(18) }
});

export default Item;

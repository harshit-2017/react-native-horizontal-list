import React, { useState } from "react";
import {
  Image,
  Switch,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HorizontalList from "react-native-horizontal-list";
import { data, colors } from "../../../utils/Constants";
import HeaderComponent from "../../headerComponent";
import Icons from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

const CategoryItem = props => {
  const { item } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.image} style={styles.image_style} />
      <LinearGradient
        style={styles.gradientStyle}
        colors={["rgba(52, 52, 52, 0.8)", "rgba(52, 52, 52, 0.8)"]}
        angle={90}
        useAngle={true}
      >
        <Text style={styles.textStyle}>{item.title}</Text>
      </LinearGradient>
    </View>
  );
};
export default React.memo(CategoryItem);

var styles = StyleSheet.create({
  image_style: {
    borderRadius: RFValue(15),
    overflow: "hidden",
    flex: 1
  },
  container: {
    height: RFValue(80),
    width: RFValue(95),
    marginLeft: RFValue(15)
  },
  gradientStyle: {
    borderRadius: RFValue(15),
    position: "absolute",
    justifyContent: "center",
    height: RFValue(80),
    width: RFValue(95)
  },
  textStyle: {
    color: colors.White,
    alignSelf: "center"
  }
});

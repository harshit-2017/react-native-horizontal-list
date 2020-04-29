import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HorizontalList from "react-native-horizontal-list";
import { data, colors } from "../../utils/Constants";
import LinearGradient from "react-native-linear-gradient";
import Icons from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");
const HeaderComponent = props => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFBC00", "#f5be05"]}
        style={styles.linearGradient}
        angle={90}
        useAngle={true}
      >
        <Icons
          style={styles.image_style}
          name="bars"
          color={colors.White}
          size={RFValue(24)}
        />
        <Image
          source={{
            uri: "https://placeimg.com/30/30/people?something=" + Math.random()
          }}
          style={styles.profile}
        />
      </LinearGradient>
      <View style={styles.input_text}>
        <Icons
          name="search"
          style={styles.search_icon}
          color={colors.Grey}
          size={RFValue(24)}
        />
        <TextInput
          placeholder={"Search movie title..."}
          style={styles.inputStyle}
        ></TextInput>
      </View>
    </View>
  );
};
export default React.memo(HeaderComponent);

// Later on in your styles..
var styles = StyleSheet.create({
  search_icon: { marginLeft: RFValue(25), alignSelf: "center" },
  inputStyle: { flex: 1, marginLeft: RFValue(10) },
  linearGradient: {
    flex: 1,
    borderBottomStartRadius: RFValue(100),
    borderBottomEndRadius: RFValue(100),
    marginHorizontal: RFValue(-70),
    alignItems: "center",
    flexDirection: "row"
  },
  image_style: {
    flex: 1,
    borderBottomStartRadius: RFValue(100),
    borderBottomEndRadius: RFValue(100),
    marginHorizontal: RFValue(85),
    marginBottom: RFValue(10)
  },
  profile: {
    height: RFValue(30),
    width: RFValue(30),
    position: "absolute",
    marginRight: RFValue(85),
    borderRadius: RFValue(15),
    right: 0
  },
  input_text: {
    borderRadius: RFValue(25),
    height: RFValue(50),
    top: RFValue(70),
    position: "absolute",
    backgroundColor: colors.White,
    width: width - RFValue(30),
    alignSelf: "center",
    flexDirection: "row",
    elevation: 1,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.1
  },
  container: {
    height: RFValue(100),
    borderBottomStartRadius: RFValue(100),
    borderBottomEndRadius: RFValue(100)
  }
});

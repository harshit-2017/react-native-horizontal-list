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
import Svg, { Path } from "react-native-svg";

const FooterComponent = props => {
  return (
    <View style={styles.container}>
      <Svg
        height={RFValue(125)}
        width="100%"
        fill="white"
        viewBox="0 0 423 114"
        preserveAspectRatio="none"
      >
        <Path
          d="M-457.686,225.5a16.113,16.113,0,0,0-15.451,11.861A43.518,43.518,0,0,1-515,269a43.518,43.518,0,0,1-41.863-31.639A16.113,16.113,0,0,0-572.314,225.5H-710.5a16,16,0,0,0-16,16v78h424v-78a16,16,0,0,0-16-16Z"
          transform="translate(726.5 -205.5)"
        />
      </Svg>
      <View
        style={{
          width: "100%",
          marginTop: RFValue(20),
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Icons
          style={styles.image_style}
          name="home"
          color={colors.Yellow}
          size={RFValue(24)}
        />
        <Icons
          style={styles.image_style}
          name="ticket"
          color={colors.Yellow}
          size={RFValue(24)}
        />
        <View
          style={{
            width: RFValue(40),
            height: RFValue(40),
            backgroundColor: colors.Yellow,
            borderRadius: RFValue(25),
            justifyContent: "center"
          }}
        >
          <Icons
            style={styles.image_style}
            name="mobile"
            color={colors.White}
            size={RFValue(24)}
          />
        </View>
        <Icons
          style={styles.image_style}
          name="camera-retro"
          color={colors.Yellow}
          size={RFValue(24)}
        />
        <Icons
          style={styles.image_style}
          name="film"
          color={colors.Yellow}
          size={RFValue(24)}
        />
      </View>
    </View>
  );
};
export default React.memo(FooterComponent);

// Later on in your styles..
var styles = StyleSheet.create({
  search_icon: { marginLeft: RFValue(25), alignSelf: "center" },
  inputStyle: { flex: 1, marginLeft: RFValue(10) },
  linearGradient: {
    flex: 1,
    borderBottomStartRadius: RFValue(100),
    borderBottomEndRadius: RFValue(100),
    marginHorizontal: RFValue(-40),
    alignItems: "center",
    flexDirection: "row"
  },
  image_style: {
    alignSelf: "center"
  },
  input_text: {
    borderRadius: RFValue(25),
    height: RFValue(50),
    top: RFValue(50),
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
    height: RFValue(75),
    width: "100%",
    position: "absolute",
    bottom: RFValue(0)
  }
});

import React, { useState } from "react";
import {
  Image,
  Switch,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import HorizontalList from "react-native-horizontal-list";
import { data, dataCinema, colors } from "../../utils/Constants";
import HeaderComponent from "../headerComponent";
import FooterComponent from "../footerComponent";
import CategoryItem from "../dashboard/categoryItem";
import Icons from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

const DashBoardComponent = props => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: colors.White }}>
      <ScrollView>
        <View>
          <HeaderComponent />
          <Text style={styles.heading_style}>Cinema around your area</Text>
          <FlatList
            data={dataCinema}
            renderItem={({ item }) => <CategoryItem item={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.toString()}
          />
          <Text style={[styles.heading_style, { marginTop: RFValue(15) }]}>
            New releases
          </Text>
          <HorizontalList data={data} />
          <Text style={[styles.heading_style, { marginTop: RFValue(15) }]}>
            You might want to see this
          </Text>
          <HorizontalList data={data} />
          <View style={{ margin: RFValue(30) }}></View>
        </View>
      </ScrollView>
      <FooterComponent />
    </View>
  );
};
export default React.memo(DashBoardComponent);

var styles = StyleSheet.create({
  image_style: {
    borderRadius: RFValue(15),
    overflow: "hidden",
    flex: 1
  },
  heading_style: {
    marginTop: RFValue(40),
    fontSize: RFValue(15),
    marginBottom: RFValue(20),
    fontWeight: "bold",
    marginLeft: RFValue(15)
  }
});

import React from "react";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";
import DashBoardComponent from "../../components/dashboard";
import { colors } from "../../utils/Constants";
class DashBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: colors.Yellow }}>
        <DashBoardComponent />
      </SafeAreaView>
    );
  }
}

export default DashBoardContainer;

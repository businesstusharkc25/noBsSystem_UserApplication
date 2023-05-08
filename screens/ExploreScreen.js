import React from "react";
import { AppBottomNav } from "../components";
import { ExplorePage } from "../features/ExplorePage";
import { SafeAreaView } from "react-native";

const ExploreScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ExplorePage route={route} navigation={navigation} />
      <AppBottomNav route={route} navigation={navigation} />
    </SafeAreaView>
  );
};

export default ExploreScreen;

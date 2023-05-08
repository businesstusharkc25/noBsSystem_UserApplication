import React from "react";
import { AppBottomNav } from "../components";
import { HomePage } from "../features/HomePage";
import { SafeAreaView } from "react-native";

const HomePageScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <HomePage navigation={navigation} />
      <AppBottomNav route={route} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomePageScreen;

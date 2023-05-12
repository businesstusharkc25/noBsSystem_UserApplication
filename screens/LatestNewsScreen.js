import React from "react";
import { AppBottomNav } from "../components";
import { LatestNewsPage } from "../features/LatestNewsPage";
import { SafeAreaView } from "react-native-safe-area-context";

const LatestNewsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <LatestNewsPage navigation={navigation} />
      <AppBottomNav route={route} navigation={navigation} />
    </SafeAreaView>
  );
};

export default LatestNewsScreen;

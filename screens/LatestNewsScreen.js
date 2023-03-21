import React from "react";
import { AppBottomNav } from "../components";
import { LatestNewsPage } from "../features/LatestNewsPage";

const LatestNewsScreen = ({ route, navigation }) => {
  return (
    <>
      <LatestNewsPage navigation={navigation} />
      <AppBottomNav route={route} navigation={navigation} />
    </>
  );
};

export default LatestNewsScreen;

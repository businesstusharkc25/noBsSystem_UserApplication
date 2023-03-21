import React from "react";
import { AppBottomNav } from "../components";
import { HomePage } from "../features/HomePage";

const HomePageScreen = ({ route, navigation }) => {
  return (
    <>
      <HomePage navigation={navigation} />
      <AppBottomNav route={route} navigation={navigation} />
    </>
  );
};

export default HomePageScreen;

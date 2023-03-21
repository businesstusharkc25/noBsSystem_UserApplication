import React from "react";
import { AppBottomNav } from "../components";
import { ExplorePage } from "../features/ExplorePage";

const ExploreScreen = ({ route, navigation }) => {
  return (
    <>
      <ExplorePage route={route} navigation={navigation} />
      <AppBottomNav route={route} navigation={navigation} />
    </>
  );
};

export default ExploreScreen;

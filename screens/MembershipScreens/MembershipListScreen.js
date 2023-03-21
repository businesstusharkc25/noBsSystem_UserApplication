import { Text, View } from "react-native";
import React from "react";
import { MembershipListPage } from "../../features/MembershipListPage";
import { AppBottomNav } from "../../components";

const MembershipListScreen = ({ route, navigation }) => {
  return (
    <>
      <MembershipListPage />
      <AppBottomNav route={route} navigation={navigation} />
    </>
  );
};

export default MembershipListScreen;

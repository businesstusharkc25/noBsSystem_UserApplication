import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { MembershipListPage } from "../../features/MembershipListPage";
import { AppBottomNav } from "../../components";

const MembershipListScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <MembershipListPage />
      <AppBottomNav route={route} navigation={navigation} />
    </SafeAreaView>
  );
};

export default MembershipListScreen;

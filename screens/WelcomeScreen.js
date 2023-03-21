import React from "react";
import { SafeAreaView, View } from "react-native";
import { WelcomeScreen } from "../features/WelcomeScreen";
import { ui } from "../styles";

const UserWelcomeScreen = ({ navigation }) => {
  return <WelcomeScreen navigation={navigation} />;
};

export default UserWelcomeScreen;

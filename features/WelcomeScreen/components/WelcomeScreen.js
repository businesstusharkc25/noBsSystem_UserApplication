import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { ui } from "../../../styles";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { appRouteNames } from "../../../data";
import { ConnectWallet } from "@thirdweb-dev/react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ ...ui.baseContainer, position: "relative" }}>
      <Text style={styles.appLogoBold}>no_bs</Text>
      <View style={{ position: "absolute", bottom: 150, right: 20, left: 20 }}>
        <ConnectWallet theme={"dark"} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(appRouteNames.homePageScreen)}
        style={{ position: "absolute", bottom: 60, right: 20, left: 20 }}
      >
        <View
          style={{
            backgroundColor: "#181818",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              padding: 6,
              textAlign: "center",
            }}
          >
            Skip for now
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

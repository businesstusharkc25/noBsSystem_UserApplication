import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { ui } from "../../../styles";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { appRouteNames } from "../../../data";
import { ConnectWallet } from "@thirdweb-dev/react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ ...ui.baseContainer, position: "relative" }}>
      <ConnectWallet />
      <Text style={styles.appLogoBold}>no_bs</Text>
      <TouchableOpacity
        onPress={() => console.log("hellor")}
        style={{ position: "absolute", bottom: 150, right: 20, left: 20 }}
      >
        <View
          style={{
            backgroundColor: "#181818",
            padding: 20,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: 20,
              paddingLeft: 10,
            }}
          >
            Connect Wallet
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(appRouteNames.homePageScreen)}
        style={{ position: "absolute", bottom: 50, right: 20, left: 20 }}
      >
        <View
          style={{
            backgroundColor: "#181818",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "900",
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

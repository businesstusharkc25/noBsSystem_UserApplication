import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { appRouteNames } from "../../../data";

const AppHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <View style={[styles.appInfoContainer]}>
        <Text style={[styles.headerLogo]}>no_bs</Text>
        <View>
          <View style={[styles.headerLeft]}>
            <Icon
              onPress={() => navigation.navigate(appRouteNames.searchScreen)}
              name="search"
              color={"white"}
              size={24}
            />
            <View style={{ position: "relative" }}>
              <View style={[styles.notificationIndicator]} />
              <Icon
                onPress={() =>
                  navigation.navigate(appRouteNames.notificationScreen)
                }
                style={[styles.headerNotificationIcon]}
                name="bell"
                color={"white"}
                size={24}
              />
            </View>

            <Image source={require("../../../assets/images/user_icon.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppHeader;

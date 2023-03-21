import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { appRouteNames } from "../../../../data";

const AppBottomNav = ({ route, navigation }) => {
  return (
    <View style={[styles.bottomNavContainer]}>
      <Pressable
        style={{
          borderRadius: 5,
          backgroundColor:
            route?.name == appRouteNames.homePageScreen ? "#232323" : null,
        }}
        onPress={() => navigation.navigate(appRouteNames.homePageScreen)}
        android_ripple={{ color: "grey", borderless: true }}
      >
        <Image
          style={[styles.bottomNavIcon]}
          source={require("../../../../assets/icons/home_icon.png")}
        />
      </Pressable>

      <Pressable
        style={{
          borderRadius: 5,
          backgroundColor:
            route?.name == appRouteNames.latestNews ? "#232323" : null,
        }}
        onPress={() => navigation.navigate(appRouteNames.latestNews)}
        android_ripple={{ color: "grey", borderless: true }}
      >
        <Image
          style={[styles.bottomNavIcon]}
          source={require("../../../../assets/icons/latestNews_icon.png")}
        />
      </Pressable>

      <Pressable
        style={{
          borderRadius: 5,
          backgroundColor:
            route?.name == appRouteNames.exploreNews ? "#232323" : null,
        }}
        onPress={() => navigation.navigate(appRouteNames.exploreNews)}
        android_ripple={{ color: "grey", borderless: true }}
      >
        <Image
          style={[styles.bottomNavIcon]}
          source={require("../../../../assets/icons/explore_icon.png")}
        />
      </Pressable>

      <Pressable
        style={{
          borderRadius: 5,
          backgroundColor:
            route?.name == appRouteNames.membershipListsScreen
              ? "#232323"
              : null,
        }}
        onPress={() => navigation.navigate(appRouteNames.membershipListsScreen)}
        android_ripple={{ color: "grey", borderless: true }}
      >
        <Image
          style={[styles.bottomNavIcon]}
          source={require("../../../../assets/icons/subscriptions_icon.png")}
        />
      </Pressable>
    </View>
  );
};

export default AppBottomNav;

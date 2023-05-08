import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { bottomNavData } from "../../../../data";
import useBottomNavStyles from "./styles";

const AppBottomNav = ({ route, navigation }) => {
  const { styles } = useBottomNavStyles();

  return (
    <View style={[styles.bottomNavContainer]}>
      {bottomNavData.map(({ image, navigateTo }, index) => (
        <Pressable
          key={index}
          style={{
            borderRadius: 5,
            backgroundColor: route?.name == navigateTo ? "#232323" : null,
          }}
          onPress={() => navigation.navigate(navigateTo)}
          android_ripple={{ color: "grey", borderless: true }}
        >
          <Image style={[styles.bottomNavIcon]} source={image} />
        </Pressable>
      ))}
    </View>
  );
};

export default AppBottomNav;

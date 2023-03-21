import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography } from "../../../styles";

const NewsGenresTab = ({ illustrationSrc, genreName, route, navigation }) => {
  const { selectedGenre } = route?.params;

  const routeToGenre = () =>
    navigation.navigate(route.name, { selectedGenre: genreName.toLowerCase() });

  return (
    <TouchableOpacity
      onPress={routeToGenre}
      style={{
        ...styles.genreContainer,
        borderColor:
          selectedGenre?.toLowerCase() == genreName?.toLowerCase()
            ? "white"
            : null,
      }}
    >
      <Image source={illustrationSrc} style={[styles.genreIllustrationImage]} />
      <Text style={{ color: typography.textWhite.color, textAlign: "center" }}>
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

export default NewsGenresTab;

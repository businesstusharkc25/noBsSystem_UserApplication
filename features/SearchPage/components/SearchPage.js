import { SafeAreaView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ui } from "../../../styles";
import { styles } from "./styles";

const SearchPage = ({ navigation }) => {
  const [searchText, setSearchText] = useState();

  return (
    <SafeAreaView style={{ ...ui.baseContainer }}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        onChangeText={setSearchText}
        value={searchText}
        placeholderTextColor={"#767676"}
      />
    </SafeAreaView>
  );
};

export default SearchPage;

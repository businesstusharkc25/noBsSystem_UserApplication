import { ScrollView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ChannelInfoShort } from "../../../components/ui/ChannelInfoShort";
import { PodcastContentExpanded } from "../../../components/ui";

const PodcastPage = () => {
  return (
    <ScrollView style={[styles.podcastContainer]}>
      <View>
        <ChannelInfoShort />
        <PodcastContentExpanded />
      </View>
    </ScrollView>
  );
};

export default PodcastPage;

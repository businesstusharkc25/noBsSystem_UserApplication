import { Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { ChannelInfoShort } from "../../../components/ui/ChannelInfoShort";
import { VideoContentExpanded } from "../../../components/ui";

const VideoPage = () => {
  return (
    <ScrollView style={[styles.videoPageContainer]}>
      <View>
        <ChannelInfoShort />
        <VideoContentExpanded />
      </View>
    </ScrollView>
  );
};

export default VideoPage;

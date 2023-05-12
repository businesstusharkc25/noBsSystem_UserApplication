import { Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import { ChannelInfoShort } from "../../../components/ui/ChannelInfoShort";
import { VideoContentExpanded } from "../../../components/ui";
import { useGetContentByIdQuery } from "../../../services/appContentServices/appContentServices";

const VideoPage = ({ navigation, route }) => {
  const { id } = route.params;

  const { data } = useGetContentByIdQuery({ id });

  return (
    <ScrollView style={[styles.videoPageContainer]}>
      <View>
        <ChannelInfoShort channelInfo={data?.result.channelInfo} />
        <VideoContentExpanded contentData={data?.result?.content} />
      </View>
    </ScrollView>
  );
};

export default VideoPage;

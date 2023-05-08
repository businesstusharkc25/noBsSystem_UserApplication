import { ScrollView, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ChannelInfoShort } from "../../../components/ui/ChannelInfoShort";
import { PodcastContentExpanded } from "../../../components/ui";
import { useGetContentByIdQuery } from "../../../services/appContentServices/appContentServices";

const PodcastPage = ({ route, navigation }) => {
  const { id } = route.params;
  const { data } = useGetContentByIdQuery({ id });

  return (
    <ScrollView style={[styles.podcastContainer]}>
      <View>
        <ChannelInfoShort channelInfo={data?.result?.channelInfo} />
        <PodcastContentExpanded contentData={data?.result?.content} />
      </View>
    </ScrollView>
  );
};

export default PodcastPage;

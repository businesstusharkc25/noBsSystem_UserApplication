import { ScrollView, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ChannelInfo, VideoContentCompressed } from "../../../components";

const ChannelInfoVideoPage = ({ navigation }) => {
  const tempData = {
    contentTitle: "News Title",
    contentViews: "200K",
    channelHandle: "TusharKc",
    channelLogo:
      "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contentThumbnail:
      "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    contentType: "Dummy Content Type",
  };

  return (
    <ScrollView style={[styles.channelInfoPageContainer]}>
      <View>
        <ChannelInfo navigation={navigation} />
        <VideoContentCompressed
          contentData={tempData}
          navigation={navigation}
        />
        <VideoContentCompressed
          contentData={tempData}
          navigation={navigation}
        />
        <VideoContentCompressed
          contentData={tempData}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default ChannelInfoVideoPage;

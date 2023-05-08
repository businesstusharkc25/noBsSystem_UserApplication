import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import { typography, utilStyles } from "../../../../../styles";
import DiscussionPanelOverlay from "../../../../sharedComponents/DiscussionPanelOverlay/DiscussionPanelOverlay";
import {
  calcDate,
  formatCompactNumber,
} from "../../../../helper/helperFunctions";

const VideoContentExpanded = ({ contentData = {} }) => {
  const {
    contentUrl,
    newsBody,
    newsTitle,
    views,
    createdAt,
    id,
    comments = [],
  } = contentData;
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(false);
  const today = new Date();

  return (
    <>
      <VideoPlayer
        style={{
          height: 250,
        }}
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.COVER,
          source: {
            uri: contentUrl,
          },
        }}
        fullscreen={{ visible: false }}
      />

      <View style={[styles.videoDescriptionContainer]}>
        <Text style={[styles.videoTitle]}>{newsTitle}</Text>
        <Text
          numberOfLines={!showMore ? 1 : undefined}
          style={[styles.videoDescription]}
          onPress={() => {
            setShowMore(!showMore);
          }}
        >
          {newsBody?.replace(/(<([^>]+)>)/gi, "")}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: typography.textWhite.color,
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              {calcDate(today, createdAt)}
            </Text>
            <View style={[utilStyles.dotSeparator]} />
            <Text
              style={{
                color: typography.textWhite.color,
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              {formatCompactNumber(views)} Views
            </Text>
          </View>
          <Image
            style={{ height: 18, width: 18 }}
            source={require("../../../../../assets/icons/share_icon.png")}
          />
        </View>
      </View>

      <View
        style={{
          padding: 8,
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Image
            style={{ height: 30, width: 20, marginRight: 8 }}
            source={require("../../../../../assets/icons/supporters_icon.png")}
          />

          <Text style={{ color: typography.textWhite.color }}>
            5 Supporters
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{ backgroundColor: "#201F1F", padding: 6, borderRadius: 4 }}
        >
          <Text style={{ color: typography.textWhite.color }}>
            Discussion Panel
          </Text>
        </TouchableOpacity>
      </View>

      <DiscussionPanelOverlay
        visible={visible}
        setVisible={setVisible}
        contentId={id}
        comments={comments}
      />
    </>
  );
};

export default VideoContentExpanded;

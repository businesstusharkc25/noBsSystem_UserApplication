import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import { typography, utilStyles } from "../../../../../styles";
import DiscussionPanelOverlay from "../../../../sharedComponents/DiscussionPanelOverlay/DiscussionPanelOverlay";

const VideoContentExpanded = ({ contentData }) => {
  const [showMore, setShowMore] = useState(false);
  const [visible, setVisible] = useState(false);

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
            uri: "https://static.pexels.com/lib/videos/free-videos.mp4",
          },
        }}
        fullscreen={{ visible: false }}
      />

      <View style={[styles.videoDescriptionContainer]}>
        <Text style={[styles.videoTitle]}>News Title</Text>
        <Text
          numberOfLines={!showMore ? 1 : undefined}
          style={[styles.videoDescription]}
          onPress={() => {
            setShowMore(!showMore);
          }}
        >
          This is a comment added by the user, representing the views of the
          user on this topic.
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
              25 Minutes ago
            </Text>
            <View style={[utilStyles.dotSeparator]} />
            <Text
              style={{
                color: typography.textWhite.color,
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              200K Views
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

      <DiscussionPanelOverlay visible={visible} setVisible={setVisible} />
    </>
  );
};

export default VideoContentExpanded;

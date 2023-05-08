import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { typography, utilStyles } from "../../../../../styles";
import { DiscussionPanelOverlay } from "../../../../sharedComponents";
import PodcastPlayer from "./PodcastPlayer";
import {
  calcDate,
  formatCompactNumber,
} from "../../../../helper/helperFunctions";

const PodcastContentExpanded = ({ contentData = {} }) => {
  const [visible, setVisible] = useState(false);
  const {
    newsTitle,
    createdAt,
    views,
    thumbnailUrl,
    contentUrl,
    id,
    comments,
  } = contentData;

  return (
    <View style={[styles.podcastContainer]}>
      <Text numberOfLines={3} style={[styles.newsTitles]}>
        {newsTitle}
      </Text>

      <View style={[styles.contentUtilInfoContainer]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: typography.textGray.color }}>
            {calcDate(new Date(), createdAt)}
          </Text>
          <View style={[utilStyles.dotSeparator]} />
          <Text style={{ color: typography.textGray.color }}>
            {formatCompactNumber(views)} Views
          </Text>
        </View>

        <TouchableOpacity>
          <Image
            style={{ height: 18, width: 18 }}
            source={require("../../../../../assets/icons/share_icon.png")}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
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

      <Image
        style={[styles.podcastCoverImage]}
        source={{
          uri: thumbnailUrl,
        }}
      />
      {contentUrl && <PodcastPlayer uri={contentUrl} />}

      <DiscussionPanelOverlay
        visible={visible}
        setVisible={setVisible}
        contentId={id}
        comments={comments}
      />
    </View>
  );
};

export default PodcastContentExpanded;

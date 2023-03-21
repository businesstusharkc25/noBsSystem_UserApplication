import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { typography, utilStyles } from "../../../../../styles";
import { DiscussionPanelOverlay } from "../../../../sharedComponents";
import PodcastPlayer from "./PodcastPlayer";

const PodcastContentExpanded = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={[styles.podcastContainer]}>
      <Text numberOfLines={3} style={[styles.newsTitles]}>
        A really long news title. A really long news title. A really long news
        title. A really long.
      </Text>

      <View style={[styles.contentUtilInfoContainer]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: typography.textGray.color }}>
            25 minutes ago
          </Text>
          <View style={[utilStyles.dotSeparator]} />
          <Text style={{ color: typography.textGray.color }}>200K Views</Text>
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
          uri: "https://images.pexels.com/photos/3065602/pexels-photo-3065602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />

      <PodcastPlayer />

      <DiscussionPanelOverlay visible={visible} setVisible={setVisible} />
    </View>
  );
};

export default PodcastContentExpanded;

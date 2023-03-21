import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { typography, utilStyles } from "../../../styles";

const Membership = ({ membershipData }) => {
  const {
    channelLogoImg,
    channelHandle,
    totalMembers,
    totalViews,
    membershipPrice,
    channelName,
  } = membershipData;

  return (
    <View style={[styles.membershipCardContainer]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: channelLogoImg }}
          style={[styles.channelLogoContainer]}
        />

        <View style={{ paddingHorizontal: 12 }}>
          <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
            {channelName}
          </Text>

          <Text
            style={{
              color: typography.textWhite.color,
              paddingVertical: 4,
              fontSize: 12,
            }}
          >
            {channelHandle}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
              {totalMembers}
            </Text>

            <View style={[utilStyles.dotSeparator]} />

            <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
              {totalViews}
            </Text>

            <View style={[utilStyles.dotSeparator]} />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={[styles.ethIcon]}
                source={require("../../../assets/icons/eth_icon.png")}
              />
              <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
                {membershipPrice}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={[styles.actionButton]}>
          <Text style={{ color: typography.textWhite.color, fontSize: 12 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Membership;

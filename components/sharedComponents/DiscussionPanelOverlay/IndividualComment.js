import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const IndividualComment = ({
  commenterAddress,
  comment,
  replyCount,
  setFocusedComment,
  focusedComment = false,
}) => {
  return (
    <View style={[styles.commentContainer]}>
      <Text style={[styles.accountAddress]}>
        {`${commenterAddress.substr(0, 5)}...${commenterAddress.substr(
          commenterAddress.length - 7,
          commenterAddress.length
        )}`}
      </Text>

      <Text style={[styles.comment]}>{comment}</Text>

      {!focusedComment ? (
        <TouchableOpacity
          onPress={() => setFocusedComment(true)}
          style={[styles.repliesContainer]}
        >
          <Text style={[styles.replyCount]}>{replyCount}</Text>
          <Image
            style={[styles.replyIcon]}
            source={require("../../../assets/icons/reply_icon.png")}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default IndividualComment;

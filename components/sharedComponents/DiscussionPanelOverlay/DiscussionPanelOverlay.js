import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { BottomSheet } from "react-native-btr";
import { styles } from "./styles";
import IndividualComment from "./IndividualComment";
import { useAddCommentMutation } from "./services/discussionPanelServices";
import { formatCompactNumber } from "../../helper/helperFunctions";

const DiscussionPanelOverlay = ({
  visible,
  setVisible,
  contentId,
  comments = [],
}) => {
  const [commentValue, setCommentValue] = useState("");
  const [focusedComment, setFocusedComment] = useState();
  const [addComment] = useAddCommentMutation();

  const toggleBottomSheetView = () => {
    setVisible(!visible);
    setFocusedComment();
  };

  return (
    <View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomSheetView}
        onBackdropPress={toggleBottomSheetView}
      >
        {focusedComment ? (
          <View style={{ marginTop: 2, marginBottom: 2 }}>
            <IndividualComment
              focusedComment={focusedComment}
              setFocusedComment={setFocusedComment}
              commenterAddress={focusedComment?.commenterAddress}
              comment={focusedComment?.comment}
            />
          </View>
        ) : null}

        <View style={styles.bottomSheetContentContainer}>
          <View style={styles.addCommentContainer}>
            <TextInput
              placeholder={`Add your ${focusedComment ? "reply" : "comment"}`}
              style={styles.commentInputStyles}
              onChangeText={setCommentValue}
              value={commentValue}
              placeholderTextColor={"#767676"}
            />

            <TouchableOpacity
              onPress={() => {
                let body = { comment: commentValue };

                if (commentValue) {
                  if (!focusedComment) {
                    addComment({
                      contentId,
                      body,
                    });
                  } else {
                    body.replyingTo = focusedComment?._id;
                    addComment({
                      contentId,
                      body,
                    });
                  }
                }
              }}
            >
              <Image
                style={[styles.sendIconImg]}
                source={require("../../../assets/icons/send_icon.png")}
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {!focusedComment
              ? comments?.map(({ comment, userAddress, replies, _id }, id) => (
                  <View key={id} style={{ marginTop: 2, marginBottom: 2 }}>
                    <IndividualComment
                      focusedComment={focusedComment}
                      setFocusedComment={setFocusedComment}
                      commenterAddress={userAddress}
                      comment={comment}
                      _id={_id}
                      replyCount={formatCompactNumber(replies?.length)}
                    />
                  </View>
                ))
              : comments
                  ?.find((comment) => comment._id == focusedComment._id)
                  ?.replies?.map(({ comment, userAddress }, id) => (
                    <View key={id} style={{ marginTop: 2, marginBottom: 2 }}>
                      <IndividualComment
                        focusedComment={focusedComment}
                        commenterAddress={userAddress}
                        comment={comment}
                      />
                    </View>
                  ))}
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DiscussionPanelOverlay;

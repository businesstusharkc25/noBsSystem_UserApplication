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

const DiscussionPanelOverlay = ({ visible, setVisible }) => {
  const [commentValue, setCommentValue] = useState("");
  const [focusedComment, setFocusedComment] = useState(false);

  const toggleBottomSheetView = () => {
    setVisible(!visible);
    setFocusedComment(false);
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
              commenterAddress={"0x08c55d4bd336f713d0c80a2212f736445243dcf7"}
              comment={
                "This is a comment added by the user, representing the views of the user on this topic."
              }
              replyCount={"50k"}
            />
          </View>
        ) : null}

        <View style={styles.bottomSheetContentContainer}>
          <View style={styles.addCommentContainer}>
            <TextInput
              placeholder="Add your comment"
              style={styles.commentInputStyles}
              onChangeText={setCommentValue}
              value={commentValue}
              placeholderTextColor={"#767676"}
            />

            <TouchableOpacity>
              <Image
                style={[styles.sendIconImg]}
                source={require("../../../assets/icons/send_icon.png")}
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <View style={{ marginTop: 2, marginBottom: 2 }}>
              <IndividualComment
                focusedComment={focusedComment}
                setFocusedComment={setFocusedComment}
                commenterAddress={"0x08c55d4bd336f713d0c80a2212f736445243dcf7"}
                comment={
                  "This is a comment added by the user, representing the views of the user on this topic."
                }
                replyCount={"50k"}
              />
            </View>
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DiscussionPanelOverlay;

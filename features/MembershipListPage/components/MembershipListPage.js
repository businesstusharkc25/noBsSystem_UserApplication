import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Membership } from "../../../components/sharedComponents";

const MembershipListPage = () => {
  const tempData = [
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
    {
      channelLogoImg:
        "https://images.pexels.com/photos/14699589/pexels-photo-14699589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      channelHandle: "@TusharKcCreatingApplication",
      totalMembers: "2K",
      totalViews: "200K",
      membershipPrice: "0.00223",
      channelName: "Tushar kc creating news",
    },
  ];

  return (
    <ScrollView style={[styles.membershipPageContainer]}>
      {tempData?.map((membershipData, index) => (
        <Membership key={index} membershipData={membershipData} />
      ))}
    </ScrollView>
  );
};

export default MembershipListPage;

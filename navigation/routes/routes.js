import React from "react";
import Channels from "../../component/channels/channels";
import LandingPage from "../../component/landingPage/landingPage";
import UserProfile from "../../component/userProfile/userProfile";
import ChannelVote from "../../component/channelVote/channelVote";
import {
  AntDesign,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export function CHANNELS() {
  return {
    component: Channels,
    icon: <Fontisto name="room" size={24} color="black" />,
    name: "CHANNELS",
  };
}

export function CHANNEL_VOTE() {
  return {
    component: ChannelVote,
    icon: <FontAwesome5 name="vote-yea" size={24} color="black" />,
    name: "CHANNEL_VOTE",
  };
}

export function LANDING_PAGE() {
  return {
    component: LandingPage,
    icon: (
      <MaterialCommunityIcons
        name="gamepad-variant-outline"
        size={24}
        color="black"
      />
    ),
    name: "LANDING_PAGE",
  };
}

export function USER_PROFILE() {
  return {
    component: UserProfile,
    icon: <AntDesign name="user" size={24} color="black" />,
    name: "UserProfile",
  };
}

const styles = {
  icon: {
    color: "#F2F2F2",
    size: 24,
  },
};

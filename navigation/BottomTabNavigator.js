import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Channels from "../component/channels/channels";
import LandingPage from "../component/landingPage/landingPage";
import ChannelVote from "../component/channelVote/channelVote";
import UserProfile from "../component/userProfile/userProfile";
import { AntDesign } from "@expo/vector-icons";
import {
  CHANNELS,
  CHANNEL_VOTE,
  LANDING_PAGE,
  USER_PROFILE,
} from "../navigation/routes/routes";

const BottomTab = createBottomTabNavigator();

const SCREENS = [LANDING_PAGE, CHANNELS, CHANNEL_VOTE, USER_PROFILE];

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="LandingPage"
      // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      {generateScreens(SCREENS)}
    </BottomTab.Navigator>
  );
}

function generateScreens(screens) {
  return screens.map((screen) => {
    const { component, icon, name } = screen();
    return (
      <BottomTab.Screen
        key={`BottomTabNavigator-${name}`}
        name={name}
        component={component}
        options={{
          tabBarIcon: ({ color }) => icon,
        }}
      />
    );
  });
}

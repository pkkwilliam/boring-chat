import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Channels from "../component/channels/channels";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="ChatWindow"
      // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Channels"
        component={Channels}
        //   options={{
        //     tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        //   }}
      />
      {/* <BottomTab.Screen
          name="TabTwo"
          component={TabTwoNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          }}
        /> */}
    </BottomTab.Navigator>
  );
}

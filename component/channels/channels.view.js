import React, { Component } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class ChannelsView extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <ChannelList {...this.props} />
      </View>
    );
  }
}

function ChannelList({ channels, onPressChannel }) {
  return channels.map((channel, index) => (
    <View key={`ChannelList-${index}`} style={{ padding: 15 }}>
      <TouchableOpacity onPress={() => onPressChannel(index)}>
        <Text style={{ fontSize: 22 }}>{channel.name}</Text>
        <Text>{channel.detail}</Text>
      </TouchableOpacity>
    </View>
  ));
}

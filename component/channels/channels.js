import React from "react";
import ApplicationComponent from "../common/applicationComponent";
import ChannelsView from "./channels.view";

export default class Channels extends ApplicationComponent {
  state = {
    ...this.state,
    channels: [],
  };

  componentDidMount() {
    this.serviceExecutor
      .execute({
        publicRequset: false,
        requestMapping: `/public/api/channel/v1/channels`,
        requestMethod: "GET",
      })
      .then((channels) => this.setState({ channels }));
  }

  render() {
    return (
      <ChannelsView onPressChannel={this.onPressChannel} {...this.state} />
    );
  }

  onPressChannel = (channelIndex) => {
    const channel = this.state.channels[channelIndex];
    this.navigate("ChatWindow", { channel: channel, title: channel.name });
  };
}

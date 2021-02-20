import React from "react";
import Socket from "../../service/webSocketUtil";
import ApplicationComponent from "../common/applicationComponent";
import ChatWindowView from "./chatWindow.view";

export default class ChatWindow extends ApplicationComponent {
  socket = null;

  state = {
    ...this.state,
    channel: undefined,
    inputMessage: "",
    messages: [],
  };

  componentDidMount() {
    this.setState(
      {
        channel: this.navigateParams().channel,
      },
      () => this.connectWebScoket()
    );
  }

  render() {
    return (
      <ChatWindowView
        onChangeText={this.onChangeText}
        onPressSendMessage={this.onPressSendMessage}
        {...this.state}
      />
    );
  }

  onChangeText = (inputMessage) => {
    this.setState({ inputMessage });
  };

  onPressSendMessage = () => {
    const { channel, inputMessage } = this.state;
    this.socket.sendMessageToChannel(
      `/web-socket/chat.public${channel.messageMapping}`,
      JSON.stringify({
        content: inputMessage,
      })
    );
    this.setState({
      inputMessage: "",
    });
  };

  connectWebScoket() {
    const { channel } = this.state;
    const { messageMapping } = channel;
    this.socket = new Socket("http://127.0.0.1:8082/web-socket/connect", "", [
      "/topic/public",
    ]);
    this.socket.connectWebSocket(() => {
      this.socket.subscribeChannel(
        `/topic/public${messageMapping}`,
        (response) => {
          const jsonResponse = JSON.parse(response.body);
          this.setState((state) => ({
            messages: [...state.messages, jsonResponse],
          }));
        }
      );
    });
  }
}

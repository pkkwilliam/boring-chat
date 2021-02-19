import React, { Component } from "react";
import { Text, View } from "react-native";
import Socket from "./service/webSocketUtil";

export default class ChatWindow extends Component {
  socket = null;

  state = {
    ...this.state,
    messages: [],
  };

  componentDidMount() {
    this.connectWebScoket();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ChatArea />
      </View>
    );
  }

  connectWebScoket() {
    this.socket = new Socket("http://127.0.0.1:8082/web-socket/connect", "", [
      "/topic/public",
    ]);
    this.socket.connectWebSocket(() => {
      this.socket.subscribeChannel("/topic/public/", (response) => {
        const jsonResponse = JSON.parse(response.body);
        this.setState((state) => ({
          messages: [...state.messages, jsonResponse],
        }));
      });
    });
  }
}

function ChatArea({ messages }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ChatArea</Text>
    </View>
  );
}

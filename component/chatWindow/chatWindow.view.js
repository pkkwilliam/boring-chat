import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView, Text, View } from "react-native";

export default class ChatWindowView extends Component {
  render() {
    const {
      inputMessage,
      messages,
      onChangeText,
      onPressSendMessage,
    } = this.props;
    return (
      <KeyboardAvoidingView
        // be sure to test this or get a way to solve this
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <ChatArea messages={messages} />
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            padding: 15,
          }}
        >
          <InputArea inputMessage={inputMessage} onChangeText={onChangeText} />
          <SendMessageButton onPressSendMessage={onPressSendMessage} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

function ChatArea({ messages }) {
  return messages.map((message, index) => (
    <Text key={`ChatArea-${index}`}>{message.content}</Text>
  ));
}

function InputArea({ inputMessage, onChangeText }) {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder="想講就講~"
      style={{
        backgroundColor: "#F2F2F2",
        borderRadius: 5,
        flex: 1,
        paddingLeft: 10,
      }}
      value={inputMessage}
    />
  );
}

function SendMessageButton({ onPressSendMessage }) {
  return (
    <TouchableOpacity
      onPress={onPressSendMessage}
      style={{
        backgroundColor: "#7BB32E",
        marginLeft: 5,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "#FFFFFF" }}>傳送</Text>
    </TouchableOpacity>
  );
}

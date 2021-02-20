import React from "react";
import { Text, View } from "react-native";
import ApplicationComponentView from "../common/applicationComponent.view";

export default class LandingPageView extends ApplicationComponentView {
  render() {
    return (
      <this.Wrapper>
        <View>
          <Text>LandingPageView</Text>
        </View>
      </this.Wrapper>
    );
  }
}

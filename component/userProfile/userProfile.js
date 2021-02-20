import React from "react";
import ApplicationComponent from "../common/applicationComponent";
import UserProfileView from "./userProfile.view";

export default class UserProfile extends ApplicationComponent {
  state = {
    ...this.state,
  };

  render() {
    return <UserProfileView {...this.state} />;
  }
}

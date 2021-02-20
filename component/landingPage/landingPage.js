import React from "react";
import ApplicationComponent from "../common/applicationComponent";
import LandingPageView from "./landingPage.view";

export default class LandingPage extends ApplicationComponent {
  render() {
    return <LandingPageView toggleModal={this.toggleModal} {...this.state} />;
  }
}

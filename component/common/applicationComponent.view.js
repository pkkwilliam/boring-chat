import React, { Component } from "react";
import ApplicationModal from "./applicationModal";

export default class ApplicationComponentView extends Component {
  // this can wrap modal and toast
  Wrapper = ({ children }) => {
    return (
      <>
        <ApplicationModal {...this.props} />
        {children}
      </>
    );
  };
}

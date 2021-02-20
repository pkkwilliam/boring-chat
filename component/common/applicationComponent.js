import { Component } from "react";
import { Context } from "../../context/applicationStateContext";
import ServiceExecutor from "../../service/serviceExecutor";
import ApplicationContext from "./applicationContext";

export default class ApplicationComponent extends Component {
  static contextType = Context;

  state = {
    showModal: false,
  };

  _applicationContext = new ApplicationContext();
  // _storage = new Storage();
  _serviceExecutor;

  get applicationContext() {
    return this._applicationContext;
  }

  get serviceExecutor() {
    if (!this._serviceExecutor) {
      this._serviceExecutor = new ServiceExecutor(
        this.applicationContext.serviceUrl,
        () => console.log("saveUserToken"),
        () => console.log("removeUserToken"),
        () => console.log("getUserToken"),
        () => console.log("please override on error!")
      );
    }
    return this._serviceExecutor;
  }

  navigate(pageName, param = {}) {
    this.props.navigation.navigate(pageName, param);
  }

  navigateParams() {
    return this.props.route.params;
  }

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };
}

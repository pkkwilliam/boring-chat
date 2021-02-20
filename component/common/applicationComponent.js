import { Component } from "react";
import ServiceExecutor from "../../service/serviceExecutor";
import ApplicationContext from "./applicationContext";

export default class ApplicationComponent extends Component {
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
        this.onError
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
}

export default class ApplicationContext {
  get mock() {
    return true;
  }

  get serviceUrl() {
    return this.mock ? "http://localhost:8082" : "https://picktb.com/api";
  }
}

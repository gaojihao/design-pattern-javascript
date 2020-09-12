class ConnentFactory {
  static create(type) {
    if (type === "tcp") return new Connent(type, 108000, 300);
    if (type === "upd") return new Connent(type, 111000, 320);
  }
}

class Connent {
  constructor(model, ip, port) {
    this.model = model;
    this.ip = ip;
    this.port = port;
  }
}

export default ConnentFactory;

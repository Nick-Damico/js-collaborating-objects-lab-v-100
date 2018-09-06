export default class Artist {
  constructor(name) {
    this.name = name;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }
}

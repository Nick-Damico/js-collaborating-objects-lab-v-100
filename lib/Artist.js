export default class Artist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  setName(name) {
    this.name = name;
    return this.name;
  }

  addSong(song) {
    this.songs.push(song);
  }

  static all() {
    if (this.collection === undefined) {
      this.collection = [];
    }
    return this.collection;
  }
}

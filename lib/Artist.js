export default class Artist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  };

  static all(artist = null) {
    if (this.collection === undefined) {
      this.collection = [];
    }
    if (artist) {
      this.collection.push( artist );
    }
    return this.collection;
  };

  setName(name) {
    this.name = name;
    return this.name;
  };

  addSong(song) {
    this.songs.push(song);
  };

  save() {
    Artist.all(this);
  }

};

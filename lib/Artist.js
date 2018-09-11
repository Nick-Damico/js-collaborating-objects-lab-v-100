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

  static findOrCreateByName(name) {
    let artist = this.all().find(artist => artist.name === name);
    if (!artist) {
      artist = new this(name);
      artist.save;
    }
    return artist;
  }

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

  printSongs() {
    let output = '';
    this.songs.forEach((song) => {
      output += song + '\n';
    });
    return output;
  }

};

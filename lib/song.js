import Artist from './Artist';

class Song {
    constructor(name) {
      this.name = name;
    }

    static newByFileName(filename) {
      const [artistName, songName] = filename.split(' - ');
      const newSong = new Song(songName);
      const newArtist = Artist.findOrCreateByName(artistName);
      newArtist.addSong(newSong);
      newSong.setArtist(newArtist);

      return newSong;
    }

    setName(name) {
      this.name = name;
    }

    setArtist(artist) {
      this.artist = artist;
    }

}

export default Song;

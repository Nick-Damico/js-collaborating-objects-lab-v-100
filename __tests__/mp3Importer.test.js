import Song from '../lib/Song';
import Artist from '../lib/Artist';
import MP3Importer from '../lib/MP3Importer';

describe ('MP3Importer', () => {
  describe ('#constructor', () => {
    it('it initializes with a filepath argument to parse mp3 files from', () => {
      const musicPath = '../fixtures/mp3s';
      const mp3ImporterOne = new MP3Importer(musicPath);

      expect(mp3ImporterOne.path).toEqual(musicPath);
    });
  });

  describe ('files', () => {
    it ('initializes a property of files equal to an array', () => {
      const musicPath = '../fixtures/mp3s';
      const mp3ImporterOne = new MP3Importer(musicPath);

      expect(mp3ImporterOne.files).toBeInstanceOf(Array);
    });

    it ('loads all mp3 files in the path directory', () => {
      const musicPath = '../fixtures/mp3s';
      const mp3ImporterOne = new MP3Importer(musicPath);

      expect(mp3ImporterOne.files.length).toEqual(5);
    });
  });
});

import Song from '../lib/song.js';
import Artist from '../lib/Artist.js';

describe('Song Class', () => {
  it('creates an instance of the Song class', () => {
    const song = new Song;

    expect(song).toBeInstanceOf(Song);
  });

  it('accepts a name for the song on instantiation', () => {
    const thriller = new Song('thriller');

    expect(thriller.name).toBe('thriller');
  });

  describe('#setName', () => {
    it('sets the name of the Song instance', () => {
      const stronger = new Song();
      stronger.setName('Stronger');

      expect(stronger.name).toEqual('Stronger');
    });
  });

  describe("#setArtist", () => {
    it('sets the artist object on the Song instance', () => {
      const heartless = new Song('Heartless');
      const kayne = new Artist('Kayne').save();

      heartless.setArtist(kayne);
      expect(heartless.artist).toEqual(kayne);
    });
  });
});

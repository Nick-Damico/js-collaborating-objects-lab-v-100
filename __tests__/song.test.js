import Song from '../lib/song.js';

describe('Song Class', () => {
  it('creates an instance of the Song class', () => {
    const song = new Song;

    expect(song).toBeInstanceOf(Song);
  });

  it('accepts a name for the song on instantiation', () => {
    const thriller = new Song('thriller');

    expect(thriller.name).toBe('thriller');
  });
});

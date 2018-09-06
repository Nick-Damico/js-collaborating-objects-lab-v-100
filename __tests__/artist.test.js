import Artist from '../lib/artist';
import Song from '../lib/song';

describe('Artist Class', () => {

  it('We can instantiate an instance of the Artist Class', () => {
    const newArtist = new Artist();
    expect(newArtist).toBeInstanceOf(Artist);
  });

  it('can be instantiated with a name for the artist', () => {
    const newArtist = new Artist('Michael Jackson');
    expect(newArtist.name).toBe('Michael Jackson');
  });

  describe('#setName', () => {
    it("it sets the artist's name", () => {
      const newArtist = new Artist();
      newArtist.setName('Johnny Cash');
      expect(newArtist.name).toBe('Johnny Cash');
    });
  });
});

describe('#addSong', () => {
  it("keeps track of an artist's songs", () => {
    const newArtist = new Artist('Michael Jackson');
    const thriller   = new Song('Thriller');
    newArtist.addSong(thriller);

    expect(newArtist.songs.length).toEqual(1);
    expect(newArtist.songs).toContain(thriller);
  });

 describe('.all', () => {
   it("it defines a method on the Artist class with keyword 'static'", () => {
     expect(Artist.all()).toBeDefined();
   });

   it("it sets a variable 'collection' on the class equal to an array", () => {
     expect(Artist.all()).toBeInstanceOf(Array);
     expect(Artist.all()).toEqual([]);
   });
 });

 describe("#save", () => {

});

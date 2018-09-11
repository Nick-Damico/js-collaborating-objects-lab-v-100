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

  describe('#addSong', () => {
    it("keeps track of an artist's songs", () => {
      const newArtist = new Artist('Michael Jackson');
      const thriller   = new Song('Thriller');
      newArtist.addSong(thriller);

      expect(newArtist.songs.length).toEqual(1);
      expect(newArtist.songs).toContain(thriller);
    });
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

  describe('#save', () => {
    it("adds the artist instance to Artist.all collection", () => {
      const artist = new Artist('Michael Jackson');
      artist.save();

      expect(Artist.all()).toContain(artist);
    });
  });

  describe(".findOrCreateByName", () => {
    it("finds or creates an instance of the Artist class in the .all collection", () => {
      const artist1 = new Artist('Kayne West');
      artist1.save();

      expect(Artist.findOrCreateByName('Kayne West')).toEqual(artist1);
    });

    it("creates an instance of the Artist class if no instance is found", () => {
      expect(Artist.findOrCreateByName('Kayne West')).toBeInstanceOf(Artist);
    });
  });

  describe("#printSongs", () => {
    it("it returns a list of all the artists songs", () => {
      const artist = new Artist('Kayne West');
      artist.save();
      artist.addSong('Good Life');
      artist.addSong('Stronger');
      artist.addSong('Forever');

      expect(artist.printSongs()).toBe("Good Life\nStronger\nForever\n");
    });
  });
});

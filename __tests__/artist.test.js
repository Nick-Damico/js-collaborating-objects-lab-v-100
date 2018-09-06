import Artist from '../lib/artist';


describe('Artist Class', () => {

  it('We can instantiate an instance of the Artist Class', () => {
    const newArtist = new Artist();
    expect(newArtist).toBeTruthy();
  });

  it('can be instantiated with a name for the artist', () => {
    const newArtist = new Artist('Michael Jackson');
    expect(newArtist.name).toBe('Michael Jackson');
  });

  describe('#setName', () => {

    it("it sets the artist's name", () => {
      const newArtist = new Artist();
      newArtist.setName('Alan Jackson');
      expect(newArtist.name).toBe('Alan Jackson');
    });
  });

});

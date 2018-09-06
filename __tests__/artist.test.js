import Artist from '../lib/Artist';
jest.mock('../lib/Artist');

beforeEach(() => {

  Artist.mockClear();
});

describe('Artist Class', () => {

  it('We can instantiate an instance of the Artist Class', () => {
    const newArtist = new Artist();
    expect(newArtist).toBeTruthy();
  });

})

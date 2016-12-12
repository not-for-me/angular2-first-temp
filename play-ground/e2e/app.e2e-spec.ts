import { PlayGroundPage } from './app.po';

describe('play-ground App', function() {
  let page: PlayGroundPage;

  beforeEach(() => {
    page = new PlayGroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { RouterExPage } from './app.po';

describe('router-ex App', function() {
  let page: RouterExPage;

  beforeEach(() => {
    page = new RouterExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

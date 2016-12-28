import { HttpExPage } from './app.po';

describe('http-ex App', function() {
  let page: HttpExPage;

  beforeEach(() => {
    page = new HttpExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

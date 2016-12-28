import { HttpAsyncPage } from './app.po';

describe('http-async App', function() {
  let page: HttpAsyncPage;

  beforeEach(() => {
    page = new HttpAsyncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

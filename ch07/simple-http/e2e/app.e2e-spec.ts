import { SimpleHttpPage } from './app.po';

describe('simple-http App', function() {
  let page: SimpleHttpPage;

  beforeEach(() => {
    page = new SimpleHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

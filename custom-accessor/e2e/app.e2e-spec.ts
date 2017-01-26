import { CustomAccessorPage } from './app.po';

describe('custom-accessor App', function() {
  let page: CustomAccessorPage;

  beforeEach(() => {
    page = new CustomAccessorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AngularProductManagerPage } from './app.po';

describe('angular-product-manager App', function() {
  let page: AngularProductManagerPage;

  beforeEach(() => {
    page = new AngularProductManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

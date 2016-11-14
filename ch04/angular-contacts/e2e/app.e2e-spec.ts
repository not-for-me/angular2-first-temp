import { AngularContactsPage } from './app.po';

describe('angular-contacts App', function() {
  let page: AngularContactsPage;

  beforeEach(() => {
    page = new AngularContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

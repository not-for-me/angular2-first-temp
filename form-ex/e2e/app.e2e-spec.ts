import { FormExPage } from './app.po';

describe('form-ex App', function() {
  let page: FormExPage;

  beforeEach(() => {
    page = new FormExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { CompLifecyclPage } from './app.po';

describe('comp-lifecycl App', function() {
  let page: CompLifecyclPage;

  beforeEach(() => {
    page = new CompLifecyclPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cl works!');
  });
});

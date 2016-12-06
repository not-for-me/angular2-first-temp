import { CompCommV1Page } from './app.po';

describe('comp-comm-v1 App', function() {
  let page: CompCommV1Page;

  beforeEach(() => {
    page = new CompCommV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

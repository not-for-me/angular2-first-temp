import { SvcSamplePage } from './app.po';

describe('svc-sample App', function() {
  let page: SvcSamplePage;

  beforeEach(() => {
    page = new SvcSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

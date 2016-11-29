import { SvcCalcExPage } from './app.po';

describe('svc-calc-ex App', function() {
  let page: SvcCalcExPage;

  beforeEach(() => {
    page = new SvcCalcExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

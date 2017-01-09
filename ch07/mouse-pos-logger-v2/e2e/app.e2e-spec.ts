import { MousePosLoggerPage } from './app.po';

describe('mouse-pos-logger App', function() {
  let page: MousePosLoggerPage;

  beforeEach(() => {
    page = new MousePosLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

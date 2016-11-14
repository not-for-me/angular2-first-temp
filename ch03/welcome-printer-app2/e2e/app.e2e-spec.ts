import { WelcomePrinterApp2Page } from './app.po';

describe('welcome-printer-app2 App', function() {
  let page: WelcomePrinterApp2Page;

  beforeEach(() => {
    page = new WelcomePrinterApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

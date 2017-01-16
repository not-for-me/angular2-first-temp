import { HumanResourceManagerPage } from './app.po';

describe('human-resource-manager App', function() {
  let page: HumanResourceManagerPage;

  beforeEach(() => {
    page = new HumanResourceManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

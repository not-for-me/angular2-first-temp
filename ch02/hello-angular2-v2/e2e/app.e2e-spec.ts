import { HelloAngular2V2Page } from './app.po';

describe('hello-angular2-v2 App', function() {
  let page: HelloAngular2V2Page;

  beforeEach(() => {
    page = new HelloAngular2V2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

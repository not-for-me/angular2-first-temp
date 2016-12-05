import { browser, element, by } from 'protractor';

export class CompLifecyclPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cl-root h1')).getText();
  }
}

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getQuoteForToday() {
    return element(by.css('app-root h1')).getText();
  }
}

import { AppPage } from './app.po';
import * as seeder from '../../backend/seed/seeder.js';

describe('App', () => {
  let page: AppPage;
  let quoteForToday;

  beforeAll(() => {
    page = new AppPage();
    quoteForToday = `${Math.random()}`;
    return seeder.seedFixture({ quote: [{ id: 'quote-for-today', text: quoteForToday }] });
  });

  it('should display quote for today fetched from the backend', () => {
    page.navigateTo();
    expect(page.getQuoteForToday()).toEqual(`Quote for today: "${quoteForToday}"`);
  });
});

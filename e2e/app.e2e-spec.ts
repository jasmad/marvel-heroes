import { MarvelHeroesPage } from './app.po';

describe('marvel-heroes App', function() {
  let page: MarvelHeroesPage;

  beforeEach(() => {
    page = new MarvelHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

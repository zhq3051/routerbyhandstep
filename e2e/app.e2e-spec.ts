import { RouterbyhandPage } from './app.po';

describe('routerbyhand App', function() {
  let page: RouterbyhandPage;

  beforeEach(() => {
    page = new RouterbyhandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

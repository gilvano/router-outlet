import { RouterOutletPage } from './app.po';

describe('router-outlet App', () => {
  let page: RouterOutletPage;

  beforeEach(() => {
    page = new RouterOutletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

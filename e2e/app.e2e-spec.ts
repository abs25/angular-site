import { AngularSitePage } from './app.po';

describe('angular-site App', () => {
  let page: AngularSitePage;

  beforeEach(() => {
    page = new AngularSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

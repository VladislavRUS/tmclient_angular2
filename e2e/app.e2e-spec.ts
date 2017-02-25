import { TmclientPage } from './app.po';

describe('tmclient App', () => {
  let page: TmclientPage;

  beforeEach(() => {
    page = new TmclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

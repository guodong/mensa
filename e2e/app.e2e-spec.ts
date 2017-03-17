import { MensaPage } from './app.po';

describe('mensa App', () => {
  let page: MensaPage;

  beforeEach(() => {
    page = new MensaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

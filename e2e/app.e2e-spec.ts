import { FnmReaderPage } from './app.po';

describe('fnm-reader App', () => {
  let page: FnmReaderPage;

  beforeEach(() => {
    page = new FnmReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

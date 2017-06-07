import { BonesUiPage } from './app.po';

describe('bones-ui App', () => {
  let page: BonesUiPage;

  beforeEach(() => {
    page = new BonesUiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

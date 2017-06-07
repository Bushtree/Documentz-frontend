import { DocumentzFrontendPage } from './app.po';

describe('documentz-frontend App', () => {
  let page: DocumentzFrontendPage;

  beforeEach(() => {
    page = new DocumentzFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

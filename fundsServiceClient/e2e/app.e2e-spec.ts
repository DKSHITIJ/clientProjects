import { FundsServiceClientPage } from './app.po';

describe('funds-service-client App', () => {
  let page: FundsServiceClientPage;

  beforeEach(() => {
    page = new FundsServiceClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

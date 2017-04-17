import { VeggieShoppingAppPage } from './app.po';

describe('veggie-shopping-app App', () => {
  let page: VeggieShoppingAppPage;

  beforeEach(() => {
    page = new VeggieShoppingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ApiGatewayExPage } from './app.po';

describe('api-gateway-ex App', function() {
  let page: ApiGatewayExPage;

  beforeEach(() => {
    page = new ApiGatewayExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

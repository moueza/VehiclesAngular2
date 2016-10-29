import { VehiclesAngular2Page } from './app.po';

describe('vehicles-angular2 App', function() {
  let page: VehiclesAngular2Page;

  beforeEach(() => {
    page = new VehiclesAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

const expect = require('expect-puppeteer');

describe('test left input', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/index.html');
  });

  afterAll(async () => {
    browser.close();
  });

  it('input "avan" should return no results', async () => {
    await expect(page).Match('fightmovie');
  });
  it.todo('input "avangers" should return 10 results',() => {});
});
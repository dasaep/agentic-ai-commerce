const { expect } = require('chai');

describe('E-commerce flow', () => {
  it('loads home page and shows products', async () => {
    await browser.url('http://localhost:3000');
    await expect(await $("h1=Store")).to.be.displayed;
    const items = await $$("div.item");
    expect(items.length).to.be.greaterThan(0);
  });

  it('opens product detail and adds to cart', async () => {
    await $("div.item a").click();
    await expect(await $("button=Add to Cart")).to.be.displayed;
    await $("button=Add to Cart").click();
    await browser.url('http://localhost:3000/cart');
    await expect(await $("h1=Cart")).to.be.displayed;
    await expect(await $('div')).to.have.textContaining('Example Product');
  });

  it('navigates to checkout', async () => {
    await browser.url('http://localhost:3000/checkout');
    await expect(await $("h1=Checkout")).to.be.displayed;
  });

  it('views account page', async () => {
    await browser.url('http://localhost:3000/account');
    await expect(await $("h1=My Account")).to.be.displayed;
  });
});

const { expect } = require('@wdio/globals');


describe('E-commerce flow', () => {
  it('loads home page and shows products', async () => {
    await browser.url('http://localhost:3000');
    await expect($("h1=Store")).toBeDisplayed();
    const items = await $$("div.item");
    expect(items.length).toBeGreaterThan(0);
  });

  it('opens product detail and adds to cart', async () => {
    await $("div.item a").click();
    await expect($("button=Add to Cart")).toBeDisplayed();
    await $("button=Add to Cart").click();
    await browser.url('http://localhost:3000/cart');
    await expect($("h1=Cart")).toBeDisplayed();
    await expect($('div')).toHaveTextContaining('Example Product');
  });

  it('navigates to checkout', async () => {
    await browser.url('http://localhost:3000/checkout');
    await expect($("h1=Checkout")).toBeDisplayed();
  });

  it('views account page', async () => {
    await browser.url('http://localhost:3000/account');
    await expect($("h1=My Account")).toBeDisplayed();
  });
});

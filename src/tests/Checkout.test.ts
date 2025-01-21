import Checkout from '../Checkout';
import { offers } from '../offers';

const prices = {
  ipd: 549.99,
  mbp: 1399.99,
  atv: 109.50,
  vga: 30.00,
};

describe('Checkout System', () => {
  it('calculates the total for 3 atv and 1 vga', () => {
    const co = new Checkout(offers, prices);

    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');

    expect(co.total()).toBe(249.00);
  });

  it('calculates the total for 2 atv, 5 ipd', () => {
    const co = new Checkout(offers, prices);

    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');

    expect(co.total()).toBe(2718.95);
  });

  it('applies no discount for 2 Apple TVs', () => {
    const co = new Checkout(offers, prices);

    co.scan('atv');
    co.scan('atv');

    expect(co.total()).toBe(219.00);
  });

  it('applies bulk discount for 5 Super iPads', () => {
    const co = new Checkout(offers, prices);

    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');

    expect(co.total()).toBe(2499.95);
  });
});

import Checkout from './Checkout';
import { offers } from './offers';

const prices = {
  ipd: 549.99,
  mbp: 1399.99,
  atv: 109.50,
  vga: 30.00,
};

const co = new Checkout(offers, prices);

co.scan('ipd');
co.scan('ipd');
co.scan('ipd');
co.scan('ipd');
co.scan('ipd');

console.log(`Total: $${co.total()}`);

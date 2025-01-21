"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Checkout {
    constructor(pricingRules, prices) {
        this.items = [];
        this.pricingRules = pricingRules;
        this.prices = prices;
    }
    scan(item) {
        this.items.push(item);
    }
    // here, i am assuming if the total function called then all the items have been added
    total() {
        let total = 0;
        const scannedItems = [...this.items];
        const itemsWithCount = {};
        for (const item of scannedItems) {
            if (!itemsWithCount[item]) {
                itemsWithCount[item] = 1;
            }
            else {
                itemsWithCount[item] += 1;
            }
        }
        for (const rule of this.pricingRules) {
            total += rule(itemsWithCount, this.prices);
        }
        for (const item in itemsWithCount) {
            const count = itemsWithCount[item];
            if (count > 0) {
                total += count * this.prices[item];
            }
        }
        return parseFloat(total.toFixed(2));
    }
}
exports.default = Checkout;

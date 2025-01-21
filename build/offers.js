"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offers = void 0;
const appleTVDeal = (items, prices) => {
    const atvCount = items['atv'];
    if (atvCount) {
        items.atv = Math.floor(atvCount % 3);
        return Math.floor(atvCount / 3) * 2 * prices["atv"];
    }
    return 0;
};
const ipadBulkDiscount = (items, prices) => {
    const ipdCount = items['ipd'];
    if (ipdCount > 4) {
        const discountedPrice = 499.99 * ipdCount;
        items['ipd'] = 0;
        return discountedPrice;
    }
    return 0;
};
exports.offers = [appleTVDeal, ipadBulkDiscount];

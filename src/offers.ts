import { PricingRule } from './types/PricingRule.type';

const appleTVDeal: PricingRule = (items, prices) => {
  const atvCount = items['atv'];
  if (atvCount) {
    items.atv = Math.floor(atvCount % 3)
    return Math.floor(atvCount / 3) * 2 * prices["atv"];
  }
  return 0;
};

const ipadBulkDiscount: PricingRule = (items, prices) => {
  const ipdCount = items['ipd'];
  if (ipdCount > 4) {
    const discountedPrice = 499.99 * ipdCount;
    items['ipd'] = 0;
    return discountedPrice;
  }
  return 0;
};

export const offers: PricingRule[] = [appleTVDeal, ipadBulkDiscount];

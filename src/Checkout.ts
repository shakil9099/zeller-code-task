import { PricingRule } from "./types/PricingRule.type";

class Checkout {
  private items: string[] = [];
  private pricingRules: PricingRule[];
  private prices: Record<string, number>;

  constructor(pricingRules: PricingRule[], prices: Record<string, number>) {
    this.pricingRules = pricingRules;
    this.prices = prices;
  }

  scan(item: string): void {
    this.items.push(item);
  }

  // here, assuming the "total" function called once all the items have been added
  total(): number {
    let total = 0;
    
    const scannedItems = [...this.items];

    const itemsWithCount: Record<string, number> = {}

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

export default Checkout;

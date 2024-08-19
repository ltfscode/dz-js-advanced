'use strict'

class Billing {
  #amount = 100
  calculateTotal() {
    return this.#amount
  }
}

class FixedBilling extends Billing {
  calculateTotal() {
    return super.calculateTotal()
  }
}

class HourBilling extends Billing {
  constructor(hours) {
    super()
    this.hours = hours
  }
  
  calculateTotal() {
    return this.hours * super.calculateTotal()
  }
}

class ItemBilling extends Billing {
  constructor(items) {
    super()
    this.items = items
  }

  calculateTotal() {
    return this.items * super.calculateTotal()
  }
}

const fixed = new FixedBilling()
const hour = new HourBilling(2)
const item = new ItemBilling(5)
console.log(fixed.calculateTotal());  // 2
console.log(hour.calculateTotal());  // 4
console.log(item.calculateTotal());  // 10

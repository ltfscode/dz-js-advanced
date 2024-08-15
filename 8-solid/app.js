'use strict'

class Billing {
  #amount = 100
  calculateTotal() {
    return this.#amount
  }
}

class FixedBilling extends Billing {
  calculateTotal() {
    return this.amount
  }
  constructor(billing) {
    super()
    this.amount = billing.amount
  }
}

class HourBilling extends Billing {
  constructor(hours) {
    super()
    this.hours = hours
  }

  calculateTotal() {
    return this.amount * this.hours
  }
}

class ItemBilling extends Billing {
  constructor(items) {
    super()
    this.items = items
  }

  calculateTotal() {
    return this.amount * this.items
  }
}

const fixed = new FixedBilling()
const hour = new HourBilling(2)
const item = new ItemBilling(5)
console.log(fixed.calculateTotal());  // 2
console.log(hour.calculateTotal());  // 4
console.log(item.calculateTotal());  // 10

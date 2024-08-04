class Car {
  #mark;
  #model;
  #mileage;

  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.#mileage = mileage;
  }


  get mileage() {
    return this.#mileage;
  }

  set mileage(value) {
    if (value >= 0) {
      this.#mileage = value;
    }
  }

  get carInfo() {
    return `${this.#mark} ${this.#model} ${this.#mileage}`
  }
}

const bmw = new Car('BMW', 'X5', 10000)
console.log(bmw.mileage);
console.log(bmw.mileage = 20000);
console.log(bmw.carInfo);
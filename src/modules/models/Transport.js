export default class Transport {
  constructor(id, model, producedYear, capacity, averageSpeed) {
    this.id = id;
    this.model = model;
    this.producedYear = producedYear;
    this.capacity = capacity;
    this.averageSpeed = averageSpeed;
  }

  set showCapacityInPounds(value) {
    this.capacity = `${this.capacity} ${value}`;
  }
}

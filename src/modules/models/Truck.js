import Transport from './Transport';

export default class Truck extends Transport {
  constructor(id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas) {
    super(id, model, producedYear, capacity, averageSpeed, licensePlate, typeOfGas);
    this.licensePlate = licensePlate;
    this.typeOfGas = typeOfGas;
  }

  set showAverageSpeed(value) {
    this.averageSpeed = `${this.averageSpeed} ${value}`;
  }
}

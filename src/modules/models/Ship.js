import Transport from './Transport';

export default class Ship extends Transport {
  constructor(id, model, producedYear, capacity, averageSpeed, serialNumber, countOfTeam) {
    super(id, model, producedYear, capacity, averageSpeed, serialNumber, countOfTeam);
    this.serialNumber = serialNumber;
    this.countOfTeam = countOfTeam;
  }

  set showAverageSpeed(value) {
    this.averageSpeed = `${this.averageSpeed} ${value}`;
  }
}

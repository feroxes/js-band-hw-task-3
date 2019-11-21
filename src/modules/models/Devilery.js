export default class Delivery {
  constructor(transportModel, cargoCost, distanceCost) {
    this.transportModel = transportModel;
    this.cargoCost = cargoCost;
    this.distanceCost = distanceCost;
  }
}

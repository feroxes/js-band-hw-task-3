// SCSS
import './assets/style/main.scss';
import './modules/handleFroms';
import Ship from './modules/models/Ship';
import Truck from './modules/models/Truck';
import Delivery from './modules/models/Devilery';

import { setList } from './modules/lists';
import { renderList } from './modules/renderList';

const localLists = {
  ship: JSON.parse(localStorage.getItem('shipList')),
  truck: JSON.parse(localStorage.getItem('truckList')),
  delivery: JSON.parse(localStorage.getItem('deliveryList')),
};

for (const key in localLists) {
  if (localLists[key]) {
    localLists[key].forEach((item) => {
      const list = [];
      if (key === 'ship') {
        list.push(new Ship(item.id, item.model, item.producedYear, item.capacity, item.averageSpeed, item.serialNumber, item.countOfTeam));
      } else if (key === 'truck') {
        list.push(new Truck(item.id, item.model, item.producedYear, item.capacity, item.averageSpeed, item.licensePlate, item.typeOfGas));
      } else {
        list.push(new Delivery(item.transportModel, item.cargoCost, item.distanceCost));
      }
      setList(key, list);
      renderList(key);
    });
  }
}

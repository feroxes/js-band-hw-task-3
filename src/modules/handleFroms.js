import Ship from './models/Ship';
import Truck from './models/Truck';
import Delivery from './models/Devilery';

import { shipList, truckList, deliveryList } from './lists';
import { renderList } from './renderList';

const forms = {
  shipForm: document.getElementById('shipFrom').elements,
  truckForm: document.getElementById('truckFrom').elements,
  deliveryForm: document.getElementById('deliveryForm').elements,
};

const buttons = {
  addShip: document.getElementById('addShip'),
  addTruck: document.getElementById('addTruck'),
  addDelivery: document.getElementById('addDelivery'),
};


const formatTransportKey = (str) => str.split('_')[1];

const clearForm = (formInputs) => {
  for (let i = 0, element; element = formInputs[i++];) {
    if (element.type === 'text') {
      element.value = '';
    }
  }
};

const addNewList = (e) => {
  e.preventDefault();
  const listName = e.target.name;
  const formInputs = forms[`${listName}Form`];
  const data = {};
  for (let i = 0, element; element = formInputs[i++];) {
    if (element.type === 'text') {
      data[formatTransportKey(element.name)] = element.value;
    }
  }
  const speed = listName === 'ship' ? 'nm' : 'km';

  if (listName === 'ship') {
    const ship = new Ship(data.id, data.model, data.producedYear, data.capacity, data.averageSpeed, data.serialNumber, data.countOfTeam);
    ship.showCapacityInPounds = 'pounds';
    ship.showAverageSpeed = speed;
    shipList.push(ship);
  } else if (listName === 'truck') {
    const truck = new Truck(data.id, data.model, data.producedYear, data.capacity, data.averageSpeed, data.licensePlate, data.typeOfGas);
    truck.showCapacityInPounds = 'pounds';
    truck.showAverageSpeed = speed;
    truckList.push(truck);
  } else {
    const delivery = new Delivery(data.transportModel, data.cargoCost, data.distanceCost);
    deliveryList.push(delivery);
  }
  clearForm(formInputs);
  renderList(listName);
};

for (const key in buttons) {
  buttons[key].addEventListener('click', addNewList);
}

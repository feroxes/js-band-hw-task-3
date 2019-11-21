class LocalStorage {
  getLocalList() {
    return {
      ship: JSON.parse(localStorage.getItem('shipList')),
      truck: JSON.parse(localStorage.getItem('truckList')),
      delivery: JSON.parse(localStorage.getItem('deliveryList')),
    };
  }

  saveItemToStorage(list, listName) {
    localStorage.setItem(`${listName}List`, JSON.stringify(list));
  }
}

const instance = new LocalStorage();
Object.freeze(instance);

export default instance;

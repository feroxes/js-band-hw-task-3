import { shipList, truckList, deliveryList } from './lists';


const lists = {
  shipListElement: document.getElementById('ship_list'),
  shipList,
  truckListElement: document.getElementById('truck_list'),
  truckList,
  deliveryListElement: document.getElementById('delivery_list'),
  deliveryList,
};

const createElement = (element, config, where) => {
  const tag = document.createElement(element);
  Object.assign(tag, config);
  where.appendChild(tag);
  return tag;
};

const removeChildren = (elem) => {
  elem.innerHTML = '';
};

const saveItemToStorage = (listName) => {
  const list = lists[`${listName}List`];
  localStorage.setItem(`${listName}List`, JSON.stringify(list));
};

export const renderList = (listName) => {
  const list = lists[`${listName}ListElement`];
  removeChildren(list);
  lists[`${listName}List`].forEach((item) => {
    const listWrapper = createElement('ul', { className: 'form-list' }, list);
    for (const key in item) {
      createElement('li', { innerHTML: `${key} - ${item[key]}` }, listWrapper);
    }
  });
  saveItemToStorage(listName);
};

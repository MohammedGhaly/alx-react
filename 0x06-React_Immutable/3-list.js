import { List } from 'immutable';

export function getListObject (array) {
  return new List(array);
}

export function addElementToList (list, element) {
  list.push(element);
  return list;
}

import { Map } from 'immutable';

export default function getImmutableObject (obj) {
  return new Map(obj);
}

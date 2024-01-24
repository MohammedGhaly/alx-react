import { Map } from "immutable";

export default function accessImmutableObject(object, array) {
  return new Map(object).getIn(array);
}

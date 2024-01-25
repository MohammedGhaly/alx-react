import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((s) => {
    return s.score > 70;
  });

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const obj = filtered.toJS();

  Object.keys(obj).map((key) => {
    obj[key].firstName = capFirstLetter(obj[key].firstName);
    obj[key].lastName = capFirstLetter(obj[key].lastName);
    return obj[key];
  });

  console.log(obj);
}

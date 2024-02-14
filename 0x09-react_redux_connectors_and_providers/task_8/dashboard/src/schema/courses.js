import { schema, normalize } from "normalizr";

const courses = new schema.Entity("courses");

export function coursesNormalizer(data) {
  const normalizedData = normalize(data, [courses]);
  return normalizedData.entities.courses;
}

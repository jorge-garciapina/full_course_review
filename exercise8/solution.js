function flattenImperative(oldObject, parentName) {
  if (typeof oldObject !== "object" || oldObject === null) {
    throw new Error("Input must be an object");
  }

  let result = {};

  for (let key in oldObject) {
    if (!oldObject.hasOwnProperty(key)) continue;

    if (Array.isArray(oldObject[key])) {
      result[parentName + "_" + key] = oldObject[key];
    } else if (typeof oldObject[key] === "object" && oldObject[key] !== null) {
      let nestedObject = flattenImperative(
        oldObject[key],
        parentName + "_" + key
      );
      for (let nestedKey in nestedObject) {
        result[nestedKey] = nestedObject[nestedKey];
      }
    } else {
      result[parentName + "_" + key] = oldObject[key];
    }
  }

  return result;
}

module.exports = flattenImperative;

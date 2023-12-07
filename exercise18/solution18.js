function set(obj, path, value) {
  if (typeof path !== "string") {
    throw new Error("Path must be a string");
  }

  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
      return;
    }

    if (!current[key] || typeof current[key] !== "object") {
      if (current[key] !== undefined && current[key] !== null) {
        throw new Error(`Cannot create property '${key}' on non-object value`);
      }
      current[key] = {};
    }

    current = current[key];
  }
}

module.exports = set;

// function set(obj, path, value) {
//   if (typeof path !== "string") {
//     throw new Error("Path must be a string");
//   }

//   const keys = path.split(".");
//   let current = obj;

//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];

//     // Check if we're at the last key
//     if (i === keys.length - 1) {
//       current[key] = value;
//       return;
//     }

//     // If the key does not exist or is not an object, create it
//     if (!current[key] || typeof current[key] !== "object") {
//       if (current[key] !== undefined && current[key] !== null) {
//         throw new Error(`Cannot create property '${key}' on non-object value`);
//       }
//       current[key] = {};
//     }

//     current = current[key];
//   }
// }

// // Example usage
// const obj = {};
// set(obj, "path.to.deeply.nested.property", 42);

// // Use JSON.stringify to convert the object to a string
// // The arguments null and 2 are for formatting purposes
// console.log(JSON.stringify(obj, null, 2));

// const obj1 = { path: { to: "not an object" } };

// try {
//   set(obj1, "path.to.deeply.nested.property", 42);
// } catch (e) {
//   console.error(e.message); // Should display an error message
// }

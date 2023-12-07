const flattenImperative = require("./solution");

describe("flattenImperative", () => {
  test("flattens an object with nested objects and arrays correctly", () => {
    const oldObj = {
      name: "Sara",
      gender: "Apache Attack Helicopter",
      address: {
        location: {
          city: "SF",
          state: "CA",
        },
        preferredLocation: {
          city: "SF",
          state: ["CA", "MN"],
        },
        other: undefined,
      },
    };

    const expectedResult = {
      oldObj_name: "Sara",
      oldObj_gender: "Apache Attack Helicopter",
      oldObj_address_location_city: "SF",
      oldObj_address_location_state: "CA",
      oldObj_address_preferredLocation_city: "SF",
      oldObj_address_preferredLocation_state: ["CA", "MN"],
      oldObj_address_other: undefined,
    };

    expect(flattenImperative(oldObj, "oldObj")).toEqual(expectedResult);
  });

  test("handles empty objects", () => {
    expect(flattenImperative({}, "emptyObj")).toEqual({});
  });

  test("handles non-object inputs gracefully", () => {
    expect(() => flattenImperative(null, "nullObj")).toThrow();
    expect(() => flattenImperative(undefined, "undefinedObj")).toThrow();
    expect(() => flattenImperative(42, "numberObj")).toThrow();
    expect(() => flattenImperative("string", "stringObj")).toThrow();
  });
});

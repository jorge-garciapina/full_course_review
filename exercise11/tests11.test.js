const querySelectorAllEnhanced = require("./querySelectorAllEnhanced");
const { JSDOM } = require("jsdom");

describe("querySelectorAllEnhanced", () => {
  let document;

  // Setup a DOM environment before each test
  beforeEach(() => {
    const dom = new JSDOM(`
        <section>
            <div id="1" class="note"><input type="checkbox" class="is-complete" checked> </div>
            <div id="2" class="note"></div>
            <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
            <div id="4" class="note"></div>
            <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
        </section>
        `);
    document = dom.window.document;
  });

  // Test cases
  test("should select parents of checked .is-complete inputs within .note elements", () => {
    const results = querySelectorAllEnhanced(
      "div.note < input.is-complete[checked]",
      document
    );
    expect(results.length).toBe(3);
    expect(results[0].id).toBe("1");
    expect(results[1].id).toBe("3");
    expect(results[2].id).toBe("5");
  });

  test("should return an empty array for non-matching selectors", () => {
    const results = querySelectorAllEnhanced(
      "div.note < input.non-existent",
      document
    );
    expect(results).toEqual([]);
  });

});

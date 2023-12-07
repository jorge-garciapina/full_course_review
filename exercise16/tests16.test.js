const { ListNode, LinkedList } = require("./solution16");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("adds nodes correctly", () => {
    list.add(1);
    list.add(2);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
  });

  test("creates a loop and finds the start of the loop", () => {
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.add(3);
    list.add(6);
    list.add(7);
    list.add(2);
    list.add(1);
    list.createLoop(3);

    const loopStart = list.findLoopStart();
    expect(loopStart.value).toBe(3);
  });

  test("returns null when there is no loop", () => {
    list.add(1);
    list.add(2);

    const loopStart = list.findLoopStart();
    expect(loopStart).toBeNull();
  });
});

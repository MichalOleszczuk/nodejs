import { Stack } from "../../../../src/dataStructures/stack/stack";

describe("Data Structure: Stack", () => {
  const element1 = { name: "element1" };
  const element2 = { name: "element2" };
  const element3 = { name: "element3" };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check Push", async () => {
    const stack = new Stack();

    stack.push(element1);
    expect(stack.length()).toEqual(1);

    stack.push(element2);
    expect(stack.length()).toEqual(2);

    stack.push(element3);
    expect(stack.length()).toEqual(3);
  }, 10000);

  it("Check Peek", async () => {
    const stack = new Stack();

    stack.push(element1);
    stack.push(element2);
    expect(stack.peek().name).toEqual(element2.name);
  }, 10000);

  it("Check Pop", async () => {
    const stack = new Stack();

    stack.push(element1);
    expect(stack.length()).toEqual(1);
    expect(stack.pop().name).toEqual(element1.name);
    expect(stack.length()).toEqual(0);
  }, 10000);
});

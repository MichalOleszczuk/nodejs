import { Queue } from "../../../../src/data-structures/queue/queue";

describe("Data Structure: Queue", () => {
  const element1 = { name: "element1" };
  const element2 = { name: "element2" };
  const element3 = { name: "element3" };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check enQueue", async () => {
    const queue = new Queue<typeof element1>();

    queue.enQueue(element1);
    expect(queue.size()).toEqual(1);

    queue.enQueue(element2);
    expect(queue.size()).toEqual(2);

    queue.enQueue(element3);
    expect(queue.size()).toEqual(3);
  }, 10000);

  it("Check deQueue", async () => {
    const queue = new Queue<typeof element1>();

    queue.enQueue(element1);
    queue.enQueue(element2);
    expect(queue.deQueue().name).toEqual(element1.name);
    expect(queue.deQueue().name).toEqual(element2.name);
  }, 10000);

  it("Check front", async () => {
    const queue = new Queue<typeof element1>();

    queue.enQueue(element1);
    queue.enQueue(element2);
    queue.enQueue(element3);

    expect(queue.size()).toEqual(3);
    expect(queue.front().name).toEqual(element1.name);
    expect(queue.size()).toEqual(3);

    expect(queue.front().name).toEqual(element1.name);
    expect(queue.size()).toEqual(3);
  }, 10000);

  it("Check isEmpty", async () => {
    const queue = new Queue<typeof element1>();

    queue.enQueue(element1);
    queue.enQueue(element2);
    queue.enQueue(element3);

    expect(queue.size()).toEqual(3);
    expect(queue.front().name).toEqual(element1.name);
    queue.deQueue();
    expect(queue.size()).toEqual(2);

    expect(queue.front().name).toEqual(element2.name);
    queue.deQueue();
    expect(queue.size()).toEqual(1);

    expect(queue.front().name).toEqual(element3.name);
    queue.deQueue();
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);
  }, 10000);
});

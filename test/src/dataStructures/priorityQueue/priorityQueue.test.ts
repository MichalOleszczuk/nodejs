import { PriorityQueue } from "../../../../src/dataStructures/priorityQueue/priorityQueue";

describe("Data Structure: PriorityQueue", () => {
  const element1 = { name: "element1", priority: 1 };
  const element2 = { name: "element2", priority: 2 };
  const element3 = { name: "element3", priority: 3 };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check enQueue", async () => {
    const priorityQueue = new PriorityQueue<typeof element1>();

    priorityQueue.enQueue(element1);
    expect(priorityQueue.size()).toEqual(1);

    priorityQueue.enQueue(element2);
    expect(priorityQueue.size()).toEqual(2);

    priorityQueue.enQueue(element3);
    expect(priorityQueue.size()).toEqual(3);
  }, 10000);

  it("Check deQueue", async () => {
    const priorityQueue = new PriorityQueue<typeof element1>();

    priorityQueue.enQueue(element1);
    priorityQueue.enQueue(element2);
    expect(priorityQueue.deQueue().name).toEqual(element1.name);
    expect(priorityQueue.deQueue().name).toEqual(element2.name);
  }, 10000);

  it("Check front", async () => {
    const priorityQueue = new PriorityQueue<typeof element1>();

    priorityQueue.enQueue(element1);
    priorityQueue.enQueue(element2);
    priorityQueue.enQueue(element3);

    expect(priorityQueue.size()).toEqual(3);
    expect(priorityQueue.front().name).toEqual(element1.name);
    expect(priorityQueue.size()).toEqual(3);

    expect(priorityQueue.front().name).toEqual(element1.name);
    expect(priorityQueue.size()).toEqual(3);
  }, 10000);

  it("Check isEmpty", async () => {
    const priorityQueue = new PriorityQueue<typeof element1>();

    priorityQueue.enQueue(element1);
    priorityQueue.enQueue(element2);
    priorityQueue.enQueue(element3);

    expect(priorityQueue.size()).toEqual(3);
    expect(priorityQueue.front().name).toEqual(element1.name);
    priorityQueue.deQueue();
    expect(priorityQueue.size()).toEqual(2);

    expect(priorityQueue.front().name).toEqual(element2.name);
    priorityQueue.deQueue();
    expect(priorityQueue.size()).toEqual(1);

    expect(priorityQueue.front().name).toEqual(element3.name);
    priorityQueue.deQueue();
    expect(priorityQueue.size()).toEqual(0);
    expect(priorityQueue.isEmpty()).toEqual(true);
  }, 10000);

  it("Check Priorities", async () => {
    const elementPriority2 = { name: "element1", priority: 2 };
    const elementPriority1 = { name: "element2", priority: 1 };
    const elementPriority99 = { name: "element3", priority: 99 };

    const priorityQueue = new PriorityQueue<typeof elementPriority2>();

    priorityQueue.enQueue(elementPriority2);
    priorityQueue.enQueue(elementPriority1);
    priorityQueue.enQueue(elementPriority99);

    const allItems = priorityQueue.getAllItems();
    expect(allItems.length).toEqual(3);
    expect(allItems[0].priority).toEqual(elementPriority1.priority);
    expect(allItems[1].priority).toEqual(elementPriority2.priority);
    expect(allItems[2].priority).toEqual(elementPriority99.priority);

    expect(priorityQueue.size()).toEqual(3);
    expect(priorityQueue.front().name).toEqual(elementPriority1.name);
    priorityQueue.deQueue();
    expect(priorityQueue.size()).toEqual(2);

    expect(priorityQueue.front().name).toEqual(elementPriority2.name);
    priorityQueue.deQueue();
    expect(priorityQueue.size()).toEqual(1);

    expect(priorityQueue.front().name).toEqual(elementPriority99.name);
    priorityQueue.deQueue();
    expect(priorityQueue.size()).toEqual(0);
    expect(priorityQueue.isEmpty()).toEqual(true);
  }, 10000);
});

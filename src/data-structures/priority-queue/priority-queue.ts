export interface IPriorityQueueItem {
  priority: number;
  [key: string]: any;
}

export class PriorityQueue<TItem extends IPriorityQueueItem> {
  private storage: Array<TItem> = [];

  /**
   * @description Enter queue, add an element at the end.
   */
  public enQueue(value: TItem) {
    if (this.isEmpty()) {
      this.storage.push(value);
      return;
    }

    let added = false;
    for (const [index, item] of Object.entries(this.storage)) {
      if (value.priority < item.priority) {
        this.storage.splice(parseInt(index, 10), 0, value);
        added = true;
        break;
      }
    }

    if (!added) {
      this.storage.push(value);
    }
  }

  /**
   * @description Leave queue, remove the front element and return it.
   */
  public deQueue(): TItem {
    return this.storage.shift();
  }

  /**
   * @description Get the first element in front.
   */
  public front(): TItem {
    return this.storage[0];
  }

  /**
   * @description Determine whether the queue is empty.
   */
  public isEmpty(): boolean {
    return !this.storage.length;
  }

  /**
   * @description Get the number of element(s) in queue.
   */
  public size(): number {
    return this.storage.length;
  }

  /**
   * @description Prints all queue elements.
   */
  public print(): void {
    for (const [index, item] of Object.entries(this.storage)) {
      // eslint-disable-next-line no-console
      console.log(`Item index: ${index}, ${JSON.stringify(item)}`);
    }
  }

  /**
   * @description Returns entire queue.
   */
  public getAllItems(): Array<IPriorityQueueItem> {
    return this.storage;
  }
}

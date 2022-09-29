export class Queue<TItem = unknown> {
  private storage: Array<TItem> = [];

  /**
   * @description Enter queue, add an element at the end.
   */
  public enQueue(value: TItem) {
    this.storage.push(value);
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
}

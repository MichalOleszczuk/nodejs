export class Stack {
  private count = 0;
  private storage = {};

  public push(value: unknown) {
    this.storage[this.count] = value;
    this.count++;
  }

  public pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
  }

  public peek() {
    return this.storage[this.count - 1];
  }

  public length() {
    return this.count;
  }
}

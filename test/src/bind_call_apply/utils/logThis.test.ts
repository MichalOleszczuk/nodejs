/* eslint-disable no-console */
import { logThis } from "../../../../src/bind_call_apply/utils/logThis";

describe("bind_call_apply utils logThis", () => {
  const mockNumbers = [5, 6, 2, 3, 7];

  const mockClass1 = {
    name: "class1Name",
  };

  const mockClass2 = {
    name: "class2Name",
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check name 1", async () => {
    console.log = jest.fn();
    const logResult = logThis.apply(mockClass1, mockNumbers);

    expect(logResult).toBeDefined();
    expect(typeof logResult).toBe("object");
    expect(Array.isArray(logResult)).toBe(true);
    expect(logResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check name 2", async () => {
    console.log = jest.fn();
    const logResult = logThis.apply(mockClass2, mockNumbers);

    expect(logResult).toBeDefined();
    expect(typeof logResult).toBe("object");
    expect(Array.isArray(logResult)).toBe(true);
    expect(logResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass2.name, ...mockNumbers);
  }, 10000);

  it("Check no name", async () => {
    console.log = jest.fn();
    const logResult = logThis.apply({}, mockNumbers);

    expect(logResult).toBeDefined();
    expect(typeof logResult).toBe("object");
    expect(Array.isArray(logResult)).toBe(true);
    expect(logResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(undefined, ...mockNumbers);
  }, 10000);

  it("Check no apply", async () => {
    console.log = jest.fn();
    const logResult = logThis(mockNumbers);

    expect(logResult).toBeDefined();
    expect(typeof logResult).toBe("object");
    expect(Array.isArray(logResult)).toBe(true);
    expect((logResult[0] as Array<number>).length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(undefined, mockNumbers);
  }, 10000);
});

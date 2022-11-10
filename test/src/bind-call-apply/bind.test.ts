/* eslint-disable prefer-spread */
/* eslint-disable no-console */
import "../../../src/bind-call-apply/bind";
import { logThis } from "../../../src/utils/log-this";
import {
  mockClass1,
  mockClass2,
  mockFirstTwo,
  mockNumbers,
  mockRest,
} from "./bind-call-apply.mock";

describe("bind_call_apply bind", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check mockClass1 bind", async () => {
    console.log = jest.fn();
    const bindResult = logThis.bind(mockClass1, ...mockFirstTwo)(...mockRest);

    expect(bindResult).toBeDefined();
    expect(typeof bindResult).toBe("object");
    expect(Array.isArray(bindResult)).toBe(true);
    expect(bindResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass2 bind", async () => {
    console.log = jest.fn();
    const bindResult = logThis.bind(mockClass2, ...mockRest)(...mockFirstTwo);

    expect(bindResult).toBeDefined();
    expect(typeof bindResult).toBe("object");
    expect(Array.isArray(bindResult)).toBe(true);
    expect(bindResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(
      mockClass2.name,
      ...mockRest,
      ...mockFirstTwo
    );
  }, 10000);

  it("Check mockClass1 bind2", async () => {
    console.log = jest.fn();
    const bindResult = logThis.bind2(mockClass1, ...mockFirstTwo)(...mockRest);

    expect(bindResult).toBeDefined();
    expect(typeof bindResult).toBe("object");
    expect(Array.isArray(bindResult)).toBe(true);
    expect(bindResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass2 bind2", async () => {
    console.log = jest.fn();
    const bindResult = logThis.bind2(mockClass2, ...mockRest)(...mockFirstTwo);

    expect(bindResult).toBeDefined();
    expect(typeof bindResult).toBe("object");
    expect(Array.isArray(bindResult)).toBe(true);
    expect(bindResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(
      mockClass2.name,
      ...mockRest,
      ...mockFirstTwo
    );
  }, 10000);

  it("Check mockClass1 bindES5", async () => {
    console.log = jest.fn();
    const bindResult = logThis.bind2ES5(
      mockClass1,
      ...mockFirstTwo
    )(...mockRest);

    expect(bindResult).toBeDefined();
    expect(typeof bindResult).toBe("object");
    expect(Array.isArray(bindResult)).toBe(true);
    expect(bindResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass2 bindES5", async () => {
    console.log = jest.fn();
    const bindResult = logThis.bind2ES5(
      mockClass2,
      ...mockRest
    )(...mockFirstTwo);

    expect(bindResult).toBeDefined();
    expect(typeof bindResult).toBe("object");
    expect(Array.isArray(bindResult)).toBe(true);
    expect(bindResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(
      mockClass2.name,
      ...mockRest,
      ...mockFirstTwo
    );
  }, 10000);
});

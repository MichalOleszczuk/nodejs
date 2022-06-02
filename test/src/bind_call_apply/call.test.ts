/* eslint-disable no-useless-call */
/* eslint-disable prefer-spread */
/* eslint-disable no-console */
import "../../../src/bind_call_apply/call";
import { logThis } from "../../../src/bind_call_apply/utils/logThis";
import {
  add,
  mockClass1,
  mockClass2,
  mockFirstTwo,
  mockFoodCategory,
  mockFoodName,
  mockFoodPrice,
  mockNumbers,
  Product,
} from "./bindCallApply.mock";

describe("bind_call_apply call", () => {
  function mockCallFood(name: string, price: number) {
    Product.call(this, name, price);
    this.category = "food";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function mockCall2Food(name: string, price: number) {
    Product.call2(this, name, price);
    this.category = "food";
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check mockClass1 call", async () => {
    console.log = jest.fn();
    const callResult = logThis.call(mockClass1, ...mockNumbers);

    expect(callResult).toBeDefined();
    expect(typeof callResult).toBe("object");
    expect(Array.isArray(callResult)).toBe(true);
    expect(callResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass2 call", async () => {
    console.log = jest.fn();
    const callResult = logThis.call(mockClass2, ...mockNumbers);

    expect(callResult).toBeDefined();
    expect(typeof callResult).toBe("object");
    expect(Array.isArray(callResult)).toBe(true);
    expect(callResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass2.name, ...mockNumbers);
  }, 10000);

  it("Check Constructor call", async () => {
    const callResult = new mockCallFood(mockFoodName, mockFoodPrice);

    expect(callResult).toBeDefined();
    expect(typeof callResult).toBe("object");
    expect(callResult.category).toEqual(mockFoodCategory);
    expect(callResult.name).toEqual(mockFoodName);
    expect(callResult.price).toEqual(mockFoodPrice);
  }, 10000);

  it("Check Add function call with {}", async () => {
    console.log = jest.fn();
    const callResult = add.call({}, ...mockFirstTwo);

    expect(callResult).toBeDefined();
    expect(typeof callResult).toBe("number");
    expect(callResult).toEqual(11);
  }, 10000);

  it("Check Add function call with null", async () => {
    console.log = jest.fn();
    const callResult = add.call(null, ...mockNumbers);

    expect(callResult).toBeDefined();
    expect(typeof callResult).toBe("number");
    expect(callResult).toEqual(11);
  }, 10000);
});

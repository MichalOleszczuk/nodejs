export const mockNumbers = [5, 6, 2, 3, 7];

export const mockClass1 = {
  name: "class1Name",
};

export const mockClass2 = {
  name: "class2Name",
};

export const mockFirstTwo = mockNumbers.slice(0, 2);
export const mockRest = mockNumbers.slice(2, mockNumbers.length + 1);

export function Product(name: string, price: number) {
  this.name = name;
  this.price = price;
}

export const mockFoodCategory = "food";
export const mockFoodName = "cheese";
export const mockFoodPrice = 5;

export function mockCall2Food(name: string, price: number) {
  Product.call2(this, name, price);
  this.category = mockFoodCategory;
}

export const add = (a: number, b: number) => a + b;

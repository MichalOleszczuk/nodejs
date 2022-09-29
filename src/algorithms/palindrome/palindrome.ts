export function checkPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

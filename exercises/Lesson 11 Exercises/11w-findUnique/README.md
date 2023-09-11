## Summary

The `findIndex` function takes an array and a word as inputs and returns the index of the first occurrence of the word in the array. If the word is not found, it returns -1.

## Example Usage

```javascript
const array = ["apple", "banana", "orange"]
const word = "banana"
const index = findIndex(array, word)
console.log(index) // Output: 1
```

## Code Analysis

### Inputs

- `array` (array): The array in which to search for the word.
- `word` (string): The word to search for in the array.

---

### Flow

1. Iterate over each element in the array using a for loop.
2. Compare each element with the word.
3. If a match is found, return the index of the element.
4. If no match is found, return -1.

---

### Outputs

- `index` (number): The index of the first occurrence of the word in the array. If the word is not found, returns -1.

---

## Summary

The `unique` function takes an array as input and returns a new array with only the unique elements from the input array.

## Example Usage

```javascript
console.log(unique(["green", "red", "blue", "red"]))
// Output: ["green", "red", "blue"]

console.log(unique(["green", "red", "blue", "red", "green"]))
// Output: ["green", "red", "blue"]
```

## Code Analysis

### Inputs

- `array` (array): The input array from which unique elements need to be extracted.

---

### Flow

1. Create an empty array called `result` to store the unique elements.
2. Iterate over each element in the input `array`.
3. For each element, check if it already exists in the `result` array by calling the `findIndex` function.
4. If the element does not exist in the `result` array (i.e., `findIndex` returns -1), push it to the `result` array.
5. Repeat steps 3-4 for all elements in the input `array`.
6. Return the `result` array containing only the unique elements.

---

### Outputs

- `result` (array): An array containing only the unique elements from the input array.

---

function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 4, 5];
  const resultArray = extractElements(inputArray);
  console.log(resultArray); // Output: [1, 2, 5]
  
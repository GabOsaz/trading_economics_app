/* eslint-disable no-plusplus */

// Constructs an array of length n
function constructArray(length: number) {
  let constructedArray: number[] = [];
  for (let index = 0; index < length; index++) {
    constructedArray = [...constructedArray, index];
  }
  return constructedArray;
}

export default constructArray;

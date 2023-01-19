/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/

const names1 = ['Anastasia', 'Svetlana', 'Nikita', 'Viktar', 'Egor'];
const names2 = ['Svetlana', 'Egor', 'Nikita'];

// update only this function
function findInterception(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    for (let y=0; y<arr2.length; y++) {
      if (arr1[i]==arr2[y]) {
        arr1.splice(i,i);
      }
    }
  }
  return arr1;
}

console.log(findInterception(names1, names2));

module.exports = {
  names1,
  names2,
  findInterception,
};
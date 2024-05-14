const array = [1, 2, 3, 8, 9, 12, 43, 56, 430];
const item = 12;

function binarySearch (array, item) {
let min = 0;
let max = array.length - 1;

while (min <= max){
   const mid = (low + hight) / 2;
   const guess = array[mid];
   if(guess > item){
    max = mid - 1;
    break;
   }
   else if(guess < item){
    min = mid + 1;
    break;
   }
   else if(guess === item){
    return mid;
   }
   return null;
}
}
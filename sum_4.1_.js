const array = [1, 2, 3, 4, 5 ,6];

const sum = (array) =>{
if(array.length === 0){
    return 0;
}
else{
    const lastNumb = array[array.length -1];
    array.pop();
    return lastNumb + sum(array);
}
}
console.log(sum(array));
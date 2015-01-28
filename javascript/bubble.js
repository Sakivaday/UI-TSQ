//bubble sort


var x = [300,100,150,5,30,20,34,10,200,50,75,250];

function bubbleSort(array) {
	
var i, j;
for (i = 0; i < array.length; i++) {
for (j = i+1; j < array.length; j++) {
if (array[i] > array[j]) {
var y = array[j];
array[j] = array[i];
array[i] =  y;
}
}
}
return array;
}
console.log(bubbleSort(x));

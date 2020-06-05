var arr = [ 4, 88, -32, 1, 9, 18, 98, -69, 45, 15, 25, 50, 70, 5, -14, 2, 5, 9,
		-10, 31 ];

function sorting(a, b) {
	return a - b;
}

arr.sort(sorting);
console.log(arr);

arr.reverse();
console.log(arr);

function filterPos(f) {
	return f >= 0;
} 

function filterNeg(f) {
	return f < 0;
} 
console.log(arr.filter(filterPos));

console.log(arr.filter(filterNeg));
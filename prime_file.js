function checkPrime(number){
	let factorial = 0;
	for(let i=1; i<=num; i++){
		if(num%i==0){
			fact++;
		}
	}

	return factorial;
}

let number = 13;
let ans = checkPrime(number);
if(ans == 2){
	console.log(number,"is a Prime Number");
}else{
	console.log(number,"is Not a Prime Number");
}
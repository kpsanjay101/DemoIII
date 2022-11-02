function checkPrime(num){
	let fact = 0;
	for(let i=1; i<=num; i++){
		if(num%i){
			fact++;
		}
	}

	return fact;
}

let ans = checkPrime(13);
if(ans == true){
	console.log("Prime");
}else{
	console.log("Not Prime");
}
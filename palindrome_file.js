function isPalindrome(str){
	let bag = "";
	for(let i=str.length-1; i>=0; i--){
		bag += str[i];
	}
	return bag;
}

let string = "naman";

let ans = isPalindrome(string);
if(ans == string){
	console.log("Palindrome");
}else{
	console.log(Not a Palindrome);
}

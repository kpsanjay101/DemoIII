function isPalindrome(String){
	let bag = "";
	for(let i=str.length-1; i>=0; i--){
		bag += str[i];
	}
	return bag;
}

let String = "naman";

let ans = isPalindrome(String);
if(ans == String){
	console.log(String, "is a Palindrome");
}else{
	console.log(String, "is Not a Palindrome");
}

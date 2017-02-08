// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function stackLetters() {
	var letters = "";
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	for (var i = 0; i < alphabet.length; i++) {
	letters += alphabet[i];
	console.log(letters);
  }		
}
stackLetters();

// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// function stackLetters() {
//   var letters = "";
//   var spaces = "";
//   for (var i = 0; i < alphabet.length; i++) {
//     letters += alphabet[i];
//     spaces = letters.replace(/\s/g, "");
//     if (spaces.length % 3 === 0) {
//       letters += " ";
//     } else {
//       console.log(letters);
//     }
//   }
// } 
// stackLetters();
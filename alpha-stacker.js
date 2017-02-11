<<<<<<< HEAD
// function stackLetters() {
// 	var letters = "";
// 	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// 	for (var i = 0; i < alphabet.length; i++) {
// 	letters += alphabet[i];
// 	console.log(letters);
//   }		
// }
// stackLetters();
=======
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
>>>>>>> a70f3ff9ae08d8bf528453dc51c5e58c4dc1f985

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function stackLetters() {
  var letters = "";
<<<<<<< HEAD
  
  for (var counter = 0; counter < alphabet.length; counter++) {
    if (counter % 3 === 0) {
      letters += " ";
    } letters += alphabet[counter]; 
      console.log(letters);
    }
  }
stackLetters(alphabet);
=======
  var spaces = "";
  for (var i = 0; i < alphabet.length; i++) {
    letters += alphabet[i];
    spaces = letters.replace(/\s/g, "");
    if (spaces.length % 3 === 0) {
      letters += " ";
    } else {
      console.log(letters);
    }
  }
} 
stackLetters();
>>>>>>> a70f3ff9ae08d8bf528453dc51c5e58c4dc1f985

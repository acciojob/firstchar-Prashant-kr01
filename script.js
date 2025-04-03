function firstChar(text) {
  // your code here
	  let trimedtext = text.trimStart();
	
	 if (trimedtext.length === 0) {
        return ''; 
     }
	return  trimedtext[0];
}
       


// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));



// var addNumbers

 	var addNumbers = function(string) {

 			var str = string.split(" ");
 			var numbers = [];
 			var result = str.map(function(str){
 					//var total =+ numbers.push(parseInt(str)); 
 					//var total = (numbers[this] + total);
 					numbers.push(parseInt(str));
 					//console.log(total);
 				});
 			
 			var resultAdd = numbers.reduce(function(num1, num2){
 					return num1 + num2;
 			});
 			return resultAdd;

 	};

// Longest Word
 	var longestWord = function(string) {

    var str = string.split(" ");
    
    longest = str[0].length;
    longestWord = str[0];

    for (var i = 1; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            longestWord= str[i];
           }
        }
        
	return longestWord;
	};

 


$(document).on('ready', function() {
 

 //console.log(longestWord("How are you doing here"));
 console.log(addNumbers("88Hello 3World!"));


});
/* 1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223	*/



var reverse= function(num)
{
  var  rev = 0, remainder=0;
 
   while (num > 0)
   {
      remainder = num % 10;
      rev = rev * 10 + remainder;
      num = num / 10;
   }
}
reverse(234);


/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

var palindrome = funtcion(string)
{
  var str[10];
  var i, j, count=0,length=0;
  for(i=0; str[i] !== '/0' ; i++)
    {
      length++;
    }
  i=0;
  j=length;
  while(i<j)
    {
      if(str[i] !== str[j])
        {
          count=1;
          
        }
      i++;
      j--;
    
      if( count === 0)
        {console.log("number is palindrome");}
      else
        {console.log("not palidrome");}
    }
  
}
palindrome("madam");



/* 3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
*/


/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster' 
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/
function alphabet_order(str)  
  {  
return str.split('').sort().join('');  
  }  
console.log(alphabet_order("webmaster")); 

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
*/
function alphabet(str)
{

 return str.charAt(0).toUpperCase() + str.substr().toLowerCase(); 
} 

console.log(alphabet("dfdfd dfsdfsd dfsfsd")); 



/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial' 
Expected Output : 'Development'
*/



/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string : 'The quick brown fox' 
Expected Output : 5
*/

function getVowels(str) {
  var vowelsCount = 0;

  
  var string = str.toString();

  
  for (var i = 0; i <= string.length - 1; i++) {

  
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
getVowels("dfwedfwefwef");


/*
8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
function prime(number){
  var n, i, flag = 0;

    for(i=2; i<=n/2; ++i)
    {
        
        if(n%i===0)
        {
            flag=1;
            break;
        }
    }

    if (flag === 0)
       { console.log("number is a prime number.");}
    else
       { console.log("number is not a prime number.");}
    
    
} 
prime(23);

/*
9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/
function value(num)
{
  console.log(typeof num);
  
}
value("jghgjh");


/*
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/



/*
11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4 
*/
fuction number()
{
  var ar = [3,4,5,6];
  var sort = ar.sort();
  var len = ar.length;

console.log("second smallest" +ar[1]);
console.log("second smallest" +ar[len-2]);
}
number();

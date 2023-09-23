function checkPalindrome(str)
{ 
    // Calculating string length
    var len = str.length;
     
    // Traversing through the string 
    // upto half its length
    for (var i = 0; i < len / 2; i++) 
    {
         
        // Comparing ith character 
        // from starting and len-ith
        // character from end
        if (str[i] != str[len - i - 1])
            return false;
    }
     
    // If the above loop doesn't return then it is
    // palindrome
    return true;
}
   
    let string = prompt('Enter the string: ');
    
    if (checkPalindrome(string) == true)
        {  
            console.log('It is palindrome');
        }   
    else
        {
            console.log('It is not a palindrome');
        }
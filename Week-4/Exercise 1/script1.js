
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < arr.length; i++) 
{
  if (arr[i] % 2 == 0) 
  {
    arr.push(arr.splice(i, 1)[0]);
  }
}

console.log(arr);

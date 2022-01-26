var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
      if(j %2 == 0 )
      {
         numsArr[i][j] = "even"
       }
    }
}
console.log(numsArr);

// [
//    [ 'even', 2, 'even', 4, 'even' ],
//    [ 'even', 7, 'even', 9, 'even', 11 ]
//  ]
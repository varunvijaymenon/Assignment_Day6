var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 1) {
 console.log(arr[i]);
 }}
})();

// 1
// 3
// 5
// 7
// 79
// 7
// 9
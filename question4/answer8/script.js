var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substring(1));
 }
})();

// Guvi
// Geek
// Zen
// Fullstack
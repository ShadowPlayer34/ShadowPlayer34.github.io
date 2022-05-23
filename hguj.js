
var x = 89;
x = 89*3;
console.log(typeof x);
console.log(x**2);
let shelf = {
    book: "Garry Potter",
    author: "Auth",
}
shelf.book = "It";
delete shelf.book;
shelf.page = 20;
console.log(shelf.page);
shelf.fnc = function (n){
    console.log("This book have are " + n + " pages" );
}
//let key = prompt("Что вы хотите узнать о книге?", "page");
if (key == 3){
    document.querySelector('html').style.backgroundColor = 'purple';
}
document.querySelector('aside').style.display = ' block';
var t = 90;
shelf.fnc(shelf.page);
var i= 190;
i = (i<100)?i+100:i-60;
console.log(i);
function moveon(){
    var answer = confirm("Ты еблан?");
    if (answer) window.location = "http://google.com";
}
var u = document.getElementsByTagName("button");
//setTimeout(moveon, 10000);
var n = 60;
var d = 0;
var t = 0;
(function myLoop(i) {
    setTimeout(function() {

        if (d == 60) {
            d = 0;
            t++;
        }
        console.log(t,"m", d,"s");
        d++;
        //  your code here
        if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
    }, 1000)
})(160);
// <button onclick="myFunction()">Click me</button>
//<button id="button1">Grow</button>
//<button id="button2">Blue</button>
//<button id="button3">Fade</button>
//<button id="button4">Reset</button>

//<p onclick="myFunction(this, 'red')">Click me to change my text color.</p>

//<script>
//function myFunction(elmnt,clr) {
  //elmnt.style.color = clr;
//}
//</script>

document.getElementById("button1").addEventListener("click" , function() {
    document.getElementById("box").style.height = "200px" ;
    document.getElementById("box").style.backgroundColor = "orange" ;
} ) ;
document.getElementById("button2").addEventListener("click" , function() {
    document.getElementById("box").style.backgroundColor = "blue" ;
    document.getElementById("box").style.height = "150px" ;
    document.getElementById("box").style.opacity = "100%" ;
} ) ;
document.getElementById("button3").addEventListener("click" , function() {
    document.getElementById("box").style.backgroundColor = "orange" ;
    document.getElementById("box").style.opacity = "50%" ;
 } ) ;
 document.getElementById("button4").addEventListener("click" , function() {
    document.getElementById("box").style.height = "150px" ;
    document.getElementById("box").style.backgroundColor = "orange" ;
    document.getElementById("box").style.opacity = "100%" ;
 } ) ;
 document.getElementById("button5").addEventListener("click" , function() {
     document.getElementById("box").style.height = "300px" ;
     document.getElementById("box").style.backgroundColor = "pink" ;
     document.getElementById("box").style.opacity = "100%" ;
 } ) ;

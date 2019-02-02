menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');

    if(x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}

l1.onclick = function myFunction() {
    var x = document.getElementById('l1');

    if(x.className === "line1"){
        x.className += " responsive";
    } else {
        x.className = "line1";
    }

}
l2.onclick = function myFunction() {
    var x = document.getElementById('l2');

    if(x.className === "line2"){
        x.className += " responsive";
    } else {
        x.className = "line2";
    }

}
l3.onclick = function myFunction() {
    var x = document.getElementById('l3');

    if(x.className === "line3"){
        x.className += " responsive";
    } else {
        x.className = "line3";
    }

}
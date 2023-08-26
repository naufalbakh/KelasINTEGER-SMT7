/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



function openSUBJ(evt, subjName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }
    document.getElementById(subjName).style.display = "block";
    evt.currentTarget.className += " active";

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// function searchBar() {
//     var tablinks;
//     tablinks = document.getElementsByClassName("tablinks");
//     if (tablinks == document.getElementById("WAJIB").click()){
//         document.getElementById("wajibBar").style.display = "none";
//     } else {
// 		document.getElementById("optBar").style.display = "none";
//     }
// }
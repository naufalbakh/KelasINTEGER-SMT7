/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Fungsi untuk mengaktifkan fitur pencarian
function searchSubjects() {
  const searchInput = document.getElementById("searchInput");
  const subjects = document.querySelectorAll("section");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    subjects.forEach((subject) => {
      const subjectName = subject.querySelector("h3").textContent.toLowerCase();
      if (subjectName.includes(searchText)) {
        subject.style.display = "block";
      } else {
        subject.style.display = "none";
      }
    });
  });
}

// Panggil fungsi pencarian saat halaman dimuat
window.onload = searchSubjects;

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

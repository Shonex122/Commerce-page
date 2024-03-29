// const bar = document.getElementById("bar");
// const nav = document.getElementsByClassName("nav-bar");

// if (bar) {
//   bar.addEventListener("click", () => {
//     nav.classlist.add("active");
//   });
// }

let nav = document.getElementById("nav-bar");
let MainImg = document.getElementById("MainImg");
let small = document.getElementsByClassName("small-img");

small[0].onclick = function () {
  MainImg.src = small[0].src;
};
small[1].onclick = function () {
  MainImg.src = small[1].src;
};
small[2].onclick = function () {
  MainImg.src = small[2].src;
};
small[3].onclick = function () {
  MainImg.src = small[3].src;
};

function showMenu() {
  nav.style.right = "0";
}
function hideMenu() {
  nav.style.right = "-200px";
}

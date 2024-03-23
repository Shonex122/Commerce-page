// const bar = document.getElementById("bar");
// const nav = document.getElementsByClassName("nav-bar");

// if (bar) {
//   bar.addEventListener("click", () => {
//     nav.classlist.add("active");
//   });
// }

let nav = document.getElementById("nav-bar");

function showMenu() {
  nav.style.right = "0";
}
function hideMenu() {
  nav.style.right = "-200px";
}

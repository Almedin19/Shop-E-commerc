// for small device
const burger = document.getElementById("burger");
const list = document.getElementById("list");

// list.style.display = "none";

burger.addEventListener("click", function () {
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

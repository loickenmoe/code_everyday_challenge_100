const inputSearch = document.getElementById("search");
const btnSearch = document.querySelector(".fa-magnifying-glass");
let displayParam = "flex" | "none";
displayParam = "none";

btnSearch.addEventListener("click", () => {
  if (displayParam == "none") {
    displayParam = "flex";
    inputSearch.style.display = displayParam;
  } else {
    displayParam = "none";
    inputSearch.style.display = displayParam;
  }
});

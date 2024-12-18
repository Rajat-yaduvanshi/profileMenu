const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.getElementById("dropdownMenu");

const toggleDropdownMenu = () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
};
const closeDropdownMenu = () => {
  dropdownMenu.style.display = "none";
};

// Event Listeners
dropdownToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleDropdownMenu();
});

window.addEventListener("click", (event) => {
  if (
    !dropdownToggle.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  )
    closeDropdownMenu();
});

const dropdownItems = dropdownMenu.querySelectorAll("a, button");
dropdownItems.forEach((item) => {
  item.addEventListener("click", closeDropdownMenu);
});

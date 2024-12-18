// Dropdown Menu Logic
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const openSideMenuButton = document.getElementById("openSideMenu");
const sideMenu = document.getElementById("sideMenu");
const container = document.querySelector(".container");
const closeSideMenuButton = document.getElementById("closeSideMenu");
const modalPopup = document.getElementById("modalPopup");
const closeModalButton = document.querySelector(".close-modal");

let isSideMenuOpen = false; // Track the state of the side menu

const toggleDropdownMenu = () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
};

const closeDropdownMenu = () => {
    dropdownMenu.style.display = "none";
};

const toggleSideMenu = () => {
    isSideMenuOpen = !isSideMenuOpen;
    sideMenu.style.left = isSideMenuOpen ? "0" : "-250px";
    container.classList.toggle("shifted", isSideMenuOpen);
};

const openModal = () => {
    modalPopup.style.display = "block";
    if (isSideMenuOpen) {
        toggleSideMenu();
    }
};

const closeModal = () => {
    modalPopup.style.display = "none";
};

// Event Listeners
dropdownToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (isSideMenuOpen) toggleSideMenu();
    toggleDropdownMenu();
});

window.addEventListener("click", (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) closeDropdownMenu();
    if (isSideMenuOpen && !openSideMenuButton.contains(event.target) && !sideMenu.contains(event.target)) toggleSideMenu ();
});

openSideMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    closeDropdownMenu();
    toggleSideMenu();
});

closeSideMenuButton.addEventListener("click", toggleSideMenu);

const sideMenuItems = sideMenu.querySelectorAll("a, button");
sideMenuItems.forEach((item) => {
    item.addEventListener("click", toggleSideMenu);
});

document.getElementById("openModal").addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
    if (event.target === modalPopup) closeModal();
});

const modalLinks = modalPopup.querySelectorAll("a");
modalLinks.forEach((link) => {
    link.addEventListener("click", closeModal);
});

const dropdownItems = dropdownMenu.querySelectorAll("a, button");
dropdownItems.forEach((item) => {
    item.addEventListener("click", closeDropdownMenu);
});


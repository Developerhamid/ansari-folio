const OpenButton = document.getElementById("open-bar");
const CloseButton = document.getElementById("close-bar");
const MobileNavbar = document.getElementById("Moblie-navbar");
const MobileMenu = document.querySelector(".mobile-menu-container");

OpenButton.addEventListener("click", () => {
  MobileNavbar.classList.add("show-navigation");
  OpenButton.style.display = "none";
  CloseButton.style.display = "inline-block";
  setTimeout(() => {
    MobileNavbar.classList.remove("show-navigation");
    OpenButton.style.display = "inline-block";
    CloseButton.style.display = "none";
  }, 5000);
});

CloseButton.addEventListener("click", () => {
  MobileNavbar.classList.remove("show-navigation");
  OpenButton.style.display = "inline-block";
  CloseButton.style.display = "none";
});

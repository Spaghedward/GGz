const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const loginWrapper = document.querySelector(".login-wrapper");
const socialDiv = document.querySelector(".social");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
      // Toggle visibility of login menu
      if (navbarMenu.classList.contains("is-active")) {
         loginWrapper.style.display = "none";
      } else {
         loginWrapper.style.display = "flex";
      }
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
      // Show login menu when menu link is clicked
      loginWrapper.style.display = "flex";
   });
});

// Open Login Menu on Click Login Option
document.querySelector(".login-option").addEventListener("click", () => {
   loginWrapper.style.display = "flex";
   burgerMenu.classList.remove("is-active");
   navbarMenu.classList.remove("is-active");
});

window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
         loginWrapper.style.display = "flex";
      }
   }
});

window.addEventListener("scroll", () => {
   const windowHeight = window.innerHeight;
   const documentHeight = document.body.clientHeight;
   const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
   const footerHeight = 100;
   const offset = footerHeight + socialDiv.offsetHeight;

   if (windowHeight + scrollTop >= documentHeight - offset) {
      socialDiv.style.position = "absolute";
      socialDiv.style.bottom = `${footerHeight}px`;
   } else {
      socialDiv.style.position = "fixed";
      socialDiv.style.bottom = "0";
   }
});


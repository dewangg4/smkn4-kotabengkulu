// Menu Responsif
function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("active");
  }
  
  // Shrinking Header saat Scroll
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.style.padding = "10px 0";
      header.style.background = "#003366";
    } else {
      header.style.padding = "15px 0";
      header.style.background = "#004080";
    }
  });
  
  // Swiper Slider
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  // AOS (Animasi Scroll)
  AOS.init();
  
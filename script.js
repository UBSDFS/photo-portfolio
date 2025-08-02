// === Lightbox Logic ===
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".grid-item img");

let currentIndex = 0;

// Open lightbox on image click
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
    } else if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});

// === Responsive Navbar Toggle ===
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".site-nav ul");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', () => {
  responseMessage.classList.remove('hidden');
});
if (form) {
  form.addEventListener('submit', () => {
    responseMessage.classList.remove('hidden');
  });
}

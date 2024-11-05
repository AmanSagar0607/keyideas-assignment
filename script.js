// Get the product info element
document.addEventListener("DOMContentLoaded", function () {
  const rings = document.querySelectorAll(".ring");
  const productInfo = document.querySelector(".product-info");

  const products = [
    {
      title: "Vintage Antique",
      price: "$4500",
      offer: "Take 20% off for a limited time.",
      code: "Use Code:  LOVE20",
    },
    {
      title: "Pave",
      price: "$2500",
      offer: "Take 5% off for a limited time.",
      code: "Use Code:  LOVE05",
    },
    {
      title: "Hidden Halo",
      price: "$3500",
      offer: "Take 10% off for a limited time.",
      code: "Use Code: LOVE20",
    },
  ];

  let currentIndex = 0;

  function updateDisplay() {
    const positions = ["left", "center", "right"];

    rings.forEach((ring, index) => {
      ring.className = "ring " + positions[(index - currentIndex + 3) % 3];
    });

    const currentProduct = products[currentIndex];
    productInfo.querySelector(".product-title").textContent =
      currentProduct.title;
    productInfo.querySelector(".product-price").textContent =
      currentProduct.price;
    productInfo.querySelector(".product-offer").textContent =
      currentProduct.offer;
    productInfo.querySelector(".product-code").textContent =
      currentProduct.code;

    document.querySelectorAll(".background-text").forEach((text, index) => {
      text.style.display = index === currentIndex ? "block" : "none";
    });
  }

  function rotate() {
    currentIndex = (currentIndex + 1) % products.length; // Increment index
    updateDisplay();
  }

  // Rotate on image click
  rings.forEach((ring) => {
    ring.addEventListener("click", rotate);
  });

  // Single rotate button to trigger rotation
  document.querySelector(".rotate-button").addEventListener("click", rotate);

  // Start the automatic rotation
  setInterval(rotate, 5000);
});


// menu
// Add this at the end of your existing JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuToggler = document.querySelector('.navbar-toggler');
  const closeMenuBtn = document.querySelector('.close-menu');

  // Toggle menu
  menuToggler.addEventListener('click', function() {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    document.body.style.overflow = mobileMenu.style.display === 'block' ? 'hidden' : '';
  });

  // Close menu
  closeMenuBtn.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = '';
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !menuToggler.contains(event.target)) {
      mobileMenu.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});
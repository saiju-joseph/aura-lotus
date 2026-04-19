document.addEventListener('DOMContentLoaded', () => {
   // CATEGORY SCROLL
   const scrollContainer = document.getElementById('categoryScroll');
   const nextBtn = document.getElementById('nextBtn');
   const prevBtn = document.getElementById('prevBtn');

   const scrollAmount = 250;

   if (scrollContainer && nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
         scrollContainer.scrollLeft += scrollAmount;
      });

      prevBtn.addEventListener('click', () => {
         scrollContainer.scrollLeft -= scrollAmount;
      });
   }

   // ADD TO CART QTY
   const minusBtn = document.getElementById('minus');
   const plusBtn = document.getElementById('plus');
   const qtyEl = document.getElementById('qty');

   let qty = 1;
   const min = 1;
   const max = 10;

   if (minusBtn && plusBtn && qtyEl) {
      function updateQty() {
         qtyEl.textContent = qty;
         minusBtn.disabled = qty <= min;
         plusBtn.disabled = qty >= max;
      }

      minusBtn.addEventListener('click', () => {
         if (qty > min) {
            qty--;
            updateQty();
         }
      });

      plusBtn.addEventListener('click', () => {
         if (qty < max) {
            qty++;
            updateQty();
         }
      });

      updateQty();
   }
});

// owl carousel

$(document).ready(function () {
   $('.product-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
         "<span class='custom-prev'>&#10094;</span>",
         "<span class='custom-next'>&#10095;</span>"
      ],
      responsive: {
         0: {
            items: 1
         },
         576: {
            items: 2
         },
         768: {
            items: 3
         },
         1200: {
            items: 4
         }
      }
   });
});

// timer

const targetDate = new Date('March 10, 2026 23:59:59').getTime();

const countdown = setInterval(function () {
   const now = new Date().getTime();
   const distance = targetDate - now;

   if (distance < 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = 'EXPIRED';
      return;
   }

   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

   document.getElementById('days').innerText = days;
   document.getElementById('hours').innerText = hours;
   document.getElementById('minutes').innerText = minutes;
}, 1000);

// billing details

const checkbox = document.getElementById('createAccountCheckbox');
const section = document.getElementById('createAccountSection');

checkbox.addEventListener('change', () => {
   if (checkbox.checked) {
      section.classList.remove('d-none');
   } else {
      section.classList.add('d-none');
   }
});

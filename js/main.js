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

//product gallery

const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');

thumbs.forEach((img) => {
   img.addEventListener('click', function () {
      // change main image
      mainImage.src = this.src;

      // active border
      thumbs.forEach((t) => t.classList.remove('active'));
      this.classList.add('active');
   });
});

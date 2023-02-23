document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function()
  {
    document.querySelector(".header").classList.toggle("open")
  })
})

new Swiper('.image-slider')

document.querySelectorAll('.header *, .image-slider *').forEach(function(element) {
  element.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
});

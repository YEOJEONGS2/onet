// window.onload = function () {
//     var swiper = new Swiper(".slideBn", {
//         spaceBetween: 30,
//         centeredSlides: true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
  
// }
window.onload = function () {
  var swiper = new Swiper(".slideBn", {
    slidesPerView: 3,
    breakpoints:{
      320:{
        slidesPerView:1,
      }
    },
    loop:true,
    observer: true,
    observeParents: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "progressbar",
    // },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    });

}

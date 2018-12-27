// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     autoplay: true,
//     arrows: false,
//     dots: true
//   });

// popup
// let openModalBtn = $('.open-login-modal');
// openModalBtn.on('click', function () {
//   $('.modal').bPopup();
// })

let openModalsBtns = $('[data-modal]');
openModalsBtns.on('click', function () {
  let target = $(this).attr('data-target');
  console.log(target);
  $('.modal').bPopup();
})
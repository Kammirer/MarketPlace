// $('.multiple-items') .slick({
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

// Switch all-items cards
$('#grid-thumbs').on('click', function() {
  $('.change-icon').removeClass('active');
  $('#grid-thumbs').addClass('active');
  $('.all-new-card .row').removeClass('flex-column');
  $('.card.card-min-items').removeClass('row-card');
})

$('#grid-list').on('click', function() {
  $('.change-icon').removeClass('active');
  $('#grid-list').addClass('active');
  $('.all-new-card .row').addClass('flex-column');
  $('.card.card-min-items').addClass('row-card');
})
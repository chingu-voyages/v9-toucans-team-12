$('.donated-item-container').isotope({
  itemSelector: '.donated-item',
  layoutMode: 'fitRows'
});
$('.donated-item-menu li').click(function(){
  $('.donated-item-menu li').removeClass('active');
  $(this).addClass('active');

  var selected = $(this).attr('data-filter');
  $('donated-item-container').isotope({
    filter: selected
  });
  return false;
});

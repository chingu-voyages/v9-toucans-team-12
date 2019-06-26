$('.donated-item-menu li').click(function(){
  $('.donated-item-menu li').removeClass('active');
  $(this).addClass('active');
  var currentTag = $(this).attr('data-filter');

  $('.donated-item-container div').each(function(){
    if ($(this).hasClass(currentTag)) {
      $(this).show();
      $(this).fadeIn();
    }
    else {
      $(this).hide();
    }
  });

});

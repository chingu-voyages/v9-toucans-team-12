
//************ Find form - search donated items ***************//
$('.donated-item-tag li').click(function(){
  //Change the donated menu class
  $('.donated-item-tag li').removeClass('active');
  $(this).addClass('active');
  //Get the current tag
  var currentTag = $(this).attr('data-filter');
  //Display all items if tag All is clicked
  if(currentTag === '*') {
    $('.donated-item').show('1000');
  }
  else {
    //Display only items whose tag is active and transition effect
    $('.donated-item').not('.'+currentTag).hide('5000');
    $('.donated-item').filter('.'+currentTag).show('5000');
  }

});


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

//******* Validate contact us form fields ******************//

$('#contact-form').on('submit', function(e) {

  e.preventDefault(); //stop submit

  if ($('#contact-form').is(':valid')) {
  //Check to make sure required fields are filled out 
    $('#exampleModalCenter').modal('show');
  }
});
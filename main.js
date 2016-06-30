var $ul = $('ul');

//on click, ul is toggled to class 'select'
$ul.on('click', function() {
  $(this).toggleClass('select');
});
//Need to add/remove class in order to only show the class that was last clicked on
//Not sure of syntax

//tried slideUp and slideDown - couldn't get it to work
//syntax?

var $ul = $('ul');

$ul.on('click', function(evt) {
    $ul.removeClass('select');
    //selects ALL uls, not just the one you clicked on.
    $(this).addClass('select');
    //selects only the one that has been clicked on and adds class

    // $(this).toggleClass('select');
    //on click, ul is toggled to class 'select'
    //toggle class is not ideal because it will not deselect other classes;
});
//Need to add/remove class in order to only show the class that was last clicked on
//Not sure of syntax --fixed in class

//tried slideUp and slideDown - couldn't get it to work
//syntax?

// string.forEach(function() {
//
// });

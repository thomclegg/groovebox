var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$grid.isotope({ filter: '.funk, .soul, .disco, .electronic, .psychadelic' });

$('.filter-list').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.filter-list').each( function( button, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

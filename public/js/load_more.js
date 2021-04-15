jQuery(function ($) {
  // Add click event for load more button in Covers blocks.
  $('.btn-load-more-posts-click').on('mouseup touchend', function (e) {
    e.preventDefault();

    const $row = $('.post-column:hidden', $(this).closest('.container'));
    const posts_per_row = $(this).closest('.four-column-content').data('posts_per_row');

    if ($row.length > 0) {
      $row.slice( 0, posts_per_row ).show('slow');
    }
    if ($row.length <= posts_per_row) {
      $(this).closest('.load-more-posts-button-div').hide('fast');
    }
  });

  // Block: Covers functionality.
  // Find out how many posts per row are being displayed.
  $('.covers-block').each( function() {
    const visible_covers = $('.cover-card-column:visible', $(this)).length;
    if (0 === visible_covers % 3) {
      $(this).attr('data-covers_per_row', 3);
    } else if (0 === visible_covers % 2) {
      $(this).attr('data-covers_per_row', 2);
    }
  });

  // Add click event for load more button in Covers blocks.
  $('.btn-load-more-covers-click').on('mouseup touchend', function (e) {
    e.preventDefault();

    const $row = $('.cover-card-column:hidden', $(this).closest('.container'));
    const covers_per_row = $(this).closest('.covers-block').data('covers_per_row');

    if ($row.length > 0) {
      $row.slice( 0, covers_per_row ).show('slow');
    }
    if ($row.length <= covers_per_row) {
      $(this).closest('.load-more-covers-button-div').hide('fast');
    }
  });

  // Add click event handler for load more button in Campaign thumbnail blocks.
  $('.btn-load-more-campaigns-click').on('mouseup touchend', function (e) {
    e.preventDefault();

    const $row = $('.campaign-card-column:hidden', $(this).closest('.container'));
    const covers_per_row = 3;

    if ($row.length > 0) {
      $row.slice( 0, covers_per_row ).show('slow');
    }

    if ($row.length <= covers_per_row) {
      $(this).closest('.load-more-campaigns-button-div').hide('fast');
    }
  });
});

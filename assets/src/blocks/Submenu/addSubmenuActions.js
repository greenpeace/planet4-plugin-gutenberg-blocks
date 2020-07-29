export const addSubmenuActions = submenu => {
  if (submenu && Array.isArray(submenu)) {
    for (let i = 0; i < submenu.length; i++) {
      const menu = submenu[i];
      addTargetLinks(menu);
      addChildrenLinks(menu);
    }

    // Add click event for submenu links.
    $('.submenu-link').click(function (event) {
      event.preventDefault();
      const link = $.attr(this, 'href');
      let h = $(this).data('hash');
      let $target = $('*[data-hash-target="' + h + '"]');
      if ($target) {
        $('html, body').animate({
          scrollTop: $target.offset().top - 100
        }, 2000, function () {
          const position = $(window).scrollTop();
          window.location.hash = link;
          $(window).scrollTop(position);
        });
      }

      return false;
    });

    // Add "back to top" button behavior
    const $backtop = $('.back-top');
    const $submenu = $('.submenu-block');

    if ($submenu.length > 0) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
          $backtop.fadeIn();
          if ($('.cookie-block:visible').length > 0) {
            $backtop.css('bottom', '120px');
          } else {
            $backtop.css('bottom', '50px');
          }
        } else {
          $backtop.fadeOut();
        }
      });

      $backtop.click(function () {
        $('body, html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    }
  }
};

/**
 * Append html links for a submenu entry children.
 *
 * @param menu Submenu entry
 */
function addChildrenLinks(menu) {
  if (menu.children && Array.isArray(menu.children)) {
    for (let k = 0; k < menu.children.length; k++) {
      const child = menu.children[k];
      addTargetLinks(child);
      addChildrenLinks(child);
    }
  }
}

/**
 * Append html links the given item.
 *
 * @param item Submenu menu item
 */
function addTargetLinks(item) {
  let $headings = $('body ' + item.type);

  for (let l = 0; l < $headings.length; l++) {

    let $heading = $($headings[l]);
    if ($heading.text().replace(/\u2010|\u2011|\u2013/, '') === item.text.replace('-', '')) {
      $heading.prepend('<a id="' + item.id + '" data-hash-target="' + item.hash + '"></a>');
      break;
    }
  }
}

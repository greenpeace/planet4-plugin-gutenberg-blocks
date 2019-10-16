/* global submenu */

jQuery(function ($) {
  'use strict';

  // Parse submenu object passed to a variable from server-side.
  if ('undefined' === submenu || ! Array.isArray(submenu)) {
    submenu = []; // eslint-disable-line no-global-assign
  }

  for (let i = 0; i < submenu.length; i++) {
    let menu = submenu[i];

    if ('undefined' === menu.id || 'undefined' === menu.type || 'undefined' === menu.link) {
      continue;
    }
    let type = menu.type;

    // Iterate over headings and create an anchor tag for this heading.
    if (menu.link) {

      let $headings = $('body ' + type);

      for (let j = 0; j < $headings.length; j++) {
        let $heading = $($headings[j]);
        if ($heading.text().replace(/\u2010|\u2011|\u2013/, '') === menu.text.replace('-', '')) {
          $heading.prepend('<a id="' + menu.id + '" data-hash-target="' + menu.hash + '"></a>');
        }
      }
    }

    addChildrenLinks(menu);
  }

  // Add click event for submenu links.
  $('.submenu-link').click(function (event) {
    event.preventDefault();
    const link = $.attr(this, 'href');
    let h = $(this).data('hash');
    let $target = $('*[data-hash-target="'+h+'"]');
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

  /**
   * Append html links for a submenu entry children.
   *
   * @param menu Submenu entry
   */
  function addChildrenLinks(menu) {
    if ('undefined' === menu.children || !Array.isArray(menu.children)) {
      return;
    }

    for (let k = 0; k < menu.children.length; k++) {
      let child = menu.children[k];
      let child_type = child.type;
      let $headings = $('body ' + child_type);

      addChildrenLinks(child);

      for (let l = 0; l < $headings.length; l++) {

        let $heading = $($headings[l]);
        if ($heading.text().replace(/\u2010|\u2011|\u2013/, '') === child.text.replace('-', '')) {
          $heading.prepend('<a id="' + child.id + '" data-hash-target="' + child.hash + '"></a>');
          break;
        }
      }
    }
  }
});

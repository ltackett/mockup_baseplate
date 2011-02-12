/* Author: Lorin Tackett

*/

$(document).ready(function() {

  // Open external links in a new window the semantic way.
  // ----------------------------------------------------------------------------
  hostname = window.location.hostname
  $("a[href^=http]")
    .not("a[href*='" + hostname + "']")
    .addClass('link external')
    .attr('target', '_blank');
    
  
  // IE fasthack hand-holding on all first/last children
  // ----------------------------------------------------------------------------
  // Might have to wrench this down a notch for gigantic DOM's, as it will
  // tank IE6, since I'm using the * selector.
  $('html.ie *:first-child').addClass('first');
  $('html.ie *:last-child').addClass('last');    
  
  
  // Contextual current class
  // ----------------------------------------------------------------------------
  // capture what page is currently in the location bar
  var currentPage = window.location.href
  $('a').each(function(index) {
    // capture the page being linked to
    var linkHref = $(this)[0].href
    // check if the href of the link is same as the current page
    if (linkHref == currentPage) {
      $(this).addClass('current');
    };
  });

});






















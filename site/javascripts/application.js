$(document).ready(function() {

  // Open external links in a new window the semantic way.
  hostname = window.location.hostname
  $("a[href^=http]")
    .not("a[href*='" + hostname + "']")
    .addClass('link external')
    .attr('target', '_blank');
    
  
  // IE6 hand-holding on the usual suspects
  $('html.ie6').find('
    div:first-child,
    li:first-child,
    p:first-child').addClass('first');
    
  $('html.ie6').find('
    div:last-child,
    li:last-child,
    p:last-child').addClass('last');
    
  
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
/**
 * Resize the editor to full screen or minimal based on scroll
 */
$(document).on('ready scroll', function () {
  if (window.scrollY > 10) {
    $('#view').removeClass('full');
  } else {
    $('#view').addClass('full');
  }
});

/**
 * Update current year in footer
 */
$(document).ready(function () {
  /**
   * Api call
   */
  const request = new XMLHttpRequest()
  request.open('POST', 'https://amer-js.herokuapp.com/hello', true)
  request.onload = function() {
    // Begin accessing JSON data here
    if (request.status >= 200 && request.status < 400) {
      console.log('Api was called :)');
    } else {
      console.log(`Gah, it's not working!`);
    }
  }
  request.send()


  console.info('Nothing here except your legend...');
  $('#year').text(new Date().getFullYear());
});

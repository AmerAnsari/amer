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
  console.info('Nothing here except your legend...');
  $('#year').text(new Date().getFullYear());
});

/**
 * Do something on page load
 */
window.addEventListener("load", apicall());
/**
 * Api call
 */
function apicall() {
  const http = new XMLHttpRequest();
  const url = 'https://amer-js.herokuapp.com/hello';
  http.open('POST', url, true);

//Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {    //Call a function when the state changes.
    if(http.readyState === 4 && http.status === 200) {
      alert(http.responseText);
      console.log("Api was called!");
    } else {
      console.log("Gah, api is not working!!");
    }
  }
  http.send();
}

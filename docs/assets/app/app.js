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
window.addEventListener("load", apiCall());

/**
 * Api call
 */
function apiCall() {

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

  const url = 'https://amer-js.herokuapp.com/hello';
  const data = 'Hey Amer, I`ve viewed your website, Yohooo';
  axios({
    method: 'post',
    url: url,
    data: data,
  }, null, axiosConfig)
      .then(data => console.log(data))
      .catch(err => console.log(err));
}

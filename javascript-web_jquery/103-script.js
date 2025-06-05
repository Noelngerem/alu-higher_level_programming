$(document).ready(function () {
  function fetchHello() {
    const lang = $('#language_code').val();
    const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${lang}`;

    $.getJSON(url, function (data) {
      $('#hello').text(data.hello);
    }).fail(function () {
      $('#hello').text('Translation not found');
    });
  }

  // On click of translate button
  $('#btn_translate').click(fetchHello);

  // On pressing ENTER in input#language_code
  $('#language_code').keypress(function (event) {
    if (event.which === 13) { // 13 is ENTER key code
      fetchHello();
    }
  });
});

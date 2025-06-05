$(document).ready(function () {
  $('#btn_translate').click(function () {
    const lang = $('#language_code').val();
    const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${lang}`;

    $.getJSON(url, function (data) {
      $('#hello').text(data.hello);
    }).fail(function () {
      $('#hello').text('Translation not found');
    });
  });
});

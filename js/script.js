$(function () {
  $('.tab-link:first').addClass('active-tabs');

  $('.tab-text').not(':first').hide();

  $('.tab-link').on('click', function (e) {
    e.preventDefault();
    $('.active-tabs').removeClass('active-tabs');
    $(this).addClass('active-tabs');

    var $tab = $(this).attr('href');

    $('.tab-text').not($tab).css('display', 'none');
    $($tab).fadeIn();
  });

});

$(function () {
  $('.tooltrip').hide();

  $('input').hover(function () {
    var $tool = $(this).next();
    $tool.fadeIn(600);
  });

  $('input').mouseout(function () {
    var $tool = $(this).next();
    $tool.fadeOut(600);
  });

  $('form').append('<button>Show help</button>');

  $('button').addClass('btn');

  $('.btn').on('click', function (e) {
    e.preventDefault();
    $('input').next().fadeIn().fadeOut(6000);

  });

});
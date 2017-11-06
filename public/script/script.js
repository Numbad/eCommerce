$(document).ready(function () {
    $('#navbarSideButton').on('click', function () {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });
    $('.overlay').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
    $('#close').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
});

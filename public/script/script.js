$(document).ready(function () {
    $('#navbarSideButton').on('click', function () {
        $('#navbarSide').addClass('reveal');
        $('.overlay').show();
    });
    $('.overlay').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
    $('.side-link').on('click', function () {
        $('#navbarSide').removeClass('reveal');
        $('.overlay').hide();
    });
});
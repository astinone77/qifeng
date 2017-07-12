// for 目的地、城市、地址、酒店、地标、商圈选择
$(function () {
    $('#hotel').find('input[name="destination"]').on('focus', function () {
        $('.wedget-city-list').css('display:block');
    }).on('blur', function () {
        $('.wedget-city-list').css('display:block');
    })
})
$(function () {
    var downSrc = './img/down_05.png',
        upSrc = './img/up_03.png',
        $filterId = $('#filter-hotel'),
        filterBtnJs = $filterId.find('.filter-btn-js');
    filterBtnJs.click(function () {
        var dataImg = $(this).data('img'),
            $img = $(this).find('img'),
            imgSrc = $img.attr('src');
        switch (dataImg) {
            case 'up':
                imgSrc = $img.attr('src', downSrc);
                $(this).attr('data-img', 'down');
                break;
            case 'down':
                imgSrc = $img.attr('src', upSrc);
                $(this).attr('data-img', 'up');
                break;
        }
    });
    var pageNow = $filterId.find('page-now');
    var pageTotle = $filterId.find('page-totle');
    var btnAdd = $filterId.find('btn-add');
    var btnLower = $filterId.find('btn-lower');
});
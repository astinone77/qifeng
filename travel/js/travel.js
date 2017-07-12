// for 目的地、城市、地址、酒店、地标、商圈选择
$(function () {
    var startDate = endDate = moment().format('YYYY-MM-DD');
    var dateRange = new pickerDateRange('date_demo1', {
        isTodayValid: true,
        startDate: startDate,
        endDate: endDate,
        defaultText: ' 至 ',
        stopToday: true,
        autoSubmit: false,
        fromToday: true,
        monthRangeMax: 12,
        inputTrigger: 'input_trigger_demo1',
        success: function (obj) {
            $("#dCon_demo1").html('开始时间 : ' + obj.startDate + '<br/>结束时间 : ' + obj.endDate);
        }
    });
    $('#hotel').find('input').on('focus', function () {
        var name = $(this).attr('name');
        $('.hotels').removeClass('width-0');
        $('.oCheckbox').addClass('width-0');
        $('#hotel>ul').addClass('afterClick');
        if (name === 'hotels') {
            $('.wedget-city-list').css({
                'display': 'block',
                'margin-left': '323px'
            });
        } else { 
            $('.wedget-city-list').css({
                'display': 'block',
                'margin-left': '0px'
            });
        }
            
        // });
        // $('#hotel').find('input[name="hotels"]').on('focus', function () {
        //     $('.wedget-city-list').css({
        //         'display': 'block',
        //         'margin-left': '323px'
        //     });
        // });
        $('.wedget-city-list').on('mouseout', function () {
            $('.wedget-city-list').css('display', 'none');
        })
    })  
})
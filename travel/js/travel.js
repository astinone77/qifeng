// for 目的地、城市、地址、酒店、地标、商圈选择
$(function() {
    new travel();
});

function travel() {
    this.init();
    this.thisInput = null;
}
travel.prototype = {
    init: function() {
        var self = this;
        var myCalendar = new SimpleCalendar('#myCalendar');
        myCalendar.updateSize('500px', '200px');
        myCalendar.showFestival(false);
        myCalendar.showLunarCalendar(false);
        myCalendar.showHoliday(false);
        myCalendar.showSolarTerm(false);
        myCalendar.showLunarFestival(false);
        myCalendar.showMark(false);

        $('#hotel').find('input').on('focus', function() {
            self.showDialogBox(this);
        });
        $(document).on('click', function(event) {
            self.hideDialogBox(event);
        });
        $('.city-js').find('p').on('click', function() {
            self.chooseCity(this);
        });
        $('.sort-js').find('li').on('click', function() {
            self.citySort(this);
        });
        $('.day').on('click', function() {
            self.chooseDate(this);
        });
    },
    showDialogBox: function(that) {
        var self = this;
        self.thisInput = that;
        var oName = $(that).attr('name');
        $('.hotels').removeClass('width-0');
        $('.oCheckbox').addClass('width-0');
        $('#hotel>ul').addClass('afterClick');
        switch (oName) {
            case 'destination':
                $('#myCalendar').hide();
                $('.wedget-city-list').hide();
                $('.wedget-city-list').css({
                    'display': 'block',
                    'margin-left': '0px'
                });
                break;
            case 'hotels':
                $('#myCalendar').hide();
                $('.wedget-city-list').hide();
                $('.wedget-city-list').css({
                    'display': 'block',
                    'margin-left': '323px'
                });
                break;
            case 'live-in':
                $('#myCalendar').hide();
                $('.wedget-city-list').hide();
                $('#myCalendar').css({
                    'display': 'block'
                });
                break;
            case 'leave-out':
                $('#myCalendar').hide();
                $('.wedget-city-list').hide();
                $('#myCalendar').css({
                    'display': 'block'
                });
                break;
        }
    },
    hideDialogBox: function(event) {
        var e = event.target || window.target;
        var parent1 = $(e).parents('.wedget-city-list');
        var parent2 = $(e).parents('#myCalendar');
        var iName = $(e).attr('name');
        console.log(e, iName, parent, parent.length);
        if (iName == 'button') {
            $('.wedget-city-list').css('display', 'none');
            $('#myCalendar').css('display', 'none');
        } else if (iName == 'destination' || iName == 'hotels' || iName == 'live-in' || iName == 'leave-out' || parent1.length || parent2.length) {
            return;
        } else {
            $('.wedget-city-list').css('display', 'none');
            $('#myCalendar').css('display', 'none');
            $('.hotels').addClass('width-0');
            $('.oCheckbox').removeClass('width-0');
            $('#hotel>ul').removeClass('afterClick');
        }
    },
    chooseCity: function(that) {
        var self = this;
        $(that).addClass('active');
        $('.city-js').find('p').removeClass('active');
        var content = $(that).text();
        $(self.thisInput).val(content);
    },
    citySort: function(that) {
        $('.sort-js').find('li').removeClass('active');
        $(that).addClass('active');
    },
    chooseDate: function(that) {
        var self = this;
        var today = $(that).text();
        var month = $('.sc-select-month').val();
        var year = $('.sc-select-year').val();
        var oDate = [year, month, today].join('-');
        $(self.thisInput).val(oDate);
    }
};
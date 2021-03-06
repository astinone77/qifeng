// for 目的地、城市、地址、酒店、地标、商圈选择
$(function () {
    new travel();
});

function travel() {
    this.init();
    this.thisInput = null;
}
travel.prototype = {
    init: function () {
        var self = this;
        var myCalendar = new SimpleCalendar("#myCalendar");
        myCalendar.updateSize("500px", "200px");
        myCalendar.showFestival(false);
        myCalendar.showLunarCalendar(false);
        myCalendar.showHoliday(false);
        myCalendar.showSolarTerm(false);
        myCalendar.showLunarFestival(false);
        myCalendar.showMark(false);

        $(".choose-city img").on("click", function () {
            var showBox = $(this).data("box");
            // console.log(showBox);
            self.hideDialogBox();
            self.thisInput = this;
            self.showDialogBox(showBox);
            document.addEventListener("click", catchEvent, false);

        });
        $('.reserve-js').on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            if ($(this).data('after-click') === 'afterClick') {
                $('#hotel>ul').addClass('afterClick');
                $('.widget-city-list.city-hotel').css('left', '321px');
                $('#hotel').find('.hotels').removeClass('width-0');
            } else {
                $('.widget-city-list.city-hotel').css('left', '233px');
                $('#hotel>ul').removeClass('afterClick');
                $('#hotel').find('.hotels').addClass('width-0');
            }
        });
        $("#hotel .destination").find('input').on("focus", function () {
            var showBox = $(this).data("box");
            // console.log(showBox);
            self.hideDialogBox();
            self.thisInput = this;
            self.showDialogBox(showBox);
            document.addEventListener("click", catchEvent, false);

        });
        $("#hotel .hotels").find('input').on("focus", function () {
            var className = $(this).attr('name');
            self.hideDialogBox();
            self.thisInput = this;
            $('.sc-calendar').addClass(className);
            document.addEventListener("click", catchEvent, false);

        });
        $('.sort-js').find('li').on('click', function () {
            $(".sort-js").find("li").removeClass("active");
            $(this).addClass("active");
            document.removeEventListener('click', catchEvent);
        });
        $('.city-js').find('p').on('click', function () {
            $(".city-js").find("p").removeClass("active");
            $(this).addClass("active");
            var content = $(this).text();
            // console.log(self.thisInput.tagName);
            switch (self.thisInput.tagName) {
                case 'IMG':
                    $('#city-name').text(content);
                    break;
                case 'INPUT':
                    $(self.thisInput).val(content);
                    break;
            }
            self.hideDialogBox();
            document.addEventListener("click", catchEvent, false);

        });
        $('.day').on('click', function () {
            var today = $(this).text();
            var month = $(".sc-select-month").val();
            var year = $(".sc-select-year").val();
            var oDate = [year, month, today].join("-");
            $(self.thisInput).val(oDate);
            self.hideDialogBox();
            document.addEventListener("click", catchEvent, false);

        });
        $('#search-hotel').click(function () {
            var iForm = $('#hotel');
            var data = self.getFormData(iForm);
            document.addEventListener("click", catchEvent, false);

            // console.log(data);
            // ajax  ajax  ajax  ajax  ajax  ajax  ajax  ajax  ajax  ajax  ajax  ajax  ajax 
        });

        function catchEvent(event) {
            self.hideDialogBox(event);
        }
        $(document).on("click", function(){
            document.addEventListener("click", catchEvent, false);
        });
    },
    showDialogBox: function (elem) {
        $("." + elem).addClass("active");
    },
    hideDialogBox: function (event) {
        var self = this;
        if (event) {
            var e = event.target || window.target;
            var onEvent = $(e).data("click-event") || $(e).parents('[data-click-event="true"]');
            // console.log("e,onEvent", e, onEvent);
            if (onEvent !== true) {
                // console.log(1);
                if ($(".widget-city-list").hasClass("active")) {
                    $(".widget-city-list").removeClass("active");
                }
                if ($(".sc-calendar").hasClass("live-in") || $(".sc-calendar").hasClass('leave-out')) {
                    $(".sc-calendar").removeClass("live-in").removeClass('leave-out');
                }
                self.thisInput = null;
            }
        } else {
            if ($(".widget-city-list").hasClass("active")) {
                $(".widget-city-list").removeClass("active");
            }
            if ($(".sc-calendar").hasClass("live-in") || $(".sc-calendar").hasClass('leave-out')) {
                $(".sc-calendar").removeClass("live-in").removeClass('leave-out');
            }
            self.thisInput = null;
        }
    },
    getFormData: function ($form) {
        var self = this;
        var data = {};
        var key = null;
        var iValue = '';
        $form.find('input[type="radio"]').each(function () {
            key = $(this).attr('name');
            if ($(this).prop('checked')) {
                iValue = $(this).val();
                data[key] = iValue;
                return;
            }
            data[key] = '';
        });
        $form.find('input[type="text"]').each(function () {
            key = $(this).attr('name');
            iValue = $(this).val();
            data[key] = iValue;
        });
        return data;
    }
};
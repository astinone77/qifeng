var FS = {};
(function(win, FS) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');    //获取meta标签
    var dpr = 1;    //设置设备像素比
    var scale = 1;  //设置默认缩放
    var fontBase = 16;  //设置默认字体大小

    if (window.devicePixelRatio >= 2) {
        scale *= 0.5;
        dpr *= 2;
    }

    docEl.setAttribute('data-dpr', dpr);    //把dpr保存到data-dpr属性中，用于css hack
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', width=device-width, maximum-scale=' + scale + ', user-scalable=no');

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;    //获取视窗宽度
        var rem = width / 10;   //设置默认rem
        docEl.style.fontSize = rem + 'px';
        FS.rem = rem;
    }

    var tid = null;
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);

    //设置body默认字体大小
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = fontBase * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = fontBase * dpr + 'px';
        }, false);
    }

    refreshRem();

    FS.dpr = dpr;
    //rem转换成px，供js调用
    FS.rem2px = function(d) {
        var val = parseFloat(d) * FS.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    //px转换成rem，供js调用
    FS.px2rem = function(d) {
        var val = parseFloat(d) / FS.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }
})(window, FS);
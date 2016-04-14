var init_basic;
function basic(){
    if($('#target').is(':hidden')||!!init_basic){
        return false;
    }
    init_basic = 1;
    var head_portrait_data = {x:0,y:0,w:0,h:0,p:0};
    cutImage($(".jcrop_w>img"));
    var _Jw = ($("#target").width() - 120) / 2 ,
            _Jh = ($("#target").height() - 120) / 2 ,
            _Jw2 = _Jw + 120,
            _Jh2 = _Jh + 120;

    $('#target').Jcrop({
        setSelect: [_Jw, _Jh, _Jw2, _Jh2],
        onChange: showPreview,
        onSelect: showPreview,
        bgFade: true,
        bgColor: "white",
        aspectRatio: 120/120,
        bgOpacity: .5
    });
    $("#idLeft").click(function(e){
        imgRotate(-60);
        return false;
    });
    $("#idRight").click(function(e){
        imgRotate(60);
        return false;
    });
    $("#idBig").click(function(e){
        imgToSize(20);
        return false;
    });
    $("#idSmall").click(function(e){
        imgToSize(-20);
        return false;
    });
};
//图片旋转
function imgRotate(deg){
    var img1 = $(".jcrop_w>img"),
        _data = parseInt($(".jc-demo-box").attr("data"));
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = eval(parseInt(RegExp["$1"]));
    if(fIEVersion == 8 || fIEVersion == 7 || fIEVersion == 6 ){
        var sin = Math.sin(Math.PI / 180 * (_data + deg)), cos = Math.cos(Math.PI / 180 * (_data + deg));
        var _filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + cos + "," +  "M12=" + (-sin)
            + ",M21=" + sin+ ",M22=" + cos + ",SizingMethod='auto expand')";
        img1.css({
            filter: _filter
        });
        $('.pre-1 img,.pre-2 img,.pre-3 img').css({
            filter: _filter
        });

    }else{
        var _deg = deg + _data;
        var _val =  "rotate("+ _deg + "deg)";
        img1.css({
            "-webkit-transform": _val,
               "-moz-transform": _val,
                "-ms-transform": _val,
                 "-o-transform": _val,
                    "transform": _val
        });
        $('.pre-1 img,.pre-2 img,.pre-3 img').css({
            "-webkit-transform": _val,
               "-moz-transform": _val,
                "-ms-transform": _val,
                 "-o-transform": _val,
                    "transform": _val
        });
    }

    var     fiw = $('.jcrop_w>img').width(),
            fih = $('.jcrop_w>img').height(),
            ow = Math.floor((543 - fiw) / 2),
            oh = Math.floor((270 - fih) / 2),
            cx = $("#small").position().left,
            cy = $("#small").position().top,
            rx = 120 / $("#small").width(),
            ry = 120 / $("#small").height(),
            rx1 = 60 / $("#small").width(),
            ry1 = 60 / $("#small").height(),
            rx2 = 40 / $("#small").width(),
            ry2 = 40 / $("#small").height();



    if(fIEVersion == 8 || fIEVersion == 7 || fIEVersion == 6){
        pre_img2($('.pre-1 img'), rx, fih, ry, fiw, cx, cy, ow, oh);
        pre_img2($('.pre-2 img'), rx1, fih, ry1, fiw, cx, cy, ow, oh);
        pre_img2($('.pre-3 img'), rx2,  fih, ry2, fiw, cx, cy, ow, oh);
    }else{
        pre_img2($('.pre-1 img'), rx, fiw, ry, fih, cx, cy, ow, oh);
        pre_img2($('.pre-2 img'), rx1, fiw, ry1, fih, cx, cy, ow, oh);
        pre_img2($('.pre-3 img'), rx2, fiw, ry2, fih, cx, cy, ow, oh);
    }

    $(".jcrop_w img").css({
        left: ow,
        top: oh
    });

    if( deg > 0){
        if(_data == 270){
            _data = 0;
        }else{
            _data = _data + 60;
        }
    }else{
        if(_data == 0){
            _data = 270;
        }else{
            _data = _data - 60;
        }
    }
	$("#d").val(_data);
    $(".jc-demo-box").attr("data", _data);
}

//放大缩小图片
function imgToSize(size) {
    var iw = $('.jcrop_w>img').width(),
        ih = $('.jcrop_w>img').height(),
        _data = $(".jc-demo-box").attr("data"),
        _w = Math.round(iw + size),
        _h = Math.round(((iw + size) * ih) / iw);
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = eval(parseInt(RegExp["$1"]));
    if((fIEVersion == 8 || fIEVersion == 7 || fIEVersion == 6) && (_data == 60 || _data == 270)){
        $('.jcrop_w>img').width(_h).height(_w);
    }else{
        $('.jcrop_w>img').width(_w).height(_h);
    }

    var     fiw = $('.jcrop_w>img').width(),
            fih = $('.jcrop_w>img').height(),
            ow = (543 - fiw) / 2,
            oh = (270 - fih) / 2,
            cx = $("#small").position().left,
            cy = $("#small").position().top,
            rx = 120 / $("#small").width(),
            ry = 120 / $("#small").height(),
            rx1 = 60 / $("#small").width(),
            ry1 = 60 / $("#small").height(),
            rx2 = 40 / $("#small").width(),
            ry2 = 40 / $("#small").height();

    if((fIEVersion == 8 || fIEVersion == 7 || fIEVersion == 6) && (_data == 60 || _data == 270)){
        pre_img2($('.pre-1 img'), rx, fih, ry, fiw, cx, cy, ow, oh);
        pre_img2($('.pre-2 img'), rx1, fih, ry1, fiw, cx, cy, ow, oh);
        pre_img2($('.pre-3 img'), rx2, fih, ry2, fiw, cx, cy, ow, oh);
    }else{
        pre_img2($('.pre-1 img'), rx, fiw, ry, fih, cx, cy, ow, oh);
        pre_img2($('.pre-2 img'), rx1, fiw, ry1, fih, cx, cy, ow, oh);
        pre_img2($('.pre-3 img'), rx2,  fiw, ry2, fih, cx, cy, ow, oh);
    }
    $(".jcrop_w img").css({
        left: ow,
        top: oh
    });

};

        //
function pre_img2(obj, rx, iw, ry, ih, cx, cy, ow, oh){
            obj.css({
                width: Math.round(rx * iw) + 'px',
                height: Math.round(ry * ih) + 'px'
            });
            if( cy >= oh && cx >= ow){
                obj.css({
                    marginLeft: '-' + Math.round(rx * (cx - ow)) + 'px',
                    marginTop: '-' + Math.round(ry * (cy - oh)) + 'px'
                });
            }else if( cy <= oh && cx >= ow){
                obj.css({
                    marginLeft: "-" + Math.round(rx * (cx - ow)) + 'px',
                    marginTop: Math.round(ry * (oh - cy)) + 'px'
                });
            }else if( cy >= oh && cx <= ow){
                obj.css({
                    marginLeft: Math.round(rx * (ow - cx)) + 'px',
                    marginTop: '-' + Math.round(ry * (cy - oh)) + 'px'
                });
            }else if( cy <= oh && cx <= ow){
                obj.css({
                    marginLeft: Math.round(rx * (ow - cx)) + 'px',
                    marginTop: Math.round(ry * (oh - cy)) + 'px'
                });
            }

        };
//默认图像位置
function cutImage(obj) {
    var w = 543,
        h = 270,
        iw = obj.width(),
        ih = obj.height();
    if(iw > w || ih > h){
        if(iw / ih > w / h){
            obj.css({
                width: w,
                height: w * ih / iw,
                top: (h - (w * ih / iw)) / 2,
                left: 0
            });
        }else{
            obj.css({
                height: h,
                width: h * iw / ih,
                top: 0,
                left: (w - (h * iw / ih)) / 2
            });
        }
    }else{
        obj.css({
            left: (w - iw) / 2,
            top: (h - ih ) / 2
        });
    }
}
function showPreview(c){
	var iw = $('.jcrop_w>img').width(),
		ih = $('.jcrop_w>img').height(),
        ow = (543 - iw) / 2,
        oh = (270 - ih) / 2,
		rx = 120 / c.w,
		ry = 120 / c.h,
		rx1 = 60 / c.w,
		ry1 = 60 / c.h,
		rx2 = 40 / c.w,
		ry2 = 40 / c.h,
		_data = $(".jc-demo-box").attr("data");
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = eval(parseInt(RegExp["$1"]));

    if((fIEVersion == 8 || fIEVersion == 7 || fIEVersion == 6) && (_data == 60 || _data == 270)){
		pre_img2($('.pre-1 img'), rx, ih, ry, iw, c.x, c.y, ow, oh);
		pre_img2($('.pre-2 img'), rx1, ih, ry1, iw, c.x, c.y, ow, oh);
		pre_img2($('.pre-3 img'), rx2, ih, ry2, iw, c.x, c.y, ow, oh);
	}else{
		pre_img2($('.pre-1 img'), rx, iw, ry, ih, c.x, c.y, ow, oh);
		pre_img2($('.pre-2 img'), rx1, iw, ry1, ih, c.x, c.y, ow, oh);
		pre_img2($('.pre-3 img'), rx2, iw, ry2, ih, c.x, c.y, ow, oh);
	}
	$('#x').val(c.x);
	$('#y').val(c.y);
	$('#w').val(c.w);
	$('#h').val(c.h);
}
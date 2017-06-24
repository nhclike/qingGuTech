/**
 * Created by uid on 2017/4/12.
 */

//大屏幕动画
$('#shape li:gt(12)').css('right','-100%');
$('#shape li:eq(12)').css('opacity','0');
$('#shape li:lt(12)').css('left','-100%');
var duration=1000;
$(window).ready(function() {
    "use strict";
    $('#shape li:gt(12)').animate({
        'right': '0'
    }, duration, function () {
    });
    $('#shape li:eq(12)').animate({
        'opacity': '1'
    }, duration, function () {
    });
    $('#shape li:lt(12)').animate({
        'left': '0'
    }, duration, function () {
    });

    //鼠标移入事件
    $('#shape ul').on('mouseenter','li',function(){
        console.log(this);
        $(this).addClass('active').siblings('.active').removeClass('active');
        $(this).removeClass('rotate');
    });

    $('#shape ul').on('mouseleave','li',function(){
        console.log(this);
        $(this).addClass('rotate')
    });
    var url="../index.html";
    $('#shape ul').on('click','li',function(){
        //页面跳转
        console.log(1);
        open(url,'_blank');
    });
});







//小屏幕动画
$('#sm-shape li:gt(7)').css('right','-100%');
$('#sm-shape li:eq(7)').css('opacity','0');
$('#sm-shape li:lt(7)').css('left','-100%');
var duration=100;
$(window).ready(function() {
    "use strict";
    $('#sm-shape li:gt(7)').animate({
        'right': '0'
    }, duration, function () {
    });
    $('#sm-shape li:eq(7)').animate({
        'opacity': '1'
    }, duration, function () {
    });
    $('#sm-shape li:lt(7)').animate({
        'left': '0'
    }, duration, function () {
    });

    //小屏幕移入事件
    $('#sm-shape ul').on('mouseenter','li',function(){
        $(this).addClass('active').siblings('.active').removeClass('active');
        $(this).addClass('rotate').siblings('.rotate').removeClass('rotate');
    });


    $('#sm-shape ul').on('mouseleave','li',function(){
        $(this).removeClass('rotate');
    });
    var url="../index.html";
    $('#sm-shape ul').on('click','li',function(){
        //页面跳转
            console.log(1);
            open(url,'_blank');
    });





    //找到a添加绑定事件
    $('#more').click(function(e){
        e.preventDefault();
        var count=$('#sm-shape li:hidden').length;
        if(count===0){
            $('#sm-shape li:not(.hid)').addClass('hide').removeClass('show');
            $(this).html('显示全部');
        }
        else{
            console.log(3);
            $(this).html('收起');
            $('#sm-shape li:hidden').addClass('show').removeClass('hide');
            console.log(4);
        }
    });
});




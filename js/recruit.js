(function(){
    var screenWidth = document.body.clientWidth,
        slidesPerView = 6; //默认显示6个

    if(screenWidth < 768){
        //超小屏 -- 显示两个
        slidesPerView = 2;
    }else if(screenWidth >= 768 && screenWidth < 1200) {
        //小屏幕 -- 显示4个
        slidesPerView = 4;
    }

    var mySwiper = new Swiper('.swiper-container',{
        loop: true,
        slidesPerView : slidesPerView
    });

    //左箭头
    $('.pagination-container .glyphicon-arrow-left').click(function(){
        mySwiper.slidePrev()
    });

    //右箭头
    $('.pagination-container .glyphicon-arrow-right').click(function(){
        mySwiper.slideNext()
    });

    $(document).on('mouseenter','.swiper-container .show-detail',function(){
        var dataIndex = $(this).attr('data-index'),//当前hover的show-detail对应的data-index
            singleWidth = $('.swiper-container').width() / slidesPerView,//计算当前屏幕下，每个滑块的宽度（总宽度/显示的滑块数）
            nowIndex = $(this).parent().index('.swiper-slide'),//当前hover的show-detail所在滑块,在所有滑块中的位置（因为swiper是loop模式,并不只有8个，可F12看dom）
            activeIndex = $('.swiper-slide-active').index('.swiper-slide'),//swiper的active滑块在所有滑块中的位置，active滑块为可见滑块中最左边那个
            offsetIndex = nowIndex - activeIndex,
            //hover的滑块在所有滑块中的位置 - active滑块在所有滑块中的位置 = 两个滑块相差的滑块数，也就是hover的滑块距离整个swiper-container的滑块数
            offsetLeft = offsetIndex * singleWidth,//滑块个数 * 单个滑块宽度 = 距离swiper-containe的宽度
            contentHeight = $('.sub-image').height() + $('.swiper-container').height() - $('.details-container .detail > p').height(),
            //图片的高度 + swiper-container的高度 - 卡片详情标题的高度（蓝色那块）= 卡片内容高度，这样可以保持，无论图片怎么变，保持卡片最上面与图片上面平齐
            $detailDom = $('.details-container .detail').eq(dataIndex);//获取对应的卡片，方便后面操作


        $detailDom.find('.content').outerHeight(contentHeight);//找到卡片内容区域，赋予高度
        $detailDom.width(singleWidth).css('left',offsetLeft).slideToggle();//给卡片赋予宽度,并加上左间距，显示
    })
    $('.details-container .detail').mouseleave(function(){
        //当鼠标离开卡片时，操作对应卡片，使其消失
        var index = $(this).index('.detail'),
            $detailDom = $('.details-container .detail').eq(index);

        $detailDom.slideToggle();
    })

    $('.to-top').toTop(); //回到顶部

})();
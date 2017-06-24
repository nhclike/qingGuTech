$(function(){
    //invest效果图
    (function(){
        //鼠标进入事件
        $("#invest .invest>li").hover(
            function(){$(this).find("h6").removeClass("hides").addClass("shows")},
            function(){$(this).find("h6").removeClass("shows").addClass("hides")});
        $("#invest .list>li").click(function(){
        var index=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $("#invest .invest>li").eq(index).addClass("animated rubberBand").siblings().
            removeClass("rubberBand")
        })
})();
    //科技视角
    (function(){
        $("#persepctive>.text>div:not(.modal-text) p").click(function(){
                var index=$(this).index()-1;
                $("#persepctive .modal-text").eq(index).removeClass("fadeOutLeft hide").addClass("show animated fadeInRight");
                $("#persepctive .modal-text button").click(function(){
                    $(this).parent().removeClass("show fadeInRight").addClass("fadeOutLeft")
                })
            })
        }
    )();
    //集团风采
    (function(){
        var i=0;
        $("#company .img>a").click(function(e){
            e.preventDefault();
            var divs=$("#company .img>ul>li");
                ps=$("#company >p");
            if($(this).attr("id")=="next"){
                i++;
                console.log( i)
                if(i>=divs.length)i=0;
                Fade(ps,divs);
            }
            else{
                if(i<=0)i=divs.length;
                i--;
                Fade(ps,divs);
            }
        })
        function Fade(ps,that){
            ps.eq(i).removeClass("hide").addClass("show animated bounceInLeft").
                siblings(".show").addClass("hide").removeClass("show bounceInLeft");
            that.eq(i).removeClass("hide").addClass("show animated rubberBand").
                siblings(".show").addClass("hide").removeClass("show rubberBand");

        }
    })();
    //学院风采
    (function(){
        var i=0;
        $("#institute .btnLeft>a").click(function(e){
            e.preventDefault();
            var divs=$("#institute .text")
            if($(this).hasClass("next")){
                i++;
                if(i>=divs.length)i=0;
               divs.eq(i).fadeIn(500).addClass("show").
                    siblings(".show").removeClass("show").hide();
            }
            else{
                if(i<=0)i=divs.length;
                i--;
                $("#institute .text").eq(i).fadeIn(500).addClass("show").
                    siblings(".show").removeClass("show").hide();
            }
        })
    })();
    //侧边菜单栏的效果

    (function(){
        $("#caidan>button").click(function(){
            $(this).next().slideToggle(300);
        });
        $(".active-1>li:last-child").click(function(){
            $(this).parent().slideUp(300);
        });
    })();
    //标题特效
    //(function(){
    //    $("h3:has(span)").hover(function(){
    //        $(this).find("span").addClass("animated hinge");
    //    },function(){
    //        $(this).find("span").removeClass(" hinge")
    //    })
    //
    //})()

});


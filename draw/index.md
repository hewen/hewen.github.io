---
title: 绘画
layout: draw
comments: yes
---
<SCRIPT LANGUAGE="JavaScript" src="/media/draw/js/cloud-carousel.1.0.5.min.js"></SCRIPT>
<script>
$(document).ready(function(){
        // This initialises carousels on the container elements specified, in this case, carousel1.
        $("#carousel1").CloudCarousel(        
        {            
                xPos: 320,//调整与左边框的距离
                yPos: 50,//调整top 距离
                buttonLeft: $("#left-but"),//左转
                buttonRight: $("#right-but"),//右转
                altBox: $("#alt-text"),//图片alt属性值
                titleBox: $("#title-text"),//图片title值
                reflHeight:50,//图片倒影
                reflOpacity:0.5,//图片倒影的透明度
                reflGap:0,//图片与倒影的距离
                minScale:0.5,
                xRadius:0,//所有图片围城的圈的大小（平行）
                yRadius:50,//所有图片围城的圈的视角
                FPS: 30,//图片旋转缓冲的速度
                autoRotate: 'none',//默认的转动方向
                autoRotateDelay: 2500,//默认图片的停留时间毫秒算
                speed:0.2,//图片旋转的速度
                mouseWheel: true,
                bringToFront: true
        }
        );
});

</script>
<div id = "carousel1">            
<div id="nav-text">最新作品</div>
<div id="nav-buts">
        <input id="right-but" type="button" value="<<" />
        <input id="left-but"  type="button" value=">>" />
</div>

<img class = "cloudcarousel" src="/media/draw/image/small/2014-02-06_small.gif" alt="Flag 1 Description" title="Flag 1 Title" width="180px"/>
<img class = "cloudcarousel" src="/media/draw/image/small/2014-02-06-01_small.gif" alt="Flag 2 Description" title="Flag 2 Title" width="180px"/>
<img class = "cloudcarousel" src="/media/draw/image/small/2014-02-03-02_small.gif" alt="Flag 3 Description" title="Flag 3 Title" width="180px"/>
<img class = "cloudcarousel" src="/media/draw/image/small/2014-02-03_small.gif" alt="Flag 4 Description" title="Flag 4 Title" width="180px"/>
<img class = "cloudcarousel" src="/media/draw/image/small/2014-01-21_small.gif" alt="Flag 4 Description" title="Flag 4 Title" width="180px"/>
</div>

<hr/>
所有作品
=============
<a href="/draw/2014-02-06"><img class="draw_list" src="/media/draw/image/small/2014-02-06_small.gif"></a>
<a href="/draw/2014-02-06-01"><img class="draw_list" src="/media/draw/image/small/2014-02-06-01_small.gif"></a>
<a href="/draw/2014-02-03-02"><img class="draw_list" src="/media/draw/image/small/2014-02-03-02_small.gif"></a>
<a href="/draw/2014-02-03"><img class="draw_list" src="/media/draw/image/small/2014-02-03_small.gif"></a>
<a href="/draw/2014-01-21"><img class="draw_list" src="/media/draw/image/small/2014-01-21_small.gif"></a>

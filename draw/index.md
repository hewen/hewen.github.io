
---
title: 绘画
layout: page
comments: yes
---
<script src="/media/draw/js/cloud-carousel.1.0.5.min.js" type="text/javascript"></script>
pt type="text/javascript">
$(function() {
                $('.kc-wrap').KillerCarousel({
                        // Width of carousel.
width: 800,
// Item spacing in 3d (CSS3 3d) mode.
spacing3d: 120,
// Item spacing in 2d (no CSS3 3d) mode. 
spacing2d: 120,
// Path to images for shadows etc.
imagePath: "/sites/starplugins/js/killercarousel/",
showShadow: true,
showReflection: true,
// Looping mode.
infiniteLoop: true,
// Scale at 75% of parent element.
autoScale: 85

});

                var kc = $('.kc-wrap').data('KillerCarousel');
                var dir = 0;
setInterval(function() {
                kc.position(kc.position() + dir * 50);
                }, 100)
$(window).bind('mouseup touchend', function() {
                dir = 0;
                kc.lineUp();
                })
$('.nav-but-left,.nav-but-right').bind('mousedown touchstart', function(evt) {
                // console.log(evt.type + " "+Date.now());
                dir = -1;
                if ($(this).hasClass('nav-but-left'))
                dir = 1;
                evt.preventDefault();
                return false;
                })

});
</script>

<style>
.kc-wrapx {
top:-15px;
    background-position: center 45%;
clear:both;
}



/* CSS for item wrapper */
.kc-item {
position:absolute;              
width:188px;
height:250px;
}

/* CSS for images inside item wrapper */
.kc-item img {
position:absolute;
         pointer-events: none;   /* Make images non-selectable. */
width:100%;             /* Make images expand to wrapper size (used in 2d modes). */
}

#nav-buts {
position:absolute;
bottom:10px;
right:10px;
}

.nav-but-left,.nav-but-right {
        font-family: arial;
width:32px;
height:28px;
border:2px solid #ccc;
       background-color: #444;
       border-radius: 5px;
       text-align:center;
float:left;
color:#fff;
      font-size: 16px;
      margin-right:10px;
      padding-top:0px;
      box-shadow: 1px 1px 3px rgba(0,0,0,0.25);
cursor: pointer;
}
.nav-but-left:hover,.nav-but-right:hover {
        background-color:#666;
}
</style>
<!--
<div id="draw_list">
<a href="/draw/2014-02-06"><img class="CloudCarousel" src="/media/draw/image/small/2014-02-06_small.gif"></a>
<a href="/draw/2014-02-06-01"><img class="CloudCarousel" src="/media/draw/image/small/2014-02-06-01_small.gif"></a>
<a href="/draw/2014-02-03-02"><img class="CloudCarousel" src="/media/draw/image/small/2014-02-03-02_small.gif"></a>
<a href="/draw/2014-02-03"><img class="CloudCarousel" src="/media/draw/image/small/2014-02-03_small.gif"></a>
<a href="/draw/2014-01-21"><img class="CloudCarousel" src="/media/draw/image/small/2014-01-21_small.gif"></a>
</div>
--!>
<div class="kc-wrap">
<!-- Carousel items follow -->
<div id="nav-buts">
<div class="nav-but-left">«</div>
<div class="nav-but-right">»</div>
</div>

<div class="kc-horizon" style="position: absolute; top: 50%; width: 800px; perspective: 1500px; transform-style: preserve-3d; perspective-origin: 50% 0px; left: 70px; transform: scaleX(0.99875) scaleY(0.99875); visibility: visible;"><div class="kc-item" data-cc-item-key="5" style="transform-style: preserve-3d; opacity: 1; z-index: -100; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-600px) translateX(-74.4226px) rotateY(-45deg) rotateX(-20deg);">
<img alt="Head of a Woman 1508" src="/kcimages/cropped-small/image5.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="6" style="transform-style: preserve-3d; opacity: 1; z-index: 50; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-450px) translateX(-89.0753px) rotateY(-33.75deg) rotateX(-15deg);">
<img alt="St. John the Baptist 1516" src="/kcimages/cropped-small/image6.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="7" style="transform-style: preserve-3d; opacity: 1; z-index: 200; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-300px) translateX(-17.6068px) rotateY(-22.5deg) rotateX(-10deg);">
<img alt="The Virgin and Child with St Anne and St John the Baptist 1500" src="/kcimages/cropped-small/image7.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="8" style="transform-style: preserve-3d; opacity: 1; z-index: 350; visibility: visible; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-150px) translateX(124.404px) rotateY(-11.25deg) rotateX(-5deg);">
<img alt="Madonna of the Yarnwinder 1507" src="/kcimages/cropped-small/image8.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item kc-front-item" data-cc-item-key="9" style="transform-style: preserve-3d; opacity: 1; visibility: visible; z-index: 500; width: 188px; height: 250px; transform: translateY(-125px) translateZ(0px) translateX(306px) rotateY(0deg) rotateX(0deg);">
<img alt="The Virgin and Child with St. Anne 1508" src="/kcimages/cropped-small/image9.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="10" style="transform-style: preserve-3d; opacity: 1; visibility: visible; z-index: 350; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-150px) translateX(487.596px) rotateY(11.25deg) rotateX(-5deg);">
<img alt="Madonna of the Carnation 1480" src="/kcimages/cropped-small/image10.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="11" style="transform-style: preserve-3d; opacity: 1; visibility: visible; z-index: 200; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-300px) translateX(629.607px) rotateY(22.5deg) rotateX(-10deg);">
<img alt="La belle ferronnière 1496" src="/kcimages/cropped-small/image11.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="12" style="transform-style: preserve-3d; opacity: 1; visibility: visible; z-index: 50; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-450px) translateX(701.075px) rotateY(33.75deg) rotateX(-15deg);">
<img alt="Adoration of the Magi 1481" src="/kcimages/cropped-small/image12.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div><div class="kc-item" data-cc-item-key="13" style="transform-style: preserve-3d; opacity: 1; visibility: visible; z-index: -100; width: 188px; height: 250px; transform: translateY(-125px) translateZ(-600px) translateX(686.423px) rotateY(45deg) rotateX(-20deg);">
<img alt="Portrait of a Musician 1490" src="/kcimages/cropped-small/image13.jpg">
<img class="cc-decoration kc-shadow-bottom" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-bottom.png"><img class="cc-decoration kc-shadow-left" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-left.png"><img class="cc-decoration kc-shadow-right" style="background-image: none;" src="http://www.starplugins.com/sites/starplugins/js/killercarousel/shadow-right.png"><canvas class="cc-decoration kc-reflection" style="height: 12%; top: 100%;" width="188" height="32"></canvas></div></div></div>

function gtag(){dataLayer.push(arguments)}function handleOutboundLinkClicksfooter(t){ga("send","event","Button","clicked","footer-home-button","1"),setTimeout(function(){window.location.href="http://balajisankar.tech"},1e3)}var shuffle=function(t){for(var e,n,i=t.length;i>0;)n=Math.floor(Math.random()*i),i--,e=t[i],t[i]=t[n],t[n]=e;return t};window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-109286238-1"),function(t,e,n,i,o,a,s){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,a=e.createElement(n),s=e.getElementsByTagName(n)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(a,s)}(window,document,"script",0,"ga"),ga("create","UA-109286238-1","auto"),ga("send","pageview"),function(t,e,n){var i,o=t.getElementsByTagName(e)[0];t.getElementById(n)||((i=t.createElement(e)).id=n,i.src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0&appId=292034664617962",o.parentNode.insertBefore(i,o))}(document,"script","facebook-jssdk"),$(function(){function t(){$("#board").removeClass("grid","x5"),$("#board").css("height","initial"),$("#board").html('<div style=" font-size: 36px;text-align:center;">Your score </div> <div style="color: red;text-align:center;margin-top:20px;font-size: 42px;opacity: .6;">'+resultTime+"</div>"),$("#hint").hide(),$(".social-icon").css("display","flex");var t=0<=resultTime&&resultTime<=20?0:21<=resultTime&&resultTime<=30?1:31<=resultTime&&resultTime<=40?2:41<=resultTime&&resultTime<=60?3:61<=resultTime&&resultTime<=80?4:81<=resultTime&&resultTime<=100?5:6,n=e[t];$(".description").html(n+'<div> <a href="http://balajisankar.tech" id="sucesspage">Home</a> </div>'),$("#whatsapp").attr("href","whatsapp://send?text=My Score :"+resultTime+". Try it on your own http://balajisankar.tech/games/1to50"),$("#time").html("")}$(window).height()<630?($("footer").css("position","initial"),$("footer").css("margin-top","20px"),$(".grid-structure").css("margin-left",'10px')):($("footer").css("position","absolute"),$("footer").css("margin-top","0px"),$(".grid-structure").css("margin-left",'initial'),$(".grid-structure").css("margin-top","initial")),$(window).resize(function(){$(window).height()<630?($("footer").css("position","initial"),$("footer").css("margin-top","20px")):($("footer").css("position","absolute"),$("footer").css("margin-top","0px"),$(".grid-structure").css("margin-top","initial"))});var e=["Congratulations!! you have reached a apex milestone.","You’re the best","Wow! You are so brisk!","Try again! I think you can do it well!","Not bad, but average!","Very slow..You can it best! Try again!","Are you ok? I think you can do it again!!."];$(document).on("click","#sucesspage",function(){ga("send","event","Link","clicked","successpage-home-button"),setTimeout(function(){window.location.href="http://balajisankar.tech"},1e3)});for(var n=[],i=[],o=1;25>=o;o++)n.push(o);for(o=26;50>=o;o++)i.push(o);var a,s=function(){level=1,n=shuffle(n),i=shuffle(i),$("#board > div").each(function(t){$(this).css({opacity:1}).show().html('<span class="box" style="z-index:'+(100-n[t])+'"></span>'+n[t])}),clearInterval(c),$("#time").text("0.000")},r=function(){$("#score").text(level)},c=0,l=function(){a=+new Date,c=setInterval(function(){var t=+new Date;resultTime=(t-a)/1e3,$("#time").text(resultTime)},80)},u=function(){var t=function(t,e){1==t&&l(),25>=t?e.animate({opacity:0},100,function(){e.css("background",""),e.stop().animate({opacity:1},100).html('<span class="box" style="z-index:'+(100-i[e.index()])+'"></span>'+i[e.index()])}):e.text("").animate({opacity:0},100),50>t?r():d()},e=+new Date;$("#board > div").on("touchstart",function(t){var n=+new Date;300>n-e?(t.preventDefault(),t.stopImmediatePropagation()):e=n}),$("#board > div").on("tap touchend click",function(e){e.preventDefault(),e.stopImmediatePropagation(),$(this).text()==level&&(function(e,n){setTimeout(function(){t(e,n)},0)}(level,$(this)),50>level&&level++)}),$(".resetBtn").on("click",function(){$("#board div").css("background",""),s()})},d=function(){clearInterval(c),t(resultTime)};location.hash="",s(),u()}),$(function(){for(var t=[],e=[],n=1;25>=n;n++)t.push(n);for(n=26;50>=n;n++)e.push(n);var i,o=function(){level=1,t=shuffle(t),e=shuffle(e),$("#board > div").each(function(e){$(this).css({opacity:1}).show().html('<span class="box" style="z-index:'+(100-t[e])+'"></span>'+t[e])}),clearInterval(s),$("#time").text("0.000")},a=function(){$("#score").text(level)},s=0,r=function(){i=+new Date,s=setInterval(function(){var t=+new Date;resultTime=(t-i)/1e3,$("#time").text(resultTime)},50)},c=function(){var t=function(t,n){1==t&&r(),25>=t?n.animate({opacity:0},100,function(){n.css("background",""),n.stop().animate({opacity:1},100).html('<span class="box" style="z-index:'+(100-e[n.index()])+'"></span>'+e[n.index()])}):n.text("").animate({opacity:0},100),50>t?a():l()},n=+new Date;$("#board > div").on("touchstart",function(t){var e=+new Date;300>e-n?(t.preventDefault(),t.stopImmediatePropagation()):n=e}),$("#board > div").on("tap touchend click",function(e){e.preventDefault(),e.stopImmediatePropagation(),$(this).text()==level&&(function(e,n){setTimeout(function(){t(e,n)},0)}(level,$(this)),50>level&&level++)}),$(".resetBtn").on("click",function(){o()})},l=function(){clearInterval(s),getComment(resultTime)};location.hash="",o(),c(),$("#hint").click(function(){$("#board div").filter(function(){return parseInt($(this).text())===level}).css("background","red")})});
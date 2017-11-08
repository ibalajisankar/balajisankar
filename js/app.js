
$(function()
{
  if($(window).width() > 767)
   { $('.one-fourth-screen').css("height","calc(100vh - ("+$("footer").outerHeight()+"px))");}
   else
   { $('.one-fourth-screen').css("height","initial");}
  
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();
        if($('.controls input').length < 6){
        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);
        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('');
        }
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parent().remove();
		e.preventDefault();
		return false;
	});
  $('#serialnumber-page a:nth-child(2)').click(function(){
        $('#flip-coin').modal('show');            
        });
        function eventload(e){
          var data= $(this).val();
          // $(this).val(this.value.match(/^[0-9]{1,10}$/));
               if (((e.keyCode || e.which) == 8) || ((e.keyCode || e.which) == 46)  )
                   { 
                       
                       $(this).prev('input').focus();
                   }
               else
                  {
                     if(data.split('').length>1 )
                     {
                      //$( ".code input").unbind("focus");                                      
                       // $(".code input").focus('eventload');
                      //$( ".code input#code1").unbind("focus");                
                    }
                     else
                      $(".code input").unbind('focus');  

                   $(this).val(data.split('')[0]);
                   $(this).next('input').val(data.substr(1));
                   $(this).next('input').focus();
                 
                 }
        }
        $(".code input").focus(eventload);
        $( ".code input#code1").unbind("focus");                
      $(".code input").keyup(eventload); 
        
    //   $(".code input").keyup(function(e) {
    //    var data= $(this).val();
    //  // $(this).val(this.value.match(/^[0-9]{1,10}$/));
    //       if (((e.keyCode || e.which) == 8) || ((e.keyCode || e.which) == 46)  )
    //           { 
                  
    //               $(this).prev('input').focus();
    //           }
    //       else
    //          { 
    //           $(this).val(data.split('')[0]);
    //           $(this).next('input').val(data.substr(1));
    //           $(this).next('input').focus();
            
    //         }
    //   });
        $("#code4").keyup(function(e){
            if (((e.keyCode || e.which) == 8) || ((e.keyCode || e.which) == 46)  )
                { 
                    $(this).prev('input').focus();
                }
            else
            $('#serialnumber-page a:nth-child(1)').focus();
        });
        
  $("input.alphaOnly").keyup(function(e) {
            $(this).val(this.value.match(/[a-zA-Z .]*/));
            
        });
   $("input.numeric").keyup(function(e){
            $(this).val(this.value.match(/[0-9]*/));
   }); 
   $("input.alphanumeric").keyup(function(e){
  $(this).val(this.value.match(/[a-zA-Z0-9]*/));
}); 

   $("input.alphanumbericspecial").keyup(function(e){
            $(this).val(this.value.match(/[a-zA-Z0-9.,/;:'"!@#$%*()<>|\\{}]*/));  
   });    
 function alphaOnly(event) {
                      var key = event.keyCode;
                      return ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || (key == 190) || (key == 32) || key == 8);}
                      $( ".request-invite" ).click(function() {
                        $('#flip-coin').modal('show');           
                      });
function IsAlphaNumeric(e) {
            var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
            var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
            return ret;
        }
        
function numeric(e){
           var key = event.keyCode;
           var ret = ((keyCode >= 48 && keyCode <= 57) );
           return ret;
}
});

var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

NUM_CONFETTI = 100;

COLORS = [[237,113,97], [255,204,102], [219, 56, 83], [72,160,220], [248, 182, 70]];

PI_2 = 2 * Math.PI;

canvas = document.getElementById("world");

context = canvas.getContext("2d");

window.w = 0;

window.h = 0;

resizeWindow = function() {
  window.w = canvas.width = window.innerWidth;
  return window.h = canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeWindow, false);

window.onload = function() {
  return setTimeout(resizeWindow, 0);
};

range = function(a, b) {
  return (b - a) * Math.random() + a;
};

drawCircle = function(x, y, r, style) {
  context.beginPath();
  context.arc(x, y, r, 0, PI_2, false);
  context.fillStyle = style;
  return context.fill();
};

xpos = 0.5;

document.onmousemove = function(e) {
  return xpos = e.pageX / w;
};

window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
})();

Confetti = (function() {
  function Confetti() {
    this.style = COLORS[~~range(0, 5)];
    this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
    this.r = ~~range(2, 6);
    this.r2 = 2 * this.r;
    this.replace();
  }

  Confetti.prototype.replace = function() {
    this.opacity = 0;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, w - this.r2);
    this.y = range(-20, h - this.r2);
    this.xmax = w - this.r;
    this.ymax = h - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    return this.vy = 0.7 * this.r + range(-1, 1);
  };

  Confetti.prototype.draw = function() {
    var ref;
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if (this.opacity > 1) {
      this.opacity = 1;
      this.dop *= -1;
    }
    if (this.opacity < 0 || this.y > this.ymax) {
      this.replace();
    }
    if (!((0 < (ref = this.x) && ref < this.xmax))) {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
  };

  return Confetti;

})();

confetti = (function() {
  var j, ref, results;
  results = [];
  for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
    results.push(new Confetti);
  }
  return results;
})();

window.step = function() {
  var c, j, len, results;
  requestAnimationFrame(step);
  context.clearRect(0, 0, w, h);
  results = [];
  for (j = 0, len = confetti.length; j < len; j++) {
    c = confetti[j];
    results.push(c.draw());
  }
  return results;
};

step();
 var counter=0;

function ss(){
if(counter<3){
    counter++;
}
else{
  
    $(function(){
        Program.Init();
    });}
}
$(function(){
    Program.Init();
});
var Program = {

    Init: function() {
      this.$target = $('#submit').attr("disabled", true);
      this.EnableSubmit();
      this.EventHandler();
    },
  
    EnableSubmit: function() {
      var value = this.Cookies.Get('submit_button');
      var now = Date.now();
      if (!value) {
        this.$target.removeAttr("disabled");
        return;
      }
      setTimeout(function() {
        Program.EnableSubmit();
      }, value - now);ss
    },
  // 144000 is one day
    Submit: function() {
      this.$target.attr("disabled", true);
      this.Cookies.Set('submit_button', Date.now() + 9000, {
        expire_in: 'minutes'
      });
      setTimeout(function() {
        Program.EnableSubmit();
      }, 5000);
    },
  
    EventHandler: function() {
      this.$target.on('click', function() {
        Program.Submit();
      });
    },
  
    // methods to manage cookies easily used above
    Cookies: {
  
      Get: function(name) {
        var n, ca, c;
        n = name + "=";
        ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          c = ca[i].trim();
          if (c.indexOf(name) === 0) return c.substring(name.length + 1, c.length);
        }
        return false;
      },
  
      Set: function(name, value, expire, options) {
        var d = new Date(),
          expires;
        var defaults = {
          expire_in: 'days',
          path: '/'
        };
        if (options !== undefined) $.extend(true, defaults, options);
        if (expire !== undefined && expire !== null) {
          if (defaults.expire_in == 'days') d.setDate(d.getDate() + expire);
          else if (defaults.expire_in == 'minutes') d.setTime(d.getTime() + (expire * 60 * 1000));
          else {
            console.log('expire_in configuration is not valid');
          }
          expires = "expires=" + d.toGMTString();
        } else expires = expires = "";
        document.cookie = name + "=" + value + "; " + expires + '; path=' + defaults.path;
        return true;
      }
  
    }
  
  };

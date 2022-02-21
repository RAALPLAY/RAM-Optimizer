$(document).ready(function(){
    $.get("update.xml",{},function(xml){
      // alert(xml);
      $('update',xml).each(function(i) {
        var url = ((xml.getElementsByTagName('link')[i]).childNodes[0]).nodeValue;
        var version = ((xml.getElementsByTagName('version')[i]).childNodes[0]).nodeValue;
        document.getElementById("ver").innerHTML = "v" + version
        document.getElementById("download").href = url
      });
    });

    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
  });
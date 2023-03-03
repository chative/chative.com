$(document).ready(function(){
    $(".bnner-btn-right").mouseover(function () {
      $(this).css({ "opacity": "80%" });
    })
    $(".bnner-btn-right").mouseout(function () {
      $(this).css({ "opacity": "100%" });
    });
    $(".bnner-btn-right").click(function () {
      var info = $(".mac_name").html();
      if( info == "Intel"){
        window.open("https://file-1307206075.file.myqcloud.com/chative/chative-desktop-mac-x64-latest.dmg");
      }else{
        window.open("https://file-1307206075.file.myqcloud.com/chative/chative-desktop-mac-arm64-latest.dmg");
      }
   
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
      return false;
    });
    $(".bnner-btn-left").mouseover(function () {
      $(this).css({ "opacity": "80%" });
    });
    $(".bnner-btn-left").mouseout(function () {
      $(this).css({ "opacity": "100%" });
    });
    $(".bnner-btn-left").click(function () {
      $(this).css({ "background": "#181A20","color":"#FFFFFF"});
      // $(".dropdown-menu").show();
    });
    $('.dropdown-val').click(function(){
      $(".mac_name").html($(this).html());
      $('.dropdown-val').css({background:"#1E2329"});
      $(this).css({background:"#001C4E"});
    });
    $('.dropdown-val').mouseout(function(){
      $(this).css({color:"#FFFFFF"});
    });
    $(".app_store").mouseover(function(){
      $(".qcode").css({"padding-bottom":"5px"});
      $(".app_store_q").show();
    });
    $(".app_store").mouseout(function(){
      $(".qcode").css({"padding-bottom":"0"});
      $(".app_store_q").hide();
    });

    // Detect OS version
    if (null != navigator.userAgent.match(/Intel Mac OS/)) {
        $(".mac_name").html("Intel");
    } else {
        $(".mac_name").html("M1");
    }
  });
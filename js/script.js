$(function(){

  var clickLink = $(".link-drop");
  var menuDrop = $(".menu-drop");

  clickLink.click(function() {
  $(this).next().addClass("active");
  $(this).next().removeClass("active");
  });

  clickLink.mouseenter(function() {
    $(".active").removeClass("active");
    $(this).next().addClass("active");
  });

});

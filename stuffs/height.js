$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#test').css('top', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
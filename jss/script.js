windows.onscroll = function(){

  var posicion = window.pageYoffset || document.documentElement.scrollTop;

  var elemento1 = document.getElementByid("icon_heard");
  var elemento2 = document.getElementByid("icon_fire");

  elemento1.style.bottom = posicion * 0.2 + "px";
  elemento2.style.top = posicion * 0.1 + "px";
}
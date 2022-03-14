javascript:(function(){
  selects = document.getElementsByTagName(`img`);
  style_visibility = (selects[0].style.visibility != `hidden`) ? `hidden` : `visible`;
  Array.prototype.forEach.call(selects, function(item) {
    item.style.visibility = style_visibility;
  });
})();
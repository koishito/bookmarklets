javascript:(function(){
var e=1.0;
function floatBOX(e){
  var a=document.createElement("div");
  a.style.cssText="position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);padding:50px;background:silver;border:1px solid #aaa;text-align:center;";
  a.innerHTML=e.toFixed(2)+' 倍速';
  a.style.fontSize = '40px';
  document.body.appendChild(a);
  setTimeout(closenode, 3000);
  function closenode(){a.parentNode.removeChild(a);}
  };
floatBOX(e);
})();

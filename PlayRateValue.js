javascript:(function(){
var pr=1;
var b=document.querySelector("video[src]");
if(b!=null){b.playbackRate=pr.toFixed(2);floatBOX(pr.toFixed(2)+' 倍速');}
function floatBOX(e){
  var a=document.createElement("div");
  a.style.cssText="position:fixed;top:150px;left:0;width:25%25;padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";
  /*a.style.cssText="position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);padding:50px;background:silver;border:1px solid #aaa;text-align:center;";*/
  a.innerHTML=e;
  a.style.fontSize = '40px';
  document.body.appendChild(a);
  setTimeout(closenode, 3000);
  function closenode(){a.parentNode.removeChild(a);}
};
})();

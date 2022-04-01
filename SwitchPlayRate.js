javascript:(function(){
  const a=[1, 1.25, 1.5, 2, 0.75, 1];
  const b=document.querySelector("video[src]");
  const cr=b.playbackRate;
  if(b!=null){
    d=a.reduce((p,c)=>(p==0)?c:((p==c)?0:p),cr);
    b.playbackRate=d;
    floatBOX(d.toFixed(2)+' 倍速');
  }
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
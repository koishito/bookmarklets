javascript:(function(){
  const a=[1, 1.25, 1.5, 2, 0.75];
  const b=document.querySelector("video[src]");
  const cr=b.playbackRate;
  if(b!=null){
    d=a.concat(a[0]).reduce((p,c)=>(p===null)?c:((p==c)?null:p),cr);
    b.playbackRate=d;
    floatBOX(d.toFixed(2)+' 倍速');
  }
  function floatBOX(e){
    var a=document.createElement("div");
    a.style.cssText="font-Size:40px;position:fixed;top:150px;left:0;width:auto;padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";
    a.innerHTML=e;
    document.body.appendChild(a);
    setTimeout(closenode, 3000);
    function closenode(){a.parentNode.removeChild(a);}
  };
})();
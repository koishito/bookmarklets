javascript:(function(){
  var b=document.querySelector("video[src]");
  if(b!=null){
    var a=document.createElement("div"),f,d,e;
    a.style.cssText="position:fixed;top:0px;left:0;width:100%25;padding:10px;background:teal;border:1px solid #aaa;text-align:center;z-index:19999;";
    a.onclick=function(){a.parentNode.removeChild(a);};
    z=[-60,-30,-10,-5,5,10,30,60];
    for(f=0;f<z.length;f++){
      e=z[f].toFixed(2);
      d=document.createElement("button");
      d.type="button";
      d.innerHTML=e;
      d.style.cssText="margin:4px;";
      d.value=e;
      d.onclick=c;
      a.appendChild(d);
    }
    document.body.appendChild(a);
    function c(g){
      g.stopPropagation();
      b.pause();
      var ct=b.currentTime + g.target.value;
      ct=ct<0?0:ct;
      ct=b.duration<ct?b.duration:ct;
      b.currentTime=ct;
      b.play();
      console.log(g.target.value);
    }
  }
})();

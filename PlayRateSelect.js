javascript:(function(){
  var b=document.querySelector("video[src]");
  if(b!=null){
    var a=document.createElement("div"),f,d,e;
    a.style.cssText="position:fixed;top:150px;left:0;width:100%25;padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";
    a.onclick=function(){a.parentNode.removeChild(a);};
    a.style.fontSize = "20px";
    a.appendChild(document.createTextNode("|"));
    z=[0.5,0.75,1.0,1.25,1.5,1.75,2.0,2.5,3.0];
    for(f=0;f<z.length;f++){
      e=z[f];
      d=document.createElement("button");
      d.type="button";
      d.innerHTML="&nbsp" + e.toFixed(2) + "&nbsp";
      d.style.cssText="margin:8px;background-color: "+ (b.playbackRate == e ? "#99FFCC;" : "gray;");
      d.value=e;
      d.onclick=c;
      a.appendChild(d);
      a.appendChild(document.createTextNode("|"))}
    document.body.appendChild(a);
    function c(g){
      g.stopPropagation();
      b.playbackRate=g.target.value;
      /*console.log(g.target.value);*/
      a.click();
    }
  };
})();

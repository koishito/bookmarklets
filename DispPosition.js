javascript:(function(){
  var a=document.createElement("div");
  a.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:silver;padding:10px;text-align:center;z-index:19999;";
  a.onclick=function(){
    document.body.removeEventListener("mousemove", dispPosition);
    a.parentNode.removeChild(a);
  };
  a.style.fontSize = '12px';
  x=document.createElement("input");
  x.type="text";
  x.size="3"
  x.id="xxx";
  y=document.createElement("input");
  y.type="text";
  y.size="3"
  y.id="yyy";
  a.appendChild(x);
  a.appendChild(y);
  document.body.appendChild(a);

  document.body.addEventListener("mousemove", dispPosition);
  function dispPosition(e){
    document.getElementById("xxx").value = "x : " + e.clientX;
    document.getElementById("yyy").value = "y : " + e.clientY;
  };

})();
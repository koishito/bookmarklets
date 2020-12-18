javascript:(function(){

  floatBox_to("test");

  function floatBox_to(text) {

    var mbox=document.createElement("div");
    mbox.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";

    var tnode = document.createTextNode(text);
    mbox.appendChild(tnode);
    document.body.appendChild(mbox);
    setTimeout(closenode, 3000);

    function closenode(){mbox.parentNode.removeChild(mbox);}
  }
  
})();

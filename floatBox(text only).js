javascript:(function(){

  floatBox_to("test");

  function floatBox_to(text) {

    var mbox=document.createElement("div");
    mbox.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:10px;text-align:center;z-index:19999;";
    mbox.style.opacity = '0.8';
    mbox.style.background = 'silver';
    mbox.style.border = '1px solid #aaa';
    mbox.style.fontSize = '80px';
    var tnode = document.createTextNode(text);
    mbox.appendChild(tnode);
    document.body.appendChild(mbox);

    /* setTimeout(closenode, 3000);
     function closenode(){mbox.parentNode.removeChild(mbox);}*/

    setTimeout(() =>{mbox.parentNode.removeChild(mbox);}, 3000);

  }
  
})();

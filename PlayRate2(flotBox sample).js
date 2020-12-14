/* Run on a page that has "video[src]"/ */
javascript:(function(){
/* Start of user processing */
var videosrc = document.querySelector("video[src]");
if(videosrc != null){
  
  var currentplaybackrate = videosrc.playbackRate;

  var array = [
    {class: "text", text: "PlayRate : "},
    {class: "button", text: "0.75", func: userProcessing1, arg: 0.75, default: (currentplaybackrate == 0.75)},
    {class: "button", text: "1.00", func: userProcessing1, arg: 1, default: (currentplaybackrate == 1)},
    {class: "button", text: "1.25", func: userProcessing1, arg: 1.25, default: (currentplaybackrate == 1.25)},
    {class: "button", text: "1.50", func: userProcessing2, arg: 1.5, default: (currentplaybackrate == 1.5)},
    {class: "button", text: "2.00", func: userProcessing2, arg: 2, default: (currentplaybackrate == 2)},
    {class: "default", func: floatBoxDefault}
  ];

  floatBox(array);

};
  /* End of user processing */

function userProcessing1(btn) {
  console.log(btn);
  btn.stopPropagation();
  /* Start of user processing */
  videosrc.playbackRate = btn.target.value;
  /* End of user processing */
  floatBoxButton(btn.target);
}

function userProcessing2(btn) {
  // console.log(btn);
  btn.stopPropagation();
  /* Start of user processing */
  videosrc.playbackRate = btn.target.value;
  /* End of user processing */
  floatBoxButton(btn.target);
}

function floatBoxButton(btn) {
  for (var i = 0; i < array.length ; i++) {
    var item = array[i];
    item.default = (item.arg == btn.value);
  }
  floatBox(array);
}

function floatBoxDefault(mbox) {
  mbox.target.parentNode.removeChild(mbox.target);
}

function floatBox(array) {

  var mbox=document.createElement("div");
  mbox.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:50px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";
  /*mbox.style.cssText="margin:auto auto;width:200px;height:200px;padding:10px;background:silver;border:1px solid #aaa;text-align:center;";
  mbox.style.cssText="position:fixed;top:150px;left:0;width:100%25;padding:10px;background:silver;border:1px solid #aaa;text-align:center;z-index:19999;";*/
  
  for (var i = 0; i < array.length ; i++) {
    var item = array[i];
  /*for (let item in array) {*/
    if (item.class == "text") {
      var tnode = document.createTextNode(item.text);
      //tnode.style.cssText="margin:4px;";
      mbox.appendChild(tnode);

    }else if(item.class == "button") {
      btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = "&nbsp" + item.text + "&nbsp";
      btn.style.cssText = "margin:4px; background-color:"+ (item.default ? "#99FFCC;" : "gray;");
      btn.value = item.arg;
      btn.onclick = item.func;
      mbox.appendChild(btn);
    
    }else if(item.class = "default") {
      mbox.onclick = item.func;

    }
  }

  mbox.style.fontSize = '14px';
  document.body.appendChild(mbox);
  sto = setTimeout(closenode, 5000);

  function closenode(){mbox.parentNode.removeChild(mbox);}

}

})();

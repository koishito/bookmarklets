javascript:(function(){
  var b = document.querySelector("video[src]");
  if(b != null){
    /* b.style.zIndex='9999';*/
    /* var player_container = document.getElementById('player-com-a-Video__container');
    if (player_container) {player_container.style.zIndex='9999'};*/
    var player_container = document.getElementById('player-container');
    if (player_container) {player_container.style.zIndex='9999'};
    ElementRegist();

    function ElementRegist() {

      var a = document.createElement("div");
      a.style.cssText = "visibility:visible;position:fixed;top:0px;left:0px;width:100%;padding:4px;\
                        background:teal;border:1px solid #aaa;text-align:center;z-index:19999;";
      a.style.fontSize = "20px";
      a.onclick = allremove;
      a.id = "mainiam";
      z = ["x0.5","x0.75","x1.0","x1.25","x1.5","x1.75","x2.0",-60,-30,-10,-5,5,10,30,60,"FullScreen"];
      for (f = 0; f < z.length; f++) {
        e = z[f];
        d = document.createElement("button");
        d.type = "button";
        d.innerHTML = e;
        d.style.cssText = "background:silver;padding:4px 10px;margin:8px;";
        if (isNaN(e)) {d.style.cssText = "margin:8px;background-color: " + (b.playbackRate == e.slice(1) ? "#99FFCC;" : "gray;");};
        d.value = e;
        d.onclick=c;
        a.appendChild(d);
        a.appendChild(document.createTextNode("|"));
      };
      
      document.body.appendChild(a);

      function cancelFullScreen(){
        const doc = window.document;
        const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        cancelFullScreen.call(doc);
      }
      
      function goFullScreen(element=null){
        const doc = window.document;
        const docEl = (element === null)?  doc.documentElement:element;
        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        requestFullScreen.call(docEl);
      }

      function c(g){
        var e = g.target.value;
        g.stopPropagation();
        if (e == "FullScreen") {
          if( window.document.fullscreenElement ){
            console.log("フルスクリーン開始");
            /*b.exitFullscreen();*/
            cancelFullScreen();
          } else {
            console.log("フルスクリーン終了");
            /*b.requestFullscreen();*/
            goFullScreen();
          }
        }else if (isNaN(e)) {
          e = e.slice(1);
          b.playbackRate = e;
          console.log(e,a,g);
          sto = setTimeout(closenode, 1000);
          function closenode(){a.click()};
          ElementRegist();
        } else {
          var ps = !b.paused;
          if (ps) {b.pause();}
          console.log(b.currentTime, parseInt(e));
          var ct = b.currentTime + parseInt(e);
          ct = (ct < 0) ? 0 : ct;
          ct = (b.duration) < ct ? b.duration : ct;
          b.currentTime = ct;
          if (ps) {b.play();}
          console.log(e,ct);
        }
      }

      /* darkenAround */
      var ownfilter = document.createElement('div');
      ownfilter.setAttribute('id','darkenAround');
      ownfilter.setAttribute('style','position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9998;');
      document.body.appendChild(ownfilter);

      function allremove() {
        var darkenAround = document.getElementById("darkenAround");
        if (darkenAround) {document.body.removeChild(darkenAround)};
        var mainiam = document.getElementById("mainiam");
        if (mainiam) {document.body.removeChild(mainiam)};

      }

      window.addEventListener("mousemove", event => {
        /*// console.log("screen:" + event.screenY);
        // console.log("client:" + event.clientY);
        // console.log("page  :" + event.pageY);
        // console.log("offset:" + event.offsetY);*/
        var darkenAround = document.getElementById("darkenAround");
        if (darkenAround) {darkenAround.style.visibility = !(event.clientY < 70) ? "visible" : "hidden";};
        var mainiam = document.getElementById("mainiam");
        if (mainiam) {mainiam.style.visibility = (event.clientY < 70) ? "visible" : "hidden";};
      });
      
    }
  }

})();
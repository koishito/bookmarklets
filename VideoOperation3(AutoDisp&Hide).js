javascript:(function(){
  if (document.getElementById("mainiam")) {return;}
  var b = document.querySelector("video[src]");
  if(b != null){
    /* for YouTube */
    b.playbackRate=1.25;
    var player = document.getElementById('player');
    if (player) {player.style.zIndex='9999'};

    ElementRegist();

    function ElementRegist() {

      var a = document.createElement("div");
      a.style.cssText = "visibility:visible;position:fixed;top:0px;left:0px;width:100%;padding:4px;\
                        background:black;border:none;text-align:center;z-index:19999;";
      a.style.fontSize = "20px";
      a.id = "mainiam";
      a.style.visibility = "hidden";
      z = ["x0.5","x0.75","x1.0","x1.25","x1.5","x1.75","x2.0",-60,-30,-10,-5,5,10,30,60,"FullScreen"];
      for (f = 0; f < z.length; f++) {
        e = z[f];
        d = document.createElement("button");
        d.type = "button";
        d.innerHTML = e;
        d.style.cssText = "background:silver;padding:4px 10px;margin:8px;";
        if (isNaN(e)) {d.style.cssText = "margin:8px;background-color: gray;"};
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

      function bb() {
        var mainiam = document.getElementById("mainiam");
        [...mainiam.getElementsByTagName(`button`)].filter(d => !d.innerHTML.indexOf(`x`) ).forEach(d => {
          d.style.cssText = "margin:8px;background-color: " + (b.playbackRate == d.innerHTML.slice(1) ? "#99FFCC;" : "gray;");
        })
      }

      function c(g){
        var b = document.querySelector("video[src]");
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
          bb();
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

      window.addEventListener("mousemove", event => {
        var mainiam = document.getElementById("mainiam");
        if (!mainiam) {return;}
        if (mainiam.style.visibility == "hidden") {
          bb();
          mainiam.style.visibility = "visible";
        } else {
          if (mainiam.siid) {clearTimeout(mainiam.siid);}
        }
        mainiam.siid = setTimeout(() => {
          document.getElementById("mainiam").style.visibility = "hidden";
        }, 400);
      });
      
    }
  }

})();
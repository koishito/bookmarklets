javascript:(function(){

  var obj = {setting : true};

  document.body.addEventListener('keydown', event => {
    console.log(obj.setting);
    if (obj.setting) {
      if (event.key == 'Escape') {
        obj.setting = false;
        alert(objList());
      } else {
        var clientX = parseInt(sessionStorage.getItem('clientX'));
        var clientY = parseInt(sessionStorage.getItem('clientY'));
        targetElement = document.elementFromPoint(clientX, clientY);
        obj[event.key] = targetElement;
        console.log(targetElement);
        alert("setting key[  " + event.key + ' , ' + clientX + ' , ' + clientY + ' ] :\n ' + targetElement);
      }
    } else {
      var targetElement = obj[event.key];
      if (typeof targetElement != "undefined") {
        targetElement.click();
      }
    }
  });

  document.body.addEventListener("mousemove", function(e){
    if (obj.setting) {
      sessionStorage.setItem('clientX', e.clientX);
      sessionStorage.setItem('clientY', e.clientY);
    }
  });

  function objList() {
    let ret = "Setting Finished";
    for(let key in obj){
      ret += (key == 'setting') ? '' : '\n\n key[  ' + key + '  ] :\n ' + obj[key];
    }
    return ret;
  }

})();

  // sessionStorage.setItem('key', '');

  // document.body.addEventListener('keydown', event => {
  //   var key = sessionStorage.getItem('key');
  //   if (!key) {
  //     sessionStorage.setItem('key', event.key);
  //     console.log(event.key);
  //   } else if (event.key == key) {
  //     var clientX = parseInt(sessionStorage.getItem('clientX'));
  //     var clientY = parseInt(sessionStorage.getItem('clientY'));
  //     targetElement = document.elementFromPoint(clientX, clientY);
  //     console.log(event.key, targetElement);
  //     targetElement.click();
  //   }

  // });

  // document.body.addEventListener("mousemove", function(e){
  //   if (!obj.Escape) {
  //     sessionStorage.setItem('clientX', e.clientX);
  //     sessionStorage.setItem('clientY', e.clientY);
  //   }
  // });


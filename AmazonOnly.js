javascript:(function(){
  alert(/^https:\/\/amazon.*$/.test(location.href));
  /*if (/^https:\/\/amazon\..*\/s\?k=.*$/.test(location.href)){
    //location.href = location.href + '&emi=AN1VRQENFRJN5';
    location.href = location.href + '&rh=p_6%253AAN1VRQENFRJN5';
  }*/
})();

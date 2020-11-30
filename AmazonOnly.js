javascript:(function(){
  alert(!(/^https:\/\/Amazon\..*\/s\?k=.*$/.test(location.href)));
  if (!(/^https:\/\/Amazon.*\/.*dp\/.*$/.test(location.href))){
    //location.href = location.href + '&emi=AN1VRQENFRJN5';
    location.href = location.href + '&rh=p_6%3AAN1VRQENFRJN5';
  }
})();

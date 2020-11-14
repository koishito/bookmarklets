javascript:(function(){
  if (!(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\/\d+$/.test(location.href))){
    var tc ='次';
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      if(('textContent' in dlinks[i] ) &&
         (location.hostname == dlinks[i].hostname) &&
         (dlinks[i].textContent.indexOf(tc)==0)){
        nextarticle = dlinks[i].href;
        break;
    }
    if(typeof nextarticle === 'undefined'){
      alert('同じドメインの「' + tc + '」で始まるリンクはありません。');
    }else{
      location.href = nextarticle;
    }
  }else{
    var lp = location.href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0];
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      var lpn = dlinks[i].href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0];
      //console.log(lpn);
      if((dlinks[i].id == 'contentMain-readNextEpisode' ) && (lpn == lp)){
        //alert(dlinks[i].href);
        nextarticle = dlinks[i].href;
        break;
      }
    }
    if(typeof nextarticle === 'undefined'){
      alert('次のエピソードはありません。');
    }else{
      location.href = nextarticle;
    }
  }
})();

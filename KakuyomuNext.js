javascript:(function(){
  if (!(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\/\d+$/.test(location.href))){
    alert('カクヨム作品ページではありません。　or　次のエピソードはありません。');
  }else{
    var lp = location.href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0];
    var dlinks = document.links;
    for (var i = dlinks.length-1; i >= 0; i--){
      var lpn = dlinks[i].href.match(/^https:\/\/kakuyomu.jp\/works\/\d+\/episodes\//)[0];
      //console.log(lpn);
      if((dlinks[i].id == 'contentMain-readNextEpisode' ) && (lpn == lp)){
        alert(dlinks[i].href);
        nextarticle = dlinks[i].href;
        break;
      }
    }
  }
})();

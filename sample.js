javascript:(function(){
var tc ='次';
var dlinks = document.links;
for (var i = dlinks.length-1; i >= 0; i--){
  if(('textContent' in dlinks[i] ) &&
     (location.hostname == dlinks[i].hostname) &&
     (dlinks[i].textContent.indexOf(tc)==0)){
      nextarticle = dlinks[i].href;
      break;
  }
}
if(typeof nextarticle === 'undefined'){
  alert('同じドメインの「' + tc + '」で始まるリンクはありません。');
}else{
  location.href = nextarticle;
}
})();

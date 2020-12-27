javascript:(function(){
  document.addEventListener('copy', () => {
    navigator.clipboard.readText().then((text) => {
      console.log(text);
      var encodeWord = encodeURI(text);
      window.open( "https://www.google.com/search?q=漫画 " + encodeWord );
    });
  });
})();
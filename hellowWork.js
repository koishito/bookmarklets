javascript:(function(){

  if (document.title != `ハローワークインターネットサービス - 求人情報検索・一覧`) {return;}
  document.body.style.zoom='95%';

  let item = 0;
  /*let dir = 0;
  let scrollOffset = 5;*/
  let headerHight = document.getElementById(`top_header`).clientHeight;
  let kyujin = document.getElementsByClassName(`kyujin mt1 noborder`);

  scrollKyujin(kyujin[item]);

  function scrollKyujin(element) {
    /*setTimeout(() => {*/
      element.scrollIntoView({block: `end`});
      let ClientRectTop = element.getBoundingClientRect().top;
      let scrollTop = window.pageYOffset + ClientRectTop - headerHight/* - (dir * scrollOffset)*/;
      console.log(`scrollTop : ${scrollTop}`);
      document.documentElement.scrollTop = scrollTop - 10;
    /*}, 100);*/
  }

  document.body.addEventListener('keydown', event => {
    /*dir = (event.key == 'ArrowDown') - (event.key == 'ArrowUp');*/
    dir = (event.key == 'ArrowLeft') - (event.key == 'ArrowRight');
    if (dir == 0) {return;}

    if ((typeof kyujin[item] == `undefined`) && (Math.sign(item) == dir)) {
      let tagName = (dir == -1) ? `fwListNaviBtnPrev` : `fwListNaviBtnNext`;
      document.getElementsByName(tagName)[0].click();
    } else {
      item += dir;
      console.log(`item : ${item}`);
      if (item == -1) {document.getElementsByClassName(`flex page_navi`)[0].scrollIntoView({block: `center`});}
      else if (item == kyujin.length) {document.getElementsByClassName(`flex page_navi`)[1].scrollIntoView({block: `center`});}
      else {scrollKyujin(kyujin[item]);}
    }

  });
})();

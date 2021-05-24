javascript:(function(){

  if (document.title != `ハローワークインターネットサービス - 求人情報検索・一覧`) {return;}
  document.body.style.zoom='95%';

  /*日付を強調*/
  var date = new Date();
  date.setDate(date.getDate() - 1);
  let yesterdayDate = 'YYYY年MM月DD日'.replace(/YYYY/, date.getFullYear())
                                      .replace(/MM/, date.getMonth() + 1)
                                      .replace(/DD/, date.getDate());
  var date = new Date();
  let todayDate = 'YYYY年MM月DD日'.replace(/YYYY/, date.getFullYear())
                                  .replace(/MM/, date.getMonth() + 1)
                                  .replace(/DD/, date.getDate());
  const fs13_ml01 = document.getElementsByClassName(`fs13 ml01`);
  for (let i = 0; i < fs13_ml01.length; i++) {
    if (fs13_ml01[i].innerText == yesterdayDate) {fs13_ml01[i].style.cssText += `background-color:green;`;}
    if (fs13_ml01[i].innerText == todayDate) {fs13_ml01[i].style.cssText += `background-color:aqua;`;}
  }

  /*利点を強調*/
  let nes_label = document.getElementsByClassName(`nes_label any fs07 mt04`);
  for (let i = 0; i < nes_label.length; i++) {
    nes_label[i].style.cssText += `background-color:#FFCBCB;`;
  }


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
      element.getElementsByClassName(`fb`)[0].innerText=`(${item + 1}/${kyujin.length}) 職種`;
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

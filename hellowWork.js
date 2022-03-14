javascript:(function(){

  if (document.title != `ハローワークインターネットサービス - 求人情報検索・一覧`) {return;}
  document.body.style.zoom=`95%`;

  /*利点を強調*/
  const nes_label = document.getElementsByClassName(`nes_label any fs07 mt04`);
  for (element of nes_label) {
    if (/background-color/.test(element.style.cssText))  {return;}
    element.style.cssText += `background-color:#FFCBCB;`;
  }

  /*日付を強調*/
  var date = new Date();
  date.setDate(date.getDate() - 1);
  const yesterdayDate = `YYYY年MM月DD日`.replace(/YYYY/, date.getFullYear())
                                        .replace(/MM/, date.getMonth() + 1)
                                        .replace(/DD/, date.getDate());
  var date = new Date();
  const todayDate = `YYYY年MM月DD日`.replace(/YYYY/, date.getFullYear())
                                    .replace(/MM/, date.getMonth() + 1)
                                    .replace(/DD/, date.getDate());
  const fs13_ml01 = document.getElementsByClassName(`fs13 ml01`);
  const baseStyle = `border:1px solid #0000ff;background-color:`;
  for (element of fs13_ml01) {
    if (element.innerText == yesterdayDate) {element.style.cssText += `${baseStyle}plum;`;}
    if (element.innerText == todayDate) {element.style.cssText += `${baseStyle}aqua;`;}
  }

  let item = 0; /*global*/
  /*let dir = 0;
  let scrollOffset = 5;*/
  const headerHight = document.getElementById(`top_header`).clientHeight;
  const kyujin = document.getElementsByClassName(`kyujin mt1 noborder`);
  const kennsuu = document.getElementsByClassName(`flex align_end last_right mt05`)[0].innerText.split(/(件中 |～)/);
  const kyujinTotal = kennsuu[0];
  const kyujinStart = parseInt(kennsuu[2]);
  for (let i = 0; i < kyujin.length; i++) {
    kyujin[i].getElementsByClassName(`fb`)[0].innerText=`(${kyujinStart + i}/${kyujinTotal}) 職種`;
  }

  scrollKyujin(kyujin[item]);

  function scrollKyujin(element) {
    /*setTimeout(() => {*/
      element.scrollIntoView({block: `end`});
      const ClientRectTop = element.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset + ClientRectTop - headerHight/* - (dir * scrollOffset)*/;
      console.log(`scrollTop : ${scrollTop}`);
      document.documentElement.scrollTop = scrollTop - 10; /*10px is no reason*/
    /*}, 100);*/
  }

  document.body.addEventListener(`keydown`, event => {
    /*dir = (event.key == `ArrowDown`) - (event.key == `ArrowUp`);*/
    const dir = (event.key == `ArrowLeft`) - (event.key == `ArrowRight`);
    if (dir == 0) {return;}

    if ((typeof kyujin[item] == `undefined`) && (Math.sign(item) == dir)) {
      const tagName = (dir == -1) ? `fwListNaviBtnPrev` : `fwListNaviBtnNext`;
      document.getElementsByName(tagName)[0].click();
    } else {
      item += dir;
      console.log(`item : ${item}`);
      let flex_page_navi = document.getElementsByClassName(`flex page_navi`)
      if (item == -1) {flex_page_navi[0].scrollIntoView({block: `center`});}
      else if (item == kyujin.length) {flex_page_navi[1].scrollIntoView({block: `center`});}
      else {scrollKyujin(kyujin[item]);}
    }

  });

})();

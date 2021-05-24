javascript:(function(){

  if (document.title != `ハローワークインターネットサービス - 求人情報検索・一覧`) {return;}
  document.body.style.zoom='95%';

  let p = 0;
  let kyujin = document.getElementsByClassName("kyujin_foot");
  console.log(`kyujinLength : ${kyujin.length}`);

  kyujin[p].scrollIntoView({block: "end"});

  document.body.addEventListener('keydown', event => {
    setTimeout(abc, 5);

    function abc() {
      let dir = (event.key == 'ArrowDown') - (event.key == 'ArrowUp');
      if (dir == 0) {return;}

      p += dir;
      console.log(`page : ${p}`);
      if (p == -2) {document.getElementsByName("fwListNaviBtnPrev")[0].click();}
      else if (p == -1) {document.getElementsByClassName("flex page_navi")[0].scrollIntoView({block: "center"});}
      else if (p == kyujin.length) {document.getElementsByClassName("flex page_navi")[1].scrollIntoView({block: "center"});}
      else if (p == kyujin.length + 1) {document.getElementsByName("fwListNaviBtnNext")[0].click();}
      else if (dir == -1 ) {kyujin[p].scrollIntoView({block: "end"});}
      else {kyujin[p].scrollIntoView({block: "end"});}

    }

  });
})();

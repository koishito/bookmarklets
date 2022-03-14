/*document.getElementById('leftMenu').style.width = '300px';
document.getElementsByClassName('manual_detail')[0].style.width = '650px';
document.getElementById('content').style.width = '650px';

sele = "#content";
var i, j, sheets, rules, rule = null;
sheets = document.styleSheets;
for(i=0; i<sheets.length; i++){
    // そのstylesheetが持つCSSルールのリストを取得
    rules = sheets[i].cssRules;
    for(j=0; j<rules.length; j++){
        // セレクタが一致するか調べる
        if(sele === rules[j].selectorText){
            rule = rules[j];
            break;
        }
    }
}
console.log(rule);

_1lSA1b _3yX2NS

document.styleSheets[0].cssRules[33].style.width = '650px';
*/

javascript:(function(){
    if (location.href.startsWith(`https://www.gran-turismo.com/jp/gt7/apex/`)) {
        document.styleSheets[0].cssRules[33].style.width = '650px';
    }
    if (location.href.startsWith(`https://www.gran-turismo.com/jp/gt7/manual/`)) {
        document.styleSheets[1].cssRules[33].style.width = '650px';
    }
})();

﻿
var PageName = 'Контакты';
var PageId = 'eef2b120a4174471b24762ab9994f2a3'
var PageUrl = 'Контакты.html'
document.title = 'Контакты';
var PageNotes = 
{
"pageName":"Контакты",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '3');
  value = value.replace(/\[\[GenMonth\]\]/g, '4');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'April');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Tuesday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u115 = document.getElementById('u115');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u137 = document.getElementById('u137');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u2 = document.getElementById('u2');

var u79 = document.getElementById('u79');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_пользователя.html" + GetQuerystring();

}

}
gv_vAlignTable['u4'] = 'top';
var u153 = document.getElementById('u153');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u171 = document.getElementById('u171');

var u131 = document.getElementById('u131');

var u135 = document.getElementById('u135');

var u151 = document.getElementById('u151');

var u103 = document.getElementById('u103');

var u159 = document.getElementById('u159');

var u55 = document.getElementById('u55');

var u101 = document.getElementById('u101');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u67 = document.getElementById('u67');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u16 = document.getElementById('u16');

var u37 = document.getElementById('u37');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u133 = document.getElementById('u133');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u89 = document.getElementById('u89');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u149 = document.getElementById('u149');

var u31 = document.getElementById('u31');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u179 = document.getElementById('u179');

var u57 = document.getElementById('u57');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u161 = document.getElementById('u161');

var u125 = document.getElementById('u125');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u189 = document.getElementById('u189');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u26 = document.getElementById('u26');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u119 = document.getElementById('u119');

var u85 = document.getElementById('u85');

var u51 = document.getElementById('u51');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u77 = document.getElementById('u77');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u75 = document.getElementById('u75');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');

var u195 = document.getElementById('u195');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u33 = document.getElementById('u33');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u157 = document.getElementById('u157');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u71 = document.getElementById('u71');

var u181 = document.getElementById('u181');

var u5 = document.getElementById('u5');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u127 = document.getElementById('u127');

var u43 = document.getElementById('u43');

var u169 = document.getElementById('u169');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u139 = document.getElementById('u139');

var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');

var u193 = document.getElementById('u193');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u65 = document.getElementById('u65');

var u155 = document.getElementById('u155');

var u109 = document.getElementById('u109');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u123 = document.getElementById('u123');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u81 = document.getElementById('u81');

var u41 = document.getElementById('u41');

var u177 = document.getElementById('u177');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u185 = document.getElementById('u185');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u73 = document.getElementById('u73');

var u113 = document.getElementById('u113');

var u147 = document.getElementById('u147');

var u163 = document.getElementById('u163');

var u91 = document.getElementById('u91');

var u19 = document.getElementById('u19');

var u121 = document.getElementById('u121');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u188 = document.getElementById('u188');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u117 = document.getElementById('u117');

var u29 = document.getElementById('u29');

var u111 = document.getElementById('u111');

var u141 = document.getElementById('u141');

var u175 = document.getElementById('u175');

var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u183 = document.getElementById('u183');

var u173 = document.getElementById('u173');

var u39 = document.getElementById('u39');

var u99 = document.getElementById('u99');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u0 = document.getElementById('u0');

var u145 = document.getElementById('u145');

var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u49 = document.getElementById('u49');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u167 = document.getElementById('u167');

var u93 = document.getElementById('u93');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="Главный_экран.html" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
var u165 = document.getElementById('u165');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u59 = document.getElementById('u59');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u45 = document.getElementById('u45');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u143 = document.getElementById('u143');

var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');

var u69 = document.getElementById('u69');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
if (window.OnLoad) OnLoad();

﻿
var PageName = 'Кабинет пользователя';
var PageId = '51349728959d4c28b163c73907dda668'
var PageUrl = 'Кабинет_пользователя.html'
document.title = 'Кабинет пользователя';
var PageNotes = 
{
"pageName":"Кабинет пользователя",
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
  value = value.replace(/\[\[GenDay\]\]/g, '13');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Sunday');
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

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u299 = document.getElementById('u299');

var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd3u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u17'] = 'top';
var u36 = document.getElementById('u36');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u216 = document.getElementById('u216');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u72 = document.getElementById('u72');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u231 = document.getElementById('u231');

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{
windowEvent = e;


if (true) {

	self.location.href="Главный_экран.html" + GetQuerystring();

}

}
gv_vAlignTable['u78'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u298 = document.getElementById('u298');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u215 = document.getElementById('u215');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd2u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u11'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u332 = document.getElementById('u332');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u26 = document.getElementById('u26');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u302 = document.getElementById('u302');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u214 = document.getElementById('u214');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u67 = document.getElementById('u67');

var u269 = document.getElementById('u269');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u48 = document.getElementById('u48');

var u345 = document.getElementById('u345');

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u24 = document.getElementById('u24');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u65 = document.getElementById('u65');

var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u314','hidden','none',500);

}

}
gv_vAlignTable['u346'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u365 = document.getElementById('u365');

u365.style.cursor = 'pointer';
if (bIE) u365.attachEvent("onclick", Clicku365);
else u365.addEventListener("click", Clicku365, true);
function Clicku365(e)
{
windowEvent = e;


if (true) {

	self.location.href="Добавляем_ресурс.html" + GetQuerystring();

}

}
gv_vAlignTable['u365'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u330 = document.getElementById('u330');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u42'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u63 = document.getElementById('u63');

var u32 = document.getElementById('u32');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u307 = document.getElementById('u307');

u307.style.cursor = 'pointer';
if (bIE) u307.attachEvent("onclick", Clicku307);
else u307.addEventListener("click", Clicku307, true);
function Clicku307(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u314','','none',500);

}

}

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u111'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u12 = document.getElementById('u12');

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u20 = document.getElementById('u20');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", Clicku38);
else u38.addEventListener("click", Clicku38, true);
function Clicku38(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd2u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u38'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u8 = document.getElementById('u8');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u49 = document.getElementById('u49');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd2u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u25'] = 'top';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u314','','none',500);

}

}
gv_vAlignTable['u309'] = 'top';
var u228 = document.getElementById('u228');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u88 = document.getElementById('u88');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u76'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u263 = document.getElementById('u263');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u33 = document.getElementById('u33');

var u254 = document.getElementById('u254');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u343 = document.getElementById('u343');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u213 = document.getElementById('u213');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u358 = document.getElementById('u358');

u358.style.cursor = 'pointer';
if (bIE) u358.attachEvent("onclick", Clicku358);
else u358.addEventListener("click", Clicku358, true);
function Clicku358(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета.html" + GetQuerystring();

}

}
gv_vAlignTable['u358'] = 'top';
var u5 = document.getElementById('u5');

var u317 = document.getElementById('u317');

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u19 = document.getElementById('u19');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u359 = document.getElementById('u359');

u359.style.cursor = 'pointer';
if (bIE) u359.attachEvent("onclick", Clicku359);
else u359.addEventListener("click", Clicku359, true);
function Clicku359(e)
{
windowEvent = e;


if (true) {

	self.location.href="Контакты_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u359'] = 'top';
var u267 = document.getElementById('u267');

var u46 = document.getElementById('u46');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u294 = document.getElementById('u294');

var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u135'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u252 = document.getElementById('u252');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u234','hidden','none',500);

}

}
gv_vAlignTable['u266'] = 'top';
var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd1u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd2u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u64'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u301 = document.getElementById('u301');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u2'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u315 = document.getElementById('u315');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u21 = document.getElementById('u21');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u265 = document.getElementById('u265');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u16'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u314 = document.getElementById('u314');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мое_портфолио.html" + GetQuerystring();

}

}
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u250 = document.getElementById('u250');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u58 = document.getElementById('u58');

var u34 = document.getElementById('u34');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u61 = document.getElementById('u61');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мой_проект__РП_.html" + GetQuerystring();

}

}
gv_vAlignTable['u146'] = 'top';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd4u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd5u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u52'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u47 = document.getElementById('u47');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u322 = document.getElementById('u322');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u211 = document.getElementById('u211');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u22 = document.getElementById('u22');

var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{
windowEvent = e;


if (true) {

	self.location.href="Новая_заявка_на_проект.html" + GetQuerystring();

}

}

var u261 = document.getElementById('u261');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd3u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u43'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u248 = document.getElementById('u248');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd4u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u44'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u224 = document.getElementById('u224');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u341 = document.getElementById('u341');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u9 = document.getElementById('u9');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u59 = document.getElementById('u59');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u35 = document.getElementById('u35');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u328 = document.getElementById('u328');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u234','','none',500);

}

}
gv_vAlignTable['u223'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u70 = document.getElementById('u70');

var u81 = document.getElementById('u81');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'top';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u60 = document.getElementById('u60');

var u53 = document.getElementById('u53');

var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if ((GetCheckState('u226')) == (false)) {

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

SetCheckState('u312', false);

}

}

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u6 = document.getElementById('u6');

var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd0u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd0u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u29'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u209 = document.getElementById('u209');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u272 = document.getElementById('u272');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u336 = document.getElementById('u336');

var u104 = document.getElementById('u104');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u259 = document.getElementById('u259');

var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u234','','none',500);

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u235 = document.getElementById('u235');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd3u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u3'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов.html" + GetQuerystring();

}

}
gv_vAlignTable['u361'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd4u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u351 = document.getElementById('u351');

var u270 = document.getElementById('u270');

var u237 = document.getElementById('u237');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd2u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd3u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u56'] = 'top';
var u300 = document.getElementById('u300');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u68 = document.getElementById('u68');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u364 = document.getElementById('u364');

u364.style.cursor = 'pointer';
if (bIE) u364.attachEvent("onclick", Clicku364);
else u364.addEventListener("click", Clicku364, true);
function Clicku364(e)
{
windowEvent = e;


if (true) {

	self.location.href="Новая_заявка_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u364'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u232 = document.getElementById('u232');

var u246 = document.getElementById('u246');

var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd4u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u57'] = 'top';
var u312 = document.getElementById('u312');

u312.style.cursor = 'pointer';
if (bIE) u312.attachEvent("onclick", Clicku312);
else u312.addEventListener("click", Clicku312, true);
function Clicku312(e)
{
windowEvent = e;


if ((GetCheckState('u312')) == (true)) {

	SetPanelState('u104', 'pd1u104','none','',500,'none','',500);

SetCheckState('u226', true);

}

}

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u326 = document.getElementById('u326');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u14 = document.getElementById('u14');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u362 = document.getElementById('u362');

var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мои_ресурсы.html" + GetQuerystring();

}

}
gv_vAlignTable['u75'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u349 = document.getElementById('u349');

var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u168'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u244 = document.getElementById('u244');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd4u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd5u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u27'] = 'top';
var u348 = document.getElementById('u348');

var u310 = document.getElementById('u310');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u40 = document.getElementById('u40');

var u324 = document.getElementById('u324');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u45 = document.getElementById('u45');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u256 = document.getElementById('u256');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u10 = document.getElementById('u10');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u7 = document.getElementById('u7');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd4u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd5u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u39'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd4u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd5u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u66'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u23 = document.getElementById('u23');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u84 = document.getElementById('u84');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u0', 'pd3u0','none','',500,'none','',500);

	SetPanelState('u104', 'pd4u104','none','',500,'none','',500);

}

}
gv_vAlignTable['u4'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u334 = document.getElementById('u334');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
if (window.OnLoad) OnLoad();


var PageName = 'Создание проекта, 2';
var PageId = '45453e61defe4c9f8ecc97abbb8201a9'
var PageUrl = 'Создание_проекта,_2.html'
document.title = 'Создание проекта, 2';
var PageNotes = 
{
"pageName":"Создание проекта, 2",
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

var u370 = document.getElementById('u370');

u370.style.cursor = 'pointer';
if (bIE) u370.attachEvent("onclick", Clicku370);
else u370.addEventListener("click", Clicku370, true);
function Clicku370(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мое_портфолио.html" + GetQuerystring();

}

}
gv_vAlignTable['u370'] = 'top';
var u167 = document.getElementById('u167');

var u299 = document.getElementById('u299');

var u202 = document.getElementById('u202');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u216 = document.getElementById('u216');

var u194 = document.getElementById('u194');

var u72 = document.getElementById('u72');

u72.style.cursor = 'pointer';
if (bIE) u72.attachEvent("onclick", Clicku72);
else u72.addEventListener("click", Clicku72, true);
function Clicku72(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}

}

var u333 = document.getElementById('u333');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u231 = document.getElementById('u231');

var u60 = document.getElementById('u60');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u298 = document.getElementById('u298');

var u139 = document.getElementById('u139');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u1 = document.getElementById('u1');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u11 = document.getElementById('u11');

var u126 = document.getElementById('u126');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u151 = document.getElementById('u151');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u165 = document.getElementById('u165');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u100 = document.getElementById('u100');

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u44','hidden','none',500);

}

}

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u214 = document.getElementById('u214');

var u192 = document.getElementById('u192');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd2u132','none','',500,'none','',500);

	SetPanelState('u286', 'pd1u286','none','',500,'none','',500);

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u327 = document.getElementById('u327');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u65 = document.getElementById('u65');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u268 = document.getElementById('u268');

var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{
windowEvent = e;


if (true) {

	self.location.href="Создание_проекта,_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u330'] = 'top';
var u274 = document.getElementById('u274');

var u227 = document.getElementById('u227');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');

var u163 = document.getElementById('u163');

var u63 = document.getElementById('u63');

var u326 = document.getElementById('u326');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u285 = document.getElementById('u285');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u74 = document.getElementById('u74');

var u162 = document.getElementById('u162');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u176 = document.getElementById('u176');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u149 = document.getElementById('u149');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u306 = document.getElementById('u306');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u342 = document.getElementById('u342');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u329 = document.getElementById('u329');

u329.style.cursor = 'pointer';
if (bIE) u329.attachEvent("onclick", Clicku329);
else u329.addEventListener("click", Clicku329, true);
function Clicku329(e)
{
windowEvent = e;


if (true) {

	self.location.href="Создание_проекта,_3.html" + GetQuerystring();

}

}

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u305 = document.getElementById('u305');

var u283 = document.getElementById('u283');

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u44','','none',500);

	BringToFront("u44");

}

}
gv_vAlignTable['u20'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u279 = document.getElementById('u279');

u279.style.cursor = 'pointer';
if (bIE) u279.attachEvent("onclick", Clicku279);
else u279.addEventListener("click", Clicku279, true);
function Clicku279(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u224', 'pd2u224','none','',500,'none','',500);

}

}

var u241 = document.getElementById('u241');

var u160 = document.getElementById('u160');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u8 = document.getElementById('u8');

var u49 = document.getElementById('u49');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u25 = document.getElementById('u25');

var u309 = document.getElementById('u309');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u123 = document.getElementById('u123');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');

u296.style.cursor = 'pointer';
if (bIE) u296.attachEvent("onclick", Clicku296);
else u296.addEventListener("click", Clicku296, true);
function Clicku296(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u286', 'pd0u286','none','',500,'none','',500);

}

}

var u137 = document.getElementById('u137');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u224', 'pd2u224','none','',500,'none','',500);

}

}

var u173 = document.getElementById('u173');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u213 = document.getElementById('u213');

var u303 = document.getElementById('u303');

u303.style.cursor = 'pointer';
if (bIE) u303.attachEvent("onclick", Clicku303);
else u303.addEventListener("click", Clicku303, true);
function Clicku303(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd2u132','none','',500,'none','',500);

	SetPanelState('u286', 'pd1u286','none','',500,'none','',500);

}

}

var u281 = document.getElementById('u281');

if (bIE) u281.attachEvent("onmouseover", MouseOveru281);
else u281.addEventListener("mouseover", MouseOveru281, true);
function MouseOveru281(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u281',e)) return;
if (true) {

	SetPanelState('u276', 'pd1u276','none','',500,'none','',500);

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u309','hidden','none',500);

	NewWindow("resources/Other.html#other=" + encodeURI("Название &quot;своей&quot; компетенции при этом должно добавиться в список выбранных компетенций для этой задачи. Модератор будет отдельно уведомлен о заявке на компетенцию, если он одобрит заявку, компетенцию можно будет использовать для задачи, если отклонит, компетенция удалится из списка выбранных для задачи (РП будет уведомлен)<BR><BR>"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u136 = document.getElementById('u136');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u121 = document.getElementById('u121');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd1u132','none','',500,'none','',500);

	SetPanelState('u286', 'pd2u286','none','',500,'none','',500);

}

}

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

}

}
gv_vAlignTable['u108'] = 'top';
var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u224', 'pd2u224','none','',500,'none','',500);

}

}

if (bIE) u252.attachEvent("onmouseout", MouseOutu252);
else u252.addEventListener("mouseout", MouseOutu252, true);
function MouseOutu252(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u252',e)) return;
if (true) {

	SetPanelState('u251', 'pd0u251','none','',500,'none','',500);

}

}

var u171 = document.getElementById('u171');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u266 = document.getElementById('u266');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u301 = document.getElementById('u301');

u301.style.cursor = 'pointer';
if (bIE) u301.attachEvent("onclick", Clicku301);
else u301.addEventListener("click", Clicku301, true);
function Clicku301(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd1u132','none','',500,'none','',500);

	SetPanelState('u286', 'pd2u286','none','',500,'none','',500);

}

}

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u315 = document.getElementById('u315');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u251 = document.getElementById('u251');

var u170 = document.getElementById('u170');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u200 = document.getElementById('u200');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u292 = document.getElementById('u292');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u147 = document.getElementById('u147');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u10','hidden','none',500);

	SendToBack("u44");

}

}
gv_vAlignTable['u34'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u61 = document.getElementById('u61');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u132 = document.getElementById('u132');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u52 = document.getElementById('u52');

var u119 = document.getElementById('u119');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u224', 'pd2u224','none','',500,'none','',500);

}

}

if (bIE) u277.attachEvent("onmouseout", MouseOutu277);
else u277.addEventListener("mouseout", MouseOutu277, true);
function MouseOutu277(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u277',e)) return;
if (true) {

	SetPanelState('u276', 'pd0u276','none','',500,'none','',500);

}

}

var u47 = document.getElementById('u47');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u28 = document.getElementById('u28');

var u145 = document.getElementById('u145');

var u118 = document.getElementById('u118');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u322 = document.getElementById('u322');

var u276 = document.getElementById('u276');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u249 = document.getElementById('u249');

var u211 = document.getElementById('u211');

var u130 = document.getElementById('u130');

var u345 = document.getElementById('u345');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u17 = document.getElementById('u17');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u103', 'pd1u103','none','',500,'none','',500);

SetWidgetRichText('u117', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#000000;">Выбрано: </span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Ресурс 1&nbsp; &nbsp; Ресурс 2&nbsp; &nbsp; Ресурс 3&nbsp; &nbsp; Серебряное руно</span></p>');

}

}
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u224 = document.getElementById('u224');

var u143 = document.getElementById('u143');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u260 = document.getElementById('u260');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u157 = document.getElementById('u157');

var u59 = document.getElementById('u59');

var u189 = document.getElementById('u189');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u103', 'pd0u103','none','',500,'none','',500);

SetWidgetRichText('u117', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#000000;">Выбрано: </span><span style="font-family:Arial;font-size:13px;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;">Ресурс 1&nbsp; &nbsp; Ресурс 2&nbsp; &nbsp; Ресурс 3</span></p>');

}

}
gv_vAlignTable['u106'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u142 = document.getElementById('u142');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u237 = document.getElementById('u237');

var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u224', 'pd1u224','none','',500,'none','',500);

}

}

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u36 = document.getElementById('u36');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u209 = document.getElementById('u209');

var u353 = document.getElementById('u353');

var u272 = document.getElementById('u272');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u104 = document.getElementById('u104');

var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u309','','none',500);

}

}
gv_vAlignTable['u308'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u221 = document.getElementById('u221');

var u235 = document.getElementById('u235');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u208 = document.getElementById('u208');

var u352 = document.getElementById('u352');

u352.style.cursor = 'pointer';
if (bIE) u352.attachEvent("onclick", Clicku352);
else u352.addEventListener("click", Clicku352, true);
function Clicku352(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета.html" + GetQuerystring();

}

}
gv_vAlignTable['u352'] = 'top';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u312 = document.getElementById('u312');

var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u103 = document.getElementById('u103');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u118','','none',500);

	BringToFront("u118");

}

}
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}

}
gv_vAlignTable['u73'] = 'top';
var u351 = document.getElementById('u351');

u351.style.cursor = 'pointer';
if (bIE) u351.attachEvent("onclick", Clicku351);
else u351.addEventListener("click", Clicku351, true);
function Clicku351(e)
{
windowEvent = e;


if (true) {

	self.location.href="Контакты_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u351'] = 'top';
var u270 = document.getElementById('u270');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u319 = document.getElementById('u319');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u56 = document.getElementById('u56');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u186 = document.getElementById('u186');

var u233 = document.getElementById('u233');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u350 = document.getElementById('u350');

u350.style.cursor = 'pointer';
if (bIE) u350.attachEvent("onclick", Clicku350);
else u350.addEventListener("click", Clicku350, true);
function Clicku350(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u350'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u247 = document.getElementById('u247');

var u68 = document.getElementById('u68');

var u198 = document.getElementById('u198');

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u190 = document.getElementById('u190');

var u115 = document.getElementById('u115');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u10','','none',500);

}

}
gv_vAlignTable['u7'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u372 = document.getElementById('u372');

u372.style.cursor = 'pointer';
if (bIE) u372.attachEvent("onclick", Clicku372);
else u372.addEventListener("click", Clicku372, true);
function Clicku372(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мои_ресурсы.html" + GetQuerystring();

}

}
gv_vAlignTable['u372'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u187 = document.getElementById('u187');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u14 = document.getElementById('u14');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u286 = document.getElementById('u286');

var u349 = document.getElementById('u349');

u349.style.cursor = 'pointer';
if (bIE) u349.attachEvent("onclick", Clicku349);
else u349.addEventListener("click", Clicku349, true);
function Clicku349(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_пользователя.html" + GetQuerystring();

}

}
gv_vAlignTable['u349'] = 'top';
var u168 = document.getElementById('u168');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u27 = document.getElementById('u27');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u310 = document.getElementById('u310');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u243 = document.getElementById('u243');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u69 = document.getElementById('u69');

var u289 = document.getElementById('u289');

u289.style.cursor = 'pointer';
if (bIE) u289.attachEvent("onclick", Clicku289);
else u289.addEventListener("click", Clicku289, true);
function Clicku289(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u132', 'pd0u132','none','',500,'none','',500);

	SetPanelState('u286', 'pd0u286','none','',500,'none','',500);

}

}

var u45 = document.getElementById('u45');

var u206 = document.getElementById('u206');

var u184 = document.getElementById('u184');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u291 = document.getElementById('u291');

var u337 = document.getElementById('u337');

var u256 = document.getElementById('u256');

if (bIE) u256.attachEvent("onmouseover", MouseOveru256);
else u256.addEventListener("mouseover", MouseOveru256, true);
function MouseOveru256(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u256',e)) return;
if (true) {

	SetPanelState('u251', 'pd1u251','none','',500,'none','',500);

}

}

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u174 = document.getElementById('u174');

var u205 = document.getElementById('u205');

var u183 = document.getElementById('u183');

var u10 = document.getElementById('u10');

var u179 = document.getElementById('u179');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u197 = document.getElementById('u197');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u128 = document.getElementById('u128');

u128.style.cursor = 'pointer';
if (bIE) u128.attachEvent("onclick", Clicku128);
else u128.addEventListener("click", Clicku128, true);
function Clicku128(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u118','hidden','none',500);

}

}

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u178 = document.getElementById('u178');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u245 = document.getElementById('u245');

var u335 = document.getElementById('u335');

var u23 = document.getElementById('u23');

var u154 = document.getElementById('u154');

var u264 = document.getElementById('u264');

var u371 = document.getElementById('u371');

u371.style.cursor = 'pointer';
if (bIE) u371.attachEvent("onclick", Clicku371);
else u371.addEventListener("click", Clicku371, true);
function Clicku371(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов.html" + GetQuerystring();

}

}
gv_vAlignTable['u371'] = 'top';
var u203 = document.getElementById('u203');

var u181 = document.getElementById('u181');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u258 = document.getElementById('u258');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u217 = document.getElementById('u217');

var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u153 = document.getElementById('u153');

if (window.OnLoad) OnLoad();

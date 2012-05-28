
var PageName = 'Модерация проекта';
var PageId = '97947441bfca4844b5ef9f8cba0d1ab5'
var PageUrl = 'Модерация_проекта.html'
document.title = 'Модерация проекта';
var PageNotes = 
{
"pageName":"Модерация проекта",
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

var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u218','','none',500);

}

}

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u32 = document.getElementById('u32');

var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{
windowEvent = e;


if (true) {

	self.location.href="Контакты_М.html" + GetQuerystring();

}

}
gv_vAlignTable['u243'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_модератора.html" + GetQuerystring();

}

}
gv_vAlignTable['u236'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u4 = document.getElementById('u4');

var u226 = document.getElementById('u226');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u135 = document.getElementById('u135');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u76 = document.getElementById('u76');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u186 = document.getElementById('u186');

if (bIE) u186.attachEvent("onmouseover", MouseOveru186);
else u186.addEventListener("mouseover", MouseOveru186, true);
function MouseOveru186(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u186',e)) return;
if (true) {

	SetPanelState('u172', 'pd1u172','none','',500,'none','',500);

}

}
gv_vAlignTable['u186'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u117 = document.getElementById('u117');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u192 = document.getElementById('u192');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u65 = document.getElementById('u65');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u24 = document.getElementById('u24');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u205 = document.getElementById('u205');

var u108 = document.getElementById('u108');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u238 = document.getElementById('u238');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u68 = document.getElementById('u68');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u184 = document.getElementById('u184');

if (bIE) u184.attachEvent("onmouseover", MouseOveru184);
else u184.addEventListener("mouseover", MouseOveru184, true);
function MouseOveru184(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u172', 'pd1u172','none','',500,'none','',500);

}

}

var u228 = document.getElementById('u228');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u73','hidden','none',500);

}

}
gv_vAlignTable['u149'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u73', 'pd0u73','none','',500,'none','',500);

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u125 = document.getElementById('u125');

if (bIE) u125.attachEvent("onmouseover", MouseOveru125);
else u125.addEventListener("mouseover", MouseOveru125, true);
function MouseOveru125(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u125',e)) return;
if (true) {

	SetPanelState('u109', 'pd1u109','none','',500,'none','',500);

}

}
gv_vAlignTable['u125'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u67 = document.getElementById('u67');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u216 = document.getElementById('u216');

var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Вы точно хотите удалить этот комментарий? Учтите, что восстановить его будет уже невозможно..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u254 = document.getElementById('u254');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u191 = document.getElementById('u191');

var u249 = document.getElementById('u249');

var u252 = document.getElementById('u252');

u252.style.cursor = 'pointer';
if (bIE) u252.attachEvent("onclick", Clicku252);
else u252.addEventListener("click", Clicku252, true);
function Clicku252(e)
{
windowEvent = e;


if (true) {

	self.location.href="Закрытие_проекта_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u252'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u219 = document.getElementById('u219');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u61 = document.getElementById('u61');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u123 = document.getElementById('u123');

if (bIE) u123.attachEvent("onmouseover", MouseOveru123);
else u123.addEventListener("mouseover", MouseOveru123, true);
function MouseOveru123(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u123',e)) return;
if (true) {

	SetPanelState('u109', 'pd1u109','none','',500,'none','',500);

}

}
gv_vAlignTable['u123'] = 'top';
var u223 = document.getElementById('u223');

var u114 = document.getElementById('u114');

if (bIE) u114.attachEvent("onmouseover", MouseOveru114);
else u114.addEventListener("mouseover", MouseOveru114, true);
function MouseOveru114(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u114',e)) return;
if (true) {

	SetPanelState('u109', 'pd1u109','none','',500,'none','',500);

}

}
gv_vAlignTable['u114'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u221 = document.getElementById('u221');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u198 = document.getElementById('u198');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{
windowEvent = e;


if (IsOver(GetDragCursorRectangles(), GetWidgetRectangles('u109'))) {

	SetPanelState('u109', 'pd1u109','none','',500,'none','',500);

}

}

if (bIE) u110.attachEvent("onmouseout", MouseOutu110);
else u110.addEventListener("mouseout", MouseOutu110, true);
function MouseOutu110(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u110',e)) return;
if (true) {

	SetPanelState('u109', 'pd0u109','none','',500,'none','',500);

}

}

var u172 = document.getElementById('u172');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u127 = document.getElementById('u127');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u180 = document.getElementById('u180');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u187 = document.getElementById('u187');

if (bIE) u187.attachEvent("onmouseover", MouseOveru187);
else u187.addEventListener("mouseover", MouseOveru187, true);
function MouseOveru187(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u187',e)) return;
if (true) {

	SetPanelState('u172', 'pd1u172','none','',500,'none','',500);

}

}
gv_vAlignTable['u187'] = 'top';
var u74 = document.getElementById('u74');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u106 = document.getElementById('u106');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u193 = document.getElementById('u193');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u242 = document.getElementById('u242');

u242.style.cursor = 'pointer';
if (bIE) u242.attachEvent("onclick", Clicku242);
else u242.addEventListener("click", Clicku242, true);
function Clicku242(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета_М.html" + GetQuerystring();

}

}
gv_vAlignTable['u242'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u109 = document.getElementById('u109');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u73 = document.getElementById('u73');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u73','','none',500);

}

}
gv_vAlignTable['u41'] = 'top';
var u177 = document.getElementById('u177');

if (bIE) u177.attachEvent("onmouseover", MouseOveru177);
else u177.addEventListener("mouseover", MouseOveru177, true);
function MouseOveru177(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u177',e)) return;
if (true) {

	SetPanelState('u172', 'pd1u172','none','',500,'none','',500);

}

}
gv_vAlignTable['u177'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u128 = document.getElementById('u128');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u147 = document.getElementById('u147');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u121 = document.getElementById('u121');

if (bIE) u121.attachEvent("onmouseover", MouseOveru121);
else u121.addEventListener("mouseover", MouseOveru121, true);
function MouseOveru121(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u121',e)) return;
if (true) {

	SetPanelState('u109', 'pd1u109','none','',500,'none','',500);

}

}

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u188 = document.getElementById('u188');

if (bIE) u188.attachEvent("onmouseover", MouseOveru188);
else u188.addEventListener("mouseover", MouseOveru188, true);
function MouseOveru188(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u188',e)) return;
if (true) {

	SetPanelState('u172', 'pd1u172','none','',500,'none','',500);

}

}
gv_vAlignTable['u188'] = 'top';
var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u218','hidden','none',500);

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{
windowEvent = e;


if (IsOver(GetDragCursorRectangles(), GetWidgetRectangles('u172'))) {

	SetPanelState('u172', 'pd1u172','none','',500,'none','',500);

}

}

if (bIE) u173.attachEvent("onmouseout", MouseOutu173);
else u173.addEventListener("mouseout", MouseOutu173, true);
function MouseOutu173(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u173',e)) return;
if (true) {

	SetPanelState('u172', 'pd0u172','none','',500,'none','',500);

}

}

var u39 = document.getElementById('u39');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u0 = document.getElementById('u0');

var u20 = document.getElementById('u20');

var u232 = document.getElementById('u232');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u178 = document.getElementById('u178');

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u218','','none',500);

}

}

var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');

var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u73', 'pd1u73','none','',500,'none','',500);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u124 = document.getElementById('u124');

if (bIE) u124.attachEvent("onmouseover", MouseOveru124);
else u124.addEventListener("mouseover", MouseOveru124, true);
function MouseOveru124(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u124',e)) return;
if (true) {

	SetPanelState('u109', 'pd1u109','none','',500,'none','',500);

}

}
gv_vAlignTable['u124'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u73','hidden','none',500);

}

}
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{
windowEvent = e;


if (true) {

	self.location.href="Закрытие_проекта_1.html" + GetQuerystring();

}

}

var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_М.html" + GetQuerystring();

}

}
gv_vAlignTable['u237'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u215 = document.getElementById('u215');

u215.style.cursor = 'pointer';
if (bIE) u215.attachEvent("onclick", Clicku215);
else u215.addEventListener("click", Clicku215, true);
function Clicku215(e)
{
windowEvent = e;


if (true) {

	self.location.href="Закрытие_проекта_1.html" + GetQuerystring();

}

}

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов_2.html" + GetQuerystring();

}

}
gv_vAlignTable['u244'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u79 = document.getElementById('u79');

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u73', 'pd0u73','none','',500,'none','',500);

}

}
gv_vAlignTable['u79'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u22 = document.getElementById('u22');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u107 = document.getElementById('u107');

var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Вы точно хотите удалить этот комментарий? Учтите, что восстановить его будет уже невозможно..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u218 = document.getElementById('u218');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u194 = document.getElementById('u194');

if (window.OnLoad) OnLoad();

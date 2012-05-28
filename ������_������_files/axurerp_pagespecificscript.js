
var PageName = 'Читаем проект';
var PageId = 'c71dd5159056493caede933501afaa41'
var PageUrl = 'Читаем_проект.html'
document.title = 'Читаем проект';
var PageNotes = 
{
"pageName":"Читаем проект",
"showNotesNames":"False",
"New Note1":"<p style=\"text-align:left;\"><span style=\"\">При наведении курсора на комментарий (область, выделенная розовым фоном), фон комментария из никакого\/белого становится серым, плюс в правом верхнем углу области комментария появляются три кнопки (слева направо):<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">1. &quot;Постоянная ссылка&quot; на комментарий (при нажатии текущий URL страницы должен меняться на эту ссылку и становиться выбранным, но содержимое и состояние экрана меняться не должно)<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">2. &quot;Редактировать комментарий&quot;, наличие зависит от прав пользователя (при нажатии появляется лайтбокс для редактирования, удаления и печати комментария; в прототип будет добавлено позже)<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">3. &quot;Удалить комментарий&quot;, наличие зависит от прав пользователя, хотя авторы сообщений всегда должны иметь возможность удалить их (при нажатии появляется запрос подтверждения на удаление; после удаления, как вариант, сообщение может заменяться сообщением о том, что такой-то пользователь\/модератор\/администратор удалил (свое) сообщение в такой-то момент)<\/span><\/p>"}
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

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u241 = document.getElementById('u241');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u137 = document.getElementById('u137');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u65 = document.getElementById('u65');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мои_ресурсы.html" + GetQuerystring();

}

}
gv_vAlignTable['u294'] = 'top';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u212','hidden','none',500);

}

}
gv_vAlignTable['u226'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u222 = document.getElementById('u222');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u212 = document.getElementById('u212');

var u42 = document.getElementById('u42');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u117 = document.getElementById('u117');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_пользователя.html" + GetQuerystring();

}

}
gv_vAlignTable['u268'] = 'top';
var u52 = document.getElementById('u52');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');

u67.style.cursor = 'pointer';
if (bIE) u67.attachEvent("onclick", Clicku67);
else u67.addEventListener("click", Clicku67, true);
function Clicku67(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}

}

var u11 = document.getElementById('u11');

var u295 = document.getElementById('u295');

u295.style.cursor = 'pointer';
if (bIE) u295.attachEvent("onclick", Clicku295);
else u295.addEventListener("click", Clicku295, true);
function Clicku295(e)
{
windowEvent = e;


if (true) {

	self.location.href="Проекты_из_категории.html" + GetQuerystring();

}

}
gv_vAlignTable['u295'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u189 = document.getElementById('u189');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u108 = document.getElementById('u108');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u251 = document.getElementById('u251');

u251.style.cursor = 'pointer';
if (bIE) u251.attachEvent("onclick", Clicku251);
else u251.addEventListener("click", Clicku251, true);
function Clicku251(e)
{
windowEvent = e;


if (true) {

	self.location.href="Управление_файлами.html" + GetQuerystring();

}

}
gv_vAlignTable['u251'] = 'top';
var u62 = document.getElementById('u62');

var u292 = document.getElementById('u292');

u292.style.cursor = 'pointer';
if (bIE) u292.attachEvent("onclick", Clicku292);
else u292.addEventListener("click", Clicku292, true);
function Clicku292(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мое_портфолио.html" + GetQuerystring();

}

}
gv_vAlignTable['u292'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u21 = document.getElementById('u21');

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u213 = document.getElementById('u213');

var u184 = document.getElementById('u184');

if (bIE) u184.attachEvent("onmouseover", MouseOveru184);
else u184.addEventListener("mouseover", MouseOveru184, true);
function MouseOveru184(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}
gv_vAlignTable['u184'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u264 = document.getElementById('u264');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов.html" + GetQuerystring();

}

}
gv_vAlignTable['u293'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u212','','none',500);

}

}
gv_vAlignTable['u146'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u112 = document.getElementById('u112');

if (bIE) u112.attachEvent("onmouseover", MouseOveru112);
else u112.addEventListener("mouseover", MouseOveru112, true);
function MouseOveru112(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u236')) == (false)) {

	SetPanelVisibility('u236','','none',500);

}
else
if ((GetWidgetVisibility('u236')) == (true)) {

	SetPanelVisibility('u236','hidden','none',500);

}

}

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u57 = document.getElementById('u57');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u116 = document.getElementById('u116');

if (bIE) u116.attachEvent("onmouseover", MouseOveru116);
else u116.addEventListener("mouseover", MouseOveru116, true);
function MouseOveru116(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u116',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}
gv_vAlignTable['u116'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{
windowEvent = e;


if (IsOver(GetDragCursorRectangles(), GetWidgetRectangles('u167'))) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}

if (bIE) u168.attachEvent("onmouseout", MouseOutu168);
else u168.addEventListener("mouseout", MouseOutu168, true);
function MouseOutu168(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u168',e)) return;
if (true) {

	SetPanelState('u167', 'pd0u167','none','',500,'none','',500);

}

}

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u54 = document.getElementById('u54');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u231 = document.getElementById('u231');

var u13 = document.getElementById('u13');

var u250 = document.getElementById('u250');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u119 = document.getElementById('u119');

var u254 = document.getElementById('u254');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u191 = document.getElementById('u191');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u252 = document.getElementById('u252');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u202 = document.getElementById('u202');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u62','','none',500);

}

}
gv_vAlignTable['u30'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');

u225.style.cursor = 'pointer';
if (bIE) u225.attachEvent("onclick", Clicku225);
else u225.addEventListener("click", Clicku225, true);
function Clicku225(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u212','hidden','none',500);

SetWidgetRichText('u146', '<p style="text-align:left;"><span style="font-family:Arial;font-size:14px;font-weight:normal;font-style:normal;text-decoration:none;color:#009900;">[вы подали заявку]</span></p>');

}

}

var u9 = document.getElementById('u9');

var u114 = document.getElementById('u114');

if (bIE) u114.attachEvent("onmouseover", MouseOveru114);
else u114.addEventListener("mouseover", MouseOveru114, true);
function MouseOveru114(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u114',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}
gv_vAlignTable['u114'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{
windowEvent = e;


if (true) {

	self.location.href="Главный_экран.html" + GetQuerystring();

}

}
gv_vAlignTable['u290'] = 'top';
var u181 = document.getElementById('u181');

if (bIE) u181.attachEvent("onmouseover", MouseOveru181);
else u181.addEventListener("mouseover", MouseOveru181, true);
function MouseOveru181(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u181',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u110 = document.getElementById('u110');

var u172 = document.getElementById('u172');

if (bIE) u172.attachEvent("onmouseover", MouseOveru172);
else u172.addEventListener("mouseover", MouseOveru172, true);
function MouseOveru172(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u172',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}
gv_vAlignTable['u172'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u256 = document.getElementById('u256');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u56 = document.getElementById('u56');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Вы точно хотите удалить этот комментарий? Учтите, что восстановить его будет уже невозможно..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd0u62','none','',500,'none','',500);

}

}
gv_vAlignTable['u68'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u227 = document.getElementById('u227');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u62', 'pd1u62','none','',500,'none','',500);

}

}

var u104 = document.getElementById('u104');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u102 = document.getElementById('u102');

if (bIE) u102.attachEvent("onmouseover", MouseOveru102);
else u102.addEventListener("mouseover", MouseOveru102, true);
function MouseOveru102(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u102',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}
gv_vAlignTable['u102'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u237 = document.getElementById('u237');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');

var u239 = document.getElementById('u239');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');

var u96 = document.getElementById('u96');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u273 = document.getElementById('u273');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{
windowEvent = e;


if (true) {

	self.location.href="Контакты_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u271'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u177 = document.getElementById('u177');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u190 = document.getElementById('u190');

var u185 = document.getElementById('u185');

if (bIE) u185.attachEvent("onmouseover", MouseOveru185);
else u185.addEventListener("mouseover", MouseOveru185, true);
function MouseOveru185(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u185',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}
gv_vAlignTable['u185'] = 'top';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u62','hidden','none',500);

}

}
gv_vAlignTable['u69'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u272 = document.getElementById('u272');

u272.style.cursor = 'pointer';
if (bIE) u272.attachEvent("onclick", Clicku272);
else u272.addEventListener("click", Clicku272, true);
function Clicku272(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета.html" + GetQuerystring();

}

}
gv_vAlignTable['u272'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u188 = document.getElementById('u188');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u261 = document.getElementById('u261');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u269 = document.getElementById('u269');

u269.style.cursor = 'pointer';
if (bIE) u269.attachEvent("onclick", Clicku269);
else u269.addEventListener("click", Clicku269, true);
function Clicku269(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u269'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Вы точно хотите удалить этот комментарий? Учтите, что восстановить его будет уже невозможно..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u217 = document.getElementById('u217');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u236 = document.getElementById('u236');

var u183 = document.getElementById('u183');

if (bIE) u183.attachEvent("onmouseover", MouseOveru183);
else u183.addEventListener("mouseover", MouseOveru183, true);
function MouseOveru183(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u183',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}
gv_vAlignTable['u183'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u173 = document.getElementById('u173');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (IsOver(GetDragCursorRectangles(), GetWidgetRectangles('u98'))) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}

if (bIE) u99.attachEvent("onmouseout", MouseOutu99);
else u99.addEventListener("mouseout", MouseOutu99, true);
function MouseOutu99(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u99',e)) return;
if (true) {

	SetPanelState('u98', 'pd0u98','none','',500,'none','',500);

}

}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u171 = document.getElementById('u171');

if (bIE) u171.attachEvent("onmouseover", MouseOveru171);
else u171.addEventListener("mouseover", MouseOveru171, true);
function MouseOveru171(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u171',e)) return;
if (true) {

	SetPanelState('u167', 'pd1u167','none','',500,'none','',500);

}

}
gv_vAlignTable['u171'] = 'top';
var u98 = document.getElementById('u98');

var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u192 = document.getElementById('u192');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u115 = document.getElementById('u115');

if (bIE) u115.attachEvent("onmouseover", MouseOveru115);
else u115.addEventListener("mouseover", MouseOveru115, true);
function MouseOveru115(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u115',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}
gv_vAlignTable['u115'] = 'top';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u62','hidden','none',500);

}

}
gv_vAlignTable['u144'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u167 = document.getElementById('u167');

var u142 = document.getElementById('u142');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u103 = document.getElementById('u103');

if (bIE) u103.attachEvent("onmouseover", MouseOveru103);
else u103.addEventListener("mouseover", MouseOveru103, true);
function MouseOveru103(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u103',e)) return;
if (true) {

	SetPanelState('u98', 'pd1u98','none','',500,'none','',500);

}

}
gv_vAlignTable['u103'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u296 = document.getElementById('u296');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u215 = document.getElementById('u215');

var u118 = document.getElementById('u118');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u248 = document.getElementById('u248');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u220 = document.getElementById('u220');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{
windowEvent = e;


if (true) {

	self.location.href="Проекты_по_категориям.html" + GetQuerystring();

}

}
gv_vAlignTable['u291'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u35 = document.getElementById('u35');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u28 = document.getElementById('u28');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
if (window.OnLoad) OnLoad();

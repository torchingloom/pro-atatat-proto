
var PageName = 'Мой проект (РП)';
var PageId = '89dbaae7480240fcb98f1c0ba1692253'
var PageUrl = 'Мой_проект__РП_.html'
document.title = 'Мой проект (РП)';
var PageNotes = 
{
"pageName":"Мой проект (РП)",
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

var u370 = document.getElementById('u370');

var u488 = document.getElementById('u488');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u438 = document.getElementById('u438');

var u400 = document.getElementById('u400');

u400.style.cursor = 'pointer';
if (bIE) u400.attachEvent("onclick", Clicku400);
else u400.addEventListener("click", Clicku400, true);
function Clicku400(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u391', 'pd2u391','none','',500,'none','',500);

}

}

var u216 = document.getElementById('u216');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u492 = document.getElementById('u492');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');

if (bIE) u152.attachEvent("onmouseover", MouseOveru152);
else u152.addEventListener("mouseover", MouseOveru152, true);
function MouseOveru152(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u152',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}
gv_vAlignTable['u152'] = 'top';
var u450 = document.getElementById('u450');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u347 = document.getElementById('u347');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u159 = document.getElementById('u159');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u193 = document.getElementById('u193');

var u11 = document.getElementById('u11');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u332 = document.getElementById('u332');

var u151 = document.getElementById('u151');

if (bIE) u151.attachEvent("onmouseover", MouseOveru151);
else u151.addEventListener("mouseover", MouseOveru151, true);
function MouseOveru151(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u151',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}
gv_vAlignTable['u151'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u425 = document.getElementById('u425');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u54 = document.getElementById('u54');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u214 = document.getElementById('u214');

var u192 = document.getElementById('u192');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u412 = document.getElementById('u412');

var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u300','','none',500);

}

}
gv_vAlignTable['u287'] = 'top';
var u48 = document.getElementById('u48');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_пользователя.html" + GetQuerystring();

}

}
gv_vAlignTable['u80'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u476 = document.getElementById('u476');

var u318 = document.getElementById('u318');

var u449 = document.getElementById('u449');

var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Ссылка активна (не заблокирована) только в том случае, если все задачи проекта помечены, как завершенные!"), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

	self.location.href="Завершение_проекта.html" + GetQuerystring();

}

}
gv_vAlignTable['u113'] = 'top';
var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'top';
var u330 = document.getElementById('u330');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u344 = document.getElementById('u344');

var u163 = document.getElementById('u163');

if (bIE) u163.attachEvent("onmouseover", MouseOveru163);
else u163.addEventListener("mouseover", MouseOveru163, true);
function MouseOveru163(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u163',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}
gv_vAlignTable['u163'] = 'top';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'top';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

	self.location.href="Управление_файлами.html" + GetQuerystring();

}

}
gv_vAlignTable['u63'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u466','','none',500);

}

}
gv_vAlignTable['u37'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u410 = document.getElementById('u410');

u410.style.cursor = 'pointer';
if (bIE) u410.attachEvent("onclick", Clicku410);
else u410.addEventListener("click", Clicku410, true);
function Clicku410(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u391', 'pd2u391','none','',500,'none','',500);

}

}

var u186 = document.getElementById('u186');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'center';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u357 = document.getElementById('u357');

var u408 = document.getElementById('u408');

var u389 = document.getElementById('u389');

var u55 = document.getElementById('u55');

var u474 = document.getElementById('u474');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{
windowEvent = e;


if (true) {

	self.location.href="Создание_проекта,_3.html" + GetQuerystring();

}

}
gv_vAlignTable['u111'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u423 = document.getElementById('u423');

u423.style.cursor = 'pointer';
if (bIE) u423.attachEvent("onclick", Clicku423);
else u423.addEventListener("click", Clicku423, true);
function Clicku423(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u422', 'pd0u422','none','',500,'none','',500);

}

}

var u342 = document.getElementById('u342');

var u161 = document.getElementById('u161');

if (bIE) u161.attachEvent("onmouseover", MouseOveru161);
else u161.addEventListener("mouseover", MouseOveru161, true);
function MouseOveru161(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u161',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u437 = document.getElementById('u437');

var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{
windowEvent = e;


if (IsOver(GetDragCursorRectangles(), GetWidgetRectangles('u147'))) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}

if (bIE) u148.attachEvent("onmouseout", MouseOutu148);
else u148.addEventListener("mouseout", MouseOutu148, true);
function MouseOutu148(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u148',e)) return;
if (true) {

	SetPanelState('u147', 'pd0u147','none','',500,'none','',500);

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u490 = document.getElementById('u490');

var u305 = document.getElementById('u305');

var u283 = document.getElementById('u283');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u117','hidden','none',500);

}

}
gv_vAlignTable['u124'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u279 = document.getElementById('u279');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u66 = document.getElementById('u66');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u81'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u422 = document.getElementById('u422');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u459 = document.getElementById('u459');

var u167 = document.getElementById('u167');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u76 = document.getElementById('u76');

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

}

}
gv_vAlignTable['u123'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u419 = document.getElementById('u419');

var u435 = document.getElementById('u435');

var u33 = document.getElementById('u33');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u471 = document.getElementById('u471');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u303 = document.getElementById('u303');

var u281 = document.getElementById('u281');

u281.style.cursor = 'pointer';
if (bIE) u281.attachEvent("onclick", Clicku281);
else u281.addEventListener("click", Clicku281, true);
function Clicku281(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u117', 'pd1u117','none','',500,'none','',500);

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u117', 'pd0u117','none','',500,'none','',500);

}

}

var u358 = document.getElementById('u358');

u358.style.cursor = 'pointer';
if (bIE) u358.attachEvent("onclick", Clicku358);
else u358.addEventListener("click", Clicku358, true);
function Clicku358(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u357', 'pd0u357','none','',500,'none','',500);

}

}

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u268 = document.getElementById('u268');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u51 = document.getElementById('u51');

var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'top';
var u172 = document.getElementById('u172');

u172.style.cursor = 'pointer';
if (bIE) u172.attachEvent("onclick", Clicku172);
else u172.addEventListener("click", Clicku172, true);
function Clicku172(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u192','','none',500);

}

}
gv_vAlignTable['u172'] = 'top';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'center';
var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u399 = document.getElementById('u399');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u280 = document.getElementById('u280');

var u300 = document.getElementById('u300');

var u500 = document.getElementById('u500');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u409 = document.getElementById('u409');

var u316 = document.getElementById('u316');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u433 = document.getElementById('u433');

var u108 = document.getElementById('u108');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u145 = document.getElementById('u145');

var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Вы точно хотите удалить этот комментарий? Учтите, что восстановить его будет уже невозможно..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u64 = document.getElementById('u64');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'top';
var u301 = document.getElementById('u301');

var u120 = document.getElementById('u120');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u315 = document.getElementById('u315');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u21 = document.getElementById('u21');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u496 = document.getElementById('u496');

var u224 = document.getElementById('u224');

var u446 = document.getElementById('u446');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u200 = document.getElementById('u200');

var u502 = document.getElementById('u502');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u431 = document.getElementById('u431');

u431.style.cursor = 'pointer';
if (bIE) u431.attachEvent("onclick", Clicku431);
else u431.addEventListener("click", Clicku431, true);
function Clicku431(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u422', 'pd2u422','none','',500,'none','',500);

}

}

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u147 = document.getElementById('u147');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u445 = document.getElementById('u445');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u164 = document.getElementById('u164');

if (bIE) u164.attachEvent("onmouseover", MouseOveru164);
else u164.addEventListener("mouseover", MouseOveru164, true);
function MouseOveru164(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u164',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}
gv_vAlignTable['u164'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u368 = document.getElementById('u368');

var u430 = document.getElementById('u430');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u146 = document.getElementById('u146');

var u52 = document.getElementById('u52');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u277 = document.getElementById('u277');

var u466 = document.getElementById('u466');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u212 = document.getElementById('u212');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u407 = document.getElementById('u407');

var u385 = document.getElementById('u385');

var u28 = document.getElementById('u28');

var u60 = document.getElementById('u60');

var u443 = document.getElementById('u443');

var u118 = document.getElementById('u118');

var u262 = document.getElementById('u262');

var u498 = document.getElementById('u498');

var u457 = document.getElementById('u457');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u85 = document.getElementById('u85');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u406 = document.getElementById('u406');

var u384 = document.getElementById('u384');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u261 = document.getElementById('u261');

if (bIE) u261.attachEvent("onmouseover", MouseOveru261);
else u261.addEventListener("mouseover", MouseOveru261, true);
function MouseOveru261(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u261',e)) return;
if (true) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}
gv_vAlignTable['u261'] = 'top';
var u175 = document.getElementById('u175');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u210 = document.getElementById('u210');

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{
windowEvent = e;


if (true) {

	self.location.href="Контакты_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u83'] = 'top';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{
windowEvent = e;


if (true) {

	self.location.href="Проекты_из_категории.html" + GetQuerystring();

}

}
gv_vAlignTable['u107'] = 'top';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u383 = document.getElementById('u383');

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u117','','none',500);

	SetPanelVisibility('u466','hidden','none',500);

}

}
gv_vAlignTable['u30'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u260 = document.getElementById('u260');

if (bIE) u260.attachEvent("onmouseover", MouseOveru260);
else u260.addEventListener("mouseover", MouseOveru260, true);
function MouseOveru260(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u260',e)) return;
if (true) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}
gv_vAlignTable['u260'] = 'top';
var u397 = document.getElementById('u397');

var u9 = document.getElementById('u9');

var u157 = document.getElementById('u157');

u157.style.cursor = 'pointer';
if (bIE) u157.attachEvent("onclick", Clicku157);
else u157.addEventListener("click", Clicku157, true);
function Clicku157(e)
{
windowEvent = e;


if (true) {

	NewWindow("resources/Other.html#other=" + encodeURI("Вы точно хотите удалить этот комментарий? Учтите, что восстановить его будет уже невозможно..."), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300", true, 300, 300);

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u455 = document.getElementById('u455');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u274 = document.getElementById('u274');

if (bIE) u274.attachEvent("onmouseover", MouseOveru274);
else u274.addEventListener("mouseover", MouseOveru274, true);
function MouseOveru274(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u274',e)) return;
if (true) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}
gv_vAlignTable['u274'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'center';
var u328 = document.getElementById('u328');

var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мои_ресурсы.html" + GetQuerystring();

}

}
gv_vAlignTable['u106'] = 'top';
var u404 = document.getElementById('u404');

var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u378 = document.getElementById('u378');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u340 = document.getElementById('u340');

var u396 = document.getElementById('u396');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u354 = document.getElementById('u354');

var u273 = document.getElementById('u273');

if (bIE) u273.attachEvent("onmouseover", MouseOveru273);
else u273.addEventListener("mouseover", MouseOveru273, true);
function MouseOveru273(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u273',e)) return;
if (true) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}
gv_vAlignTable['u273'] = 'top';
var u202 = document.getElementById('u202');

var u105 = document.getElementById('u105');

u105.style.cursor = 'pointer';
if (bIE) u105.attachEvent("onclick", Clicku105);
else u105.addEventListener("click", Clicku105, true);
function Clicku105(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов.html" + GetQuerystring();

}

}
gv_vAlignTable['u105'] = 'top';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'center';
var u381 = document.getElementById('u381');

var u222 = document.getElementById('u222');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'top';
var u417 = document.getElementById('u417');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u272 = document.getElementById('u272');

if (bIE) u272.attachEvent("onmouseover", MouseOveru272);
else u272.addEventListener("mouseover", MouseOveru272, true);
function MouseOveru272(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u272',e)) return;
if (true) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}
gv_vAlignTable['u272'] = 'top';
var u402 = document.getElementById('u402');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'top';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мое_портфолио.html" + GetQuerystring();

}

}
gv_vAlignTable['u104'] = 'top';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u380 = document.getElementById('u380');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u228 = document.getElementById('u228');

var u166 = document.getElementById('u166');

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u394 = document.getElementById('u394');

var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u117','hidden','none',500);

}

}
gv_vAlignTable['u235'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u13 = document.getElementById('u13');

var u208 = document.getElementById('u208');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u418 = document.getElementById('u418');

var u366 = document.getElementById('u366');

u366.style.cursor = 'pointer';
if (bIE) u366.attachEvent("onclick", Clicku366);
else u366.addEventListener("click", Clicku366, true);
function Clicku366(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u357', 'pd2u357','none','',500,'none','',500);

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{
windowEvent = e;


if (true) {

	self.location.href="Проекты_по_категориям.html" + GetQuerystring();

}

}
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u220 = document.getElementById('u220');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u117 = document.getElementById('u117');

var u415 = document.getElementById('u415');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u73 = document.getElementById('u73');

var u351 = document.getElementById('u351');

var u270 = document.getElementById('u270');

if (bIE) u270.attachEvent("onmouseover", MouseOveru270);
else u270.addEventListener("mouseover", MouseOveru270, true);
function MouseOveru270(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u270',e)) return;
if (true) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u365 = document.getElementById('u365');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{
windowEvent = e;


if (true) {

	self.location.href="Главный_экран.html" + GetQuerystring();

}

}
gv_vAlignTable['u102'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u322 = document.getElementById('u322');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u414 = document.getElementById('u414');

var u392 = document.getElementById('u392');

u392.style.cursor = 'pointer';
if (bIE) u392.attachEvent("onclick", Clicku392);
else u392.addEventListener("click", Clicku392, true);
function Clicku392(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u391', 'pd0u391','none','',500,'none','',500);

}

}

var u233 = document.getElementById('u233');

var u469 = document.getElementById('u469');

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

	SetPanelVisibility('u339','hidden','none',500);

}

}
gv_vAlignTable['u350'] = 'top';
var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u207 = document.getElementById('u207');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u68 = document.getElementById('u68');

var u226 = document.getElementById('u226');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u364 = document.getElementById('u364');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u339','','none',500);

}

}
gv_vAlignTable['u338'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u427 = document.getElementById('u427');

var u168 = document.getElementById('u168');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u363 = document.getElementById('u363');

var u448 = document.getElementById('u448');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u312 = document.getElementById('u312');

var u290 = document.getElementById('u290');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u326 = document.getElementById('u326');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u218 = document.getElementById('u218');

var u362 = document.getElementById('u362');

var u376 = document.getElementById('u376');

u376.style.cursor = 'pointer';
if (bIE) u376.attachEvent("onclick", Clicku376);
else u376.addEventListener("click", Clicku376, true);
function Clicku376(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u357', 'pd2u357','none','',500,'none','',500);

}

}

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u349 = document.getElementById('u349');

var u311 = document.getElementById('u311');

u311.style.cursor = 'pointer';
if (bIE) u311.attachEvent("onclick", Clicku311);
else u311.addEventListener("click", Clicku311, true);
function Clicku311(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u300','hidden','none',500);

}

}
gv_vAlignTable['u311'] = 'top';
var u391 = document.getElementById('u391');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u484 = document.getElementById('u484');

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u375 = document.getElementById('u375');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u310 = document.getElementById('u310');

var u478 = document.getElementById('u478');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u40 = document.getElementById('u40');

var u324 = document.getElementById('u324');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u441 = document.getElementById('u441');

u441.style.cursor = 'pointer';
if (bIE) u441.attachEvent("onclick", Clicku441);
else u441.addEventListener("click", Clicku441, true);
function Clicku441(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u422', 'pd2u422','none','',500,'none','',500);

}

}

var u360 = document.getElementById('u360');

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{
windowEvent = e;


if (IsOver(GetDragCursorRectangles(), GetWidgetRectangles('u256'))) {

	SetPanelState('u256', 'pd1u256','none','',500,'none','',500);

}

}

if (bIE) u257.attachEvent("onmouseout", MouseOutu257);
else u257.addEventListener("mouseout", MouseOutu257, true);
function MouseOutu257(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u257',e)) return;
if (true) {

	SetPanelState('u256', 'pd0u256','none','',500,'none','',500);

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u374 = document.getElementById('u374');

var u428 = document.getElementById('u428');

var u165 = document.getElementById('u165');

if (bIE) u165.attachEvent("onmouseover", MouseOveru165);
else u165.addEventListener("mouseover", MouseOveru165, true);
function MouseOveru165(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelState('u147', 'pd1u147','none','',500,'none','',500);

}

}
gv_vAlignTable['u165'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u482 = document.getElementById('u482');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u440 = document.getElementById('u440');

var u486 = document.getElementById('u486');

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u256 = document.getElementById('u256');

var u155 = document.getElementById('u155');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u454 = document.getElementById('u454');

var u373 = document.getElementById('u373');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u481 = document.getElementById('u481');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u197 = document.getElementById('u197');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u336 = document.getElementById('u336');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u477 = document.getElementById('u477');

u477.style.cursor = 'pointer';
if (bIE) u477.attachEvent("onclick", Clicku477);
else u477.addEventListener("click", Clicku477, true);
function Clicku477(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u466','hidden','none',500);

}

}
gv_vAlignTable['u477'] = 'top';
var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u372 = document.getElementById('u372');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u467 = document.getElementById('u467');

var u398 = document.getElementById('u398');

var u204 = document.getElementById('u204');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u494 = document.getElementById('u494');

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u308 = document.getElementById('u308');

var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u454')) == (false)) {

	SetPanelVisibility('u454','','none',500);

}
else
if ((GetWidgetVisibility('u454')) == (true)) {

	SetPanelVisibility('u454','hidden','none',500);

}

}

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u429 = document.getElementById('u429');

var u203 = document.getElementById('u203');

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u192','hidden','none',500);

}

}
gv_vAlignTable['u203'] = 'top';
var u439 = document.getElementById('u439');

var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета.html" + GetQuerystring();

}

}
gv_vAlignTable['u84'] = 'top';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u320 = document.getElementById('u320');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u334 = document.getElementById('u334');

var u153 = document.getElementById('u153');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'top';
if (window.OnLoad) OnLoad();

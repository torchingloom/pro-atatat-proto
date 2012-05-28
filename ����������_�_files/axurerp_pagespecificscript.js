
var PageName = 'Оповещения П';
var PageId = 'ad3aded34e4c455bafe3b283745635c0'
var PageUrl = 'Оповещения_П.html'
document.title = 'Оповещения П';
var PageNotes = 
{
"pageName":"Оповещения П",
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
gv_vAlignTable['u370'] = 'top';
var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u167'] = 'top';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u202'] = 'top';
var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'top';
var u492 = document.getElementById('u492');
gv_vAlignTable['u492'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');

var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'top';
var u78 = document.getElementById('u78');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u201 = document.getElementById('u201');

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u201'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u587 = document.getElementById('u587');

var u1 = document.getElementById('u1');

var u583 = document.getElementById('u583');

u583.style.cursor = 'pointer';
if (bIE) u583.attachEvent("onclick", Clicku583);
else u583.addEventListener("click", Clicku583, true);
function Clicku583(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd4u8','none','',500,'none','',500);

	SetPanelState('u565', 'pd1u565','none','',500,'none','',500);

}

}
gv_vAlignTable['u583'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u193'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd3u8','none','',500,'none','',500);

}

}

var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u391 = document.getElementById('u391');

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u630 = document.getElementById('u630');

u630.style.cursor = 'pointer';
if (bIE) u630.attachEvent("onclick", Clicku630);
else u630.addEventListener("click", Clicku630, true);
function Clicku630(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мое_портфолио.html" + GetQuerystring();

}

}
gv_vAlignTable['u630'] = 'top';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd4u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u151'] = 'top';
var u71 = document.getElementById('u71');

var u527 = document.getElementById('u527');
gv_vAlignTable['u527'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u93 = document.getElementById('u93');

var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd5u8','none','',500,'none','',500);

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u593 = document.getElementById('u593');

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u150'] = 'top';
var u287 = document.getElementById('u287');

var u607 = document.getElementById('u607');

var u585 = document.getElementById('u585');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u601 = document.getElementById('u601');

u601.style.cursor = 'pointer';
if (bIE) u601.attachEvent("onclick", Clicku601);
else u601.addEventListener("click", Clicku601, true);
function Clicku601(e)
{
windowEvent = e;


if (true) {

	self.location.href="Главный_экран.html" + GetQuerystring();

}

}
gv_vAlignTable['u601'] = 'top';
var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'center';
var u318 = document.getElementById('u318');

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd1u8','none','',500,'none','',500);

}

}

var u476 = document.getElementById('u476');

u476.style.cursor = 'pointer';
if (bIE) u476.attachEvent("onclick", Clicku476);
else u476.addEventListener("click", Clicku476, true);
function Clicku476(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd3u8','none','',500,'none','',500);

}

}

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'top';
var u176 = document.getElementById('u176');

u176.style.cursor = 'pointer';
if (bIE) u176.attachEvent("onclick", Clicku176);
else u176.addEventListener("click", Clicku176, true);
function Clicku176(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u176'] = 'top';
var u227 = document.getElementById('u227');

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'top';
var u584 = document.getElementById('u584');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'top';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd4u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u177'] = 'top';
var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'top';
var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u410 = document.getElementById('u410');

var u589 = document.getElementById('u589');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u605 = document.getElementById('u605');
gv_vAlignTable['u605'] = 'center';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd5u8','none','',500,'none','',500);

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'top';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'top';
var u128 = document.getElementById('u128');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'top';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u586 = document.getElementById('u586');

var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u474 = document.getElementById('u474');

var u149 = document.getElementById('u149');

u149.style.cursor = 'pointer';
if (bIE) u149.attachEvent("onclick", Clicku149);
else u149.addEventListener("click", Clicku149, true);
function Clicku149(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u149'] = 'top';
var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u604 = document.getElementById('u604');

var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd4u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u125'] = 'top';
var u591 = document.getElementById('u591');

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u342 = document.getElementById('u342');

var u578 = document.getElementById('u578');

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd7u8','none','',500,'none','',500);

}

}

var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'top';
var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u631 = document.getElementById('u631');

u631.style.cursor = 'pointer';
if (bIE) u631.attachEvent("onclick", Clicku631);
else u631.addEventListener("click", Clicku631, true);
function Clicku631(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов.html" + GetQuerystring();

}

}
gv_vAlignTable['u631'] = 'top';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u356 = document.getElementById('u356');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'top';
var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_плана_проекта.html" + GetQuerystring();

}

}
gv_vAlignTable['u148'] = 'top';
var u57 = document.getElementById('u57');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u611 = document.getElementById('u611');

u611.style.cursor = 'pointer';
if (bIE) u611.attachEvent("onclick", Clicku611);
else u611.addEventListener("click", Clicku611, true);
function Clicku611(e)
{
windowEvent = e;


if (true) {

	self.location.href="Контакты_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u611'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u160 = document.getElementById('u160');

u160.style.cursor = 'pointer';
if (bIE) u160.attachEvent("onclick", Clicku160);
else u160.addEventListener("click", Clicku160, true);
function Clicku160(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u160'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u8 = document.getElementById('u8');

var u178 = document.getElementById('u178');

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd5u8','none','',500,'none','',500);

}

}

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'center';
var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_плана_проекта.html" + GetQuerystring();

}

}
gv_vAlignTable['u174'] = 'top';
var u553 = document.getElementById('u553');
gv_vAlignTable['u553'] = 'top';
var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u612 = document.getElementById('u612');

u612.style.cursor = 'pointer';
if (bIE) u612.attachEvent("onclick", Clicku612);
else u612.addEventListener("click", Clicku612, true);
function Clicku612(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета.html" + GetQuerystring();

}

}
gv_vAlignTable['u612'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u123'] = 'top';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'top';
var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');

var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u33 = document.getElementById('u33');

var u408 = document.getElementById('u408');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'top';
var u471 = document.getElementById('u471');

u471.style.cursor = 'pointer';
if (bIE) u471.attachEvent("onclick", Clicku471);
else u471.addEventListener("click", Clicku471, true);
function Clicku471(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u471'] = 'top';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u290'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_плана_проекта.html" + GetQuerystring();

}

}
gv_vAlignTable['u122'] = 'top';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u5 = document.getElementById('u5');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'center';
var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u512 = document.getElementById('u512');
gv_vAlignTable['u512'] = 'top';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u109 = document.getElementById('u109');

var u253 = document.getElementById('u253');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'top';
var u470 = document.getElementById('u470');

u470.style.cursor = 'pointer';
if (bIE) u470.attachEvent("onclick", Clicku470);
else u470.addEventListener("click", Clicku470, true);
function Clicku470(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u470'] = 'top';
var u597 = document.getElementById('u597');

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u267 = document.getElementById('u267');

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u565 = document.getElementById('u565');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u538 = document.getElementById('u538');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u500 = document.getElementById('u500');

var u316 = document.getElementById('u316');

u316.style.cursor = 'pointer';
if (bIE) u316.attachEvent("onclick", Clicku316);
else u316.addEventListener("click", Clicku316, true);
function Clicku316(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd8u8','none','',500,'none','',500);

}

}

var u294 = document.getElementById('u294');

u294.style.cursor = 'pointer';
if (bIE) u294.attachEvent("onclick", Clicku294);
else u294.addEventListener("click", Clicku294, true);
function Clicku294(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd3u8','none','',500,'none','',500);

}

}

var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'center';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd7u8','none','',500,'none','',500);

}

}

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u108'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u386 = document.getElementById('u386');

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'top';
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

	SetPanelState('u8', 'pd1u8','none','',500,'none','',500);

}

}

var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u2 = document.getElementById('u2');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'top';
var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u134'] = 'top';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u432 = document.getElementById('u432');

var u251 = document.getElementById('u251');

var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd6u8','none','',500,'none','',500);

}

}

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'top';
var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u446 = document.getElementById('u446');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u588 = document.getElementById('u588');

var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_плана_проекта.html" + GetQuerystring();

}

}
gv_vAlignTable['u200'] = 'top';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u577 = document.getElementById('u577');

var u35 = document.getElementById('u35');

var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u292 = document.getElementById('u292');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u562 = document.getElementById('u562');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u576 = document.getElementById('u576');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'top';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u430 = document.getElementById('u430');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'center';
var u444 = document.getElementById('u444');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u263 = document.getElementById('u263');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u561'] = 'top';
var u595 = document.getElementById('u595');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u572 = document.getElementById('u572');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u354 = document.getElementById('u354');

var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'top';
var u212 = document.getElementById('u212');

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", Clicku212);
else u212.addEventListener("click", Clicku212, true);
function Clicku212(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd1u8','none','',500,'none','',500);

}

}

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'top';
var u573 = document.getElementById('u573');

var u407 = document.getElementById('u407');
gv_vAlignTable['u407'] = 'center';
var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u524 = document.getElementById('u524');

u524.style.cursor = 'pointer';
if (bIE) u524.attachEvent("onclick", Clicku524);
else u524.addEventListener("click", Clicku524, true);
function Clicku524(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd2u8','none','',500,'none','',500);

}

}

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u574 = document.getElementById('u574');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u130 = document.getElementById('u130');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u406 = document.getElementById('u406');

var u384 = document.getElementById('u384');

u384.style.cursor = 'pointer';
if (bIE) u384.attachEvent("onclick", Clicku384);
else u384.addEventListener("click", Clicku384, true);
function Clicku384(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd3u8','none','',500,'none','',500);

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u442 = document.getElementById('u442');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u175'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u379 = document.getElementById('u379');

u379.style.cursor = 'pointer';
if (bIE) u379.attachEvent("onclick", Clicku379);
else u379.addEventListener("click", Clicku379, true);
function Clicku379(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u379'] = 'top';
var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'top';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u9 = document.getElementById('u9');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u536 = document.getElementById('u536');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'top';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u382 = document.getElementById('u382');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u340 = document.getElementById('u340');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u156 = document.getElementById('u156');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u508 = document.getElementById('u508');
gv_vAlignTable['u508'] = 'center';
var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u571 = document.getElementById('u571');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u381 = document.getElementById('u381');

u381.style.cursor = 'pointer';
if (bIE) u381.attachEvent("onclick", Clicku381);
else u381.addEventListener("click", Clicku381, true);
function Clicku381(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u381'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'top';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'top';
var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'top';
var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u236 = document.getElementById('u236');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u534 = document.getElementById('u534');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'center';
var u272 = document.getElementById('u272');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'top';
var u141 = document.getElementById('u141');

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u141'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u104 = document.getElementById('u104');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u96'] = 'top';
var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'top';
var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u352 = document.getElementById('u352');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'top';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u124'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u498 = document.getElementById('u498');

u498.style.cursor = 'pointer';
if (bIE) u498.attachEvent("onclick", Clicku498);
else u498.addEventListener("click", Clicku498, true);
function Clicku498(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd8u8','none','',500,'none','',500);

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u415 = document.getElementById('u415');

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u613 = document.getElementById('u613');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'top';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'top';
var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
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

	SetPanelState('u8', 'pd6u8','none','',500,'none','',500);

}

}

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'top';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u469 = document.getElementById('u469');

u469.style.cursor = 'pointer';
if (bIE) u469.attachEvent("onclick", Clicku469);
else u469.addEventListener("click", Clicku469, true);
function Clicku469(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

}

}
gv_vAlignTable['u469'] = 'top';
var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u622 = document.getElementById('u622');
gv_vAlignTable['u622'] = 'top';
var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u632 = document.getElementById('u632');

u632.style.cursor = 'pointer';
if (bIE) u632.attachEvent("onclick", Clicku632);
else u632.addEventListener("click", Clicku632, true);
function Clicku632(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мои_ресурсы.html" + GetQuerystring();

}

}
gv_vAlignTable['u632'] = 'top';
var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{
windowEvent = e;


if (true) {

	self.location.href="Доработка_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u115'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'top';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u592 = document.getElementById('u592');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u265 = document.getElementById('u265');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u231 = document.getElementById('u231');

var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'top';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u187 = document.getElementById('u187');

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd7u8','none','',500,'none','',500);

}

}

var u507 = document.getElementById('u507');

var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u522 = document.getElementById('u522');

var u543 = document.getElementById('u543');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'top';
var u59 = document.getElementById('u59');

var u376 = document.getElementById('u376');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'top';
var u186 = document.getElementById('u186');

u186.style.cursor = 'pointer';
if (bIE) u186.attachEvent("onclick", Clicku186);
else u186.addEventListener("click", Clicku186, true);
function Clicku186(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чтение_заявки_на_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u186'] = 'top';
var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'top';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'center';
var u325 = document.getElementById('u325');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'top';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u361 = document.getElementById('u361');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u575 = document.getElementById('u575');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'top';
var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'top';
var u624 = document.getElementById('u624');
gv_vAlignTable['u624'] = 'top';
var u73 = document.getElementById('u73');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u207 = document.getElementById('u207');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'top';
var u483 = document.getElementById('u483');

u483.style.cursor = 'pointer';
if (bIE) u483.attachEvent("onclick", Clicku483);
else u483.addEventListener("click", Clicku483, true);
function Clicku483(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd1u8','none','',500,'none','',500);

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u69 = document.getElementById('u69');

var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u37 = document.getElementById('u37');

var u609 = document.getElementById('u609');
gv_vAlignTable['u609'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'top';
var u482 = document.getElementById('u482');
gv_vAlignTable['u482'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u478 = document.getElementById('u478');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{
windowEvent = e;


if (true) {

	self.location.href="Читаем_проект.html" + GetQuerystring();

}

}
gv_vAlignTable['u291'] = 'top';
var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u590 = document.getElementById('u590');

var u205 = document.getElementById('u205');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u42 = document.getElementById('u42');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'top';
var u558 = document.getElementById('u558');

var u620 = document.getElementById('u620');
gv_vAlignTable['u620'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'top';
var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u566 = document.getElementById('u566');

u566.style.cursor = 'pointer';
if (bIE) u566.attachEvent("onclick", Clicku566);
else u566.addEventListener("click", Clicku566, true);
function Clicku566(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd0u8','none','',500,'none','',500);

	SetPanelState('u565', 'pd0u565','none','',500,'none','',500);

}

}
gv_vAlignTable['u566'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u8', 'pd6u8','none','',500,'none','',500);

}

}

var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u599 = document.getElementById('u599');

u599.style.cursor = 'pointer';
if (bIE) u599.attachEvent("onclick", Clicku599);
else u599.addEventListener("click", Clicku599, true);
function Clicku599(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_пользователя.html" + GetQuerystring();

}

}
gv_vAlignTable['u599'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u182 = document.getElementById('u182');

var u502 = document.getElementById('u502');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'top';
var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u13 = document.getElementById('u13');

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u466 = document.getElementById('u466');

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u203 = document.getElementById('u203');

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'top';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u320 = document.getElementById('u320');

var u4 = document.getElementById('u4');

var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'top';
var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u451 = document.getElementById('u451');

if (window.OnLoad) OnLoad();

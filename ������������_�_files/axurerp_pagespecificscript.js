
var PageName = 'Пользователи А';
var PageId = 'a227337b20ef484aa5169e99e6e498ba'
var PageUrl = 'Пользователи_А.html'
document.title = 'Пользователи А';
var PageNotes = 
{
"pageName":"Пользователи А",
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

var u167 = document.getElementById('u167');

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
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

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u298 = document.getElementById('u298');

var u139 = document.getElementById('u139');

var u201 = document.getElementById('u201');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u215 = document.getElementById('u215');

var u193 = document.getElementById('u193');

var u11 = document.getElementById('u11');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u332 = document.getElementById('u332');

var u151 = document.getElementById('u151');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чужая_анкета.html" + GetQuerystring();

}

}

var u72 = document.getElementById('u72');

var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u165 = document.getElementById('u165');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u100 = document.getElementById('u100');

var u54 = document.getElementById('u54');

var u302 = document.getElementById('u302');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u318 = document.getElementById('u318');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u268 = document.getElementById('u268');

var u330 = document.getElementById('u330');

var u227 = document.getElementById('u227');

var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

	SetPanelState('u44', 'pd1u44','none','',500,'none','',500);

}

}
gv_vAlignTable['u42'] = 'top';
var u344 = document.getElementById('u344');

u344.style.cursor = 'pointer';
if (bIE) u344.attachEvent("onclick", Clicku344);
else u344.addEventListener("click", Clicku344, true);
function Clicku344(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чужая_анкета.html" + GetQuerystring();

}

}

var u163 = document.getElementById('u163');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');

var u70 = document.getElementById('u70');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u29 = document.getElementById('u29');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u149 = document.getElementById('u149');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'top';
var u306 = document.getElementById('u306');

var u284 = document.getElementById('u284');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u342 = document.getElementById('u342');

var u161 = document.getElementById('u161');

var u356 = document.getElementById('u356');

var u175 = document.getElementById('u175');

var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u312 = document.getElementById('u312');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u20 = document.getElementById('u20');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
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

	SetPanelState('u28', 'pd2u28','none','',500,'none','',500);

	SetPanelState('u44', 'pd2u44','none','',500,'none','',500);

}

}
gv_vAlignTable['u38'] = 'top';
var u241 = document.getElementById('u241');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'top';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Проекты.html" + GetQuerystring();

}

}
gv_vAlignTable['u8'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u66 = document.getElementById('u66');

var u25 = document.getElementById('u25');

var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u88 = document.getElementById('u88');

var u304 = document.getElementById('u304');

var u282 = document.getElementById('u282');

var u76 = document.getElementById('u76');

var u123 = document.getElementById('u123');

var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u296 = document.getElementById('u296');

var u137 = document.getElementById('u137');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u254 = document.getElementById('u254');

var u173 = document.getElementById('u173');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u94 = document.getElementById('u94');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u358 = document.getElementById('u358');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u46 = document.getElementById('u46');

var u280 = document.getElementById('u280');

var u121 = document.getElementById('u121');

var u316 = document.getElementById('u316');

var u294 = document.getElementById('u294');

var u135 = document.getElementById('u135');

var u108 = document.getElementById('u108');

var u252 = document.getElementById('u252');

var u171 = document.getElementById('u171');

var u386 = document.getElementById('u386');

var u266 = document.getElementById('u266');

var u64 = document.getElementById('u64');

var u239 = document.getElementById('u239');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u2 = document.getElementById('u2');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'top';
var u21 = document.getElementById('u21');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'center';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u82 = document.getElementById('u82');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u314 = document.getElementById('u314');

var u292 = document.getElementById('u292');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u250 = document.getElementById('u250');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u147 = document.getElementById('u147');

var u58 = document.getElementById('u58');

var u34 = document.getElementById('u34');

var u264 = document.getElementById('u264');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u80 = document.getElementById('u80');

var u213 = document.getElementById('u213');

var u191 = document.getElementById('u191');

var u368 = document.getElementById('u368');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u52 = document.getElementById('u52');

var u125 = document.getElementById('u125');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u385 = document.getElementById('u385');

u385.style.cursor = 'pointer';
if (bIE) u385.attachEvent("onclick", Clicku385);
else u385.addEventListener("click", Clicku385, true);
function Clicku385(e)
{
windowEvent = e;


if (true) {

	self.location.href="Новый_юзер.html" + GetQuerystring();

}

}
gv_vAlignTable['u385'] = 'top';
var u28 = document.getElementById('u28');

var u145 = document.getElementById('u145');

var u118 = document.getElementById('u118');

var u262 = document.getElementById('u262');

var u322 = document.getElementById('u322');

var u131 = document.getElementById('u131');

var u276 = document.getElementById('u276');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u211 = document.getElementById('u211');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd2u28','none','',500,'none','',500);

	SetPanelState('u44', 'pd2u44','none','',500,'none','',500);

}

}
gv_vAlignTable['u43'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'top';
var u248 = document.getElementById('u248');

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');

var u383 = document.getElementById('u383');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u143 = document.getElementById('u143');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u260 = document.getElementById('u260');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u157 = document.getElementById('u157');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u189 = document.getElementById('u189');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u274 = document.getElementById('u274');

var u328 = document.getElementById('u328');

var u106 = document.getElementById('u106');

var u382 = document.getElementById('u382');

u382.style.cursor = 'pointer';
if (bIE) u382.attachEvent("onclick", Clicku382);
else u382.addEventListener("click", Clicku382, true);
function Clicku382(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов_1.html" + GetQuerystring();

}

}
gv_vAlignTable['u382'] = 'top';
var u223 = document.getElementById('u223');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u378 = document.getElementById('u378');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u340 = document.getElementById('u340');

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u237 = document.getElementById('u237');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u354 = document.getElementById('u354');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'top';
var u102 = document.getElementById('u102');

var u60 = document.getElementById('u60');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="Кабинет_администратора.html" + GetQuerystring();

}

}
gv_vAlignTable['u6'] = 'top';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

	SetPanelState('u44', 'pd0u44','none','',500,'none','',500);

}

}
gv_vAlignTable['u36'] = 'top';
var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u155 = document.getElementById('u155');

var u209 = document.getElementById('u209');

var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u272 = document.getElementById('u272');

var u336 = document.getElementById('u336');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u104 = document.getElementById('u104');

var u308 = document.getElementById('u308');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u380 = document.getElementById('u380');

u380.style.cursor = 'pointer';
if (bIE) u380.attachEvent("onclick", Clicku380);
else u380.addEventListener("click", Clicku380, true);
function Clicku380(e)
{
windowEvent = e;


if (true) {

	self.location.href="Отчеты_о_пользователях.html" + GetQuerystring();

}

}
gv_vAlignTable['u380'] = 'top';
var u86 = document.getElementById('u86');

var u221 = document.getElementById('u221');

var u119 = document.getElementById('u119');

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u235 = document.getElementById('u235');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета_А.html" + GetQuerystring();

}

}
gv_vAlignTable['u13'] = 'top';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u352 = document.getElementById('u352');

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u366 = document.getElementById('u366');

var u98 = document.getElementById('u98');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'top';
var u74 = document.getElementById('u74');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

	SetPanelState('u44', 'pd0u44','none','',500,'none','',500);

}

}
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'top';
var u270 = document.getElementById('u270');

var u199 = document.getElementById('u199');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u92 = document.getElementById('u92');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u338 = document.getElementById('u338');

var u300 = document.getElementById('u300');

var u116 = document.getElementById('u116');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'top';
var u233 = document.getElementById('u233');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u350 = document.getElementById('u350');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u68 = document.getElementById('u68');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u246 = document.getElementById('u246');

var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');

var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'center';
var u56 = document.getElementById('u56');

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u372 = document.getElementById('u372');

var u114 = document.getElementById('u114');

var u48 = document.getElementById('u48');

var u169 = document.getElementById('u169');

var u290 = document.getElementById('u290');

var u187 = document.getElementById('u187');

var u326 = document.getElementById('u326');

var u245 = document.getElementById('u245');

var u14 = document.getElementById('u14');

var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u362 = document.getElementById('u362');

var u376 = document.getElementById('u376');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u286 = document.getElementById('u286');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u127 = document.getElementById('u127');

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

	SetPanelState('u44', 'pd1u44','none','',500,'none','',500);

}

}
gv_vAlignTable['u32'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u27 = document.getElementById('u27');

var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чужая_анкета.html" + GetQuerystring();

}

}

var u310 = document.getElementById('u310');

var u207 = document.getElementById('u207');

var u185 = document.getElementById('u185');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u324 = document.getElementById('u324');

var u243 = document.getElementById('u243');

var u360 = document.getElementById('u360');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'top';
var u45 = document.getElementById('u45');

var u374 = document.getElementById('u374');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'top';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u96 = document.getElementById('u96');

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'top';
var u256 = document.getElementById('u256');

var u288 = document.getElementById('u288');

var u129 = document.getElementById('u129');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u110 = document.getElementById('u110');

var u205 = document.getElementById('u205');

var u183 = document.getElementById('u183');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u179 = document.getElementById('u179');

var u141 = document.getElementById('u141');

var u197 = document.getElementById('u197');

var u39 = document.getElementById('u39');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u159 = document.getElementById('u159');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u90 = document.getElementById('u90');

var u203 = document.getElementById('u203');

var u181 = document.getElementById('u181');

var u84 = document.getElementById('u84');

var u258 = document.getElementById('u258');

var u320 = document.getElementById('u320');

var u4 = document.getElementById('u4');

var u217 = document.getElementById('u217');

var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u334 = document.getElementById('u334');

var u153 = document.getElementById('u153');

if (window.OnLoad) OnLoad();

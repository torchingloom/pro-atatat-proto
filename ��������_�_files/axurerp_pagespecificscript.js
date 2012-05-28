
var PageName = 'Контакты П';
var PageId = 'eef2b120a4174471b24762ab9994f2a3'
var PageUrl = 'Контакты_П.html'
document.title = 'Контакты П';
var PageNotes = 
{
"pageName":"Контакты П",
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
gv_vAlignTable['u167'] = 'center';
var u299 = document.getElementById('u299');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u136 = document.getElementById('u136');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u152 = document.getElementById('u152');

var u231 = document.getElementById('u231');

var u60 = document.getElementById('u60');

var u78 = document.getElementById('u78');

var u166 = document.getElementById('u166');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u201 = document.getElementById('u201');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u215 = document.getElementById('u215');

var u193 = document.getElementById('u193');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u126 = document.getElementById('u126');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u72 = document.getElementById('u72');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u138 = document.getElementById('u138');

var u100 = document.getElementById('u100');

var u54 = document.getElementById('u54');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u269 = document.getElementById('u269');

var u150 = document.getElementById('u150');

var u287 = document.getElementById('u287');

var u48 = document.getElementById('u48');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u80 = document.getElementById('u80');

var u318 = document.getElementById('u318');

u318.style.cursor = 'pointer';
if (bIE) u318.attachEvent("onclick", Clicku318);
else u318.addEventListener("click", Clicku318, true);
function Clicku318(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мое_портфолио.html" + GetQuerystring();

}

}
gv_vAlignTable['u318'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
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
var u227 = document.getElementById('u227');

var u42 = document.getElementById('u42');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u29', 'pd1u29','none','',500,'none','',500);

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}

}
gv_vAlignTable['u37'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u285 = document.getElementById('u285');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u50 = document.getElementById('u50');

var u162 = document.getElementById('u162');

var u29 = document.getElementById('u29');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u229 = document.getElementById('u229');

var u148 = document.getElementById('u148');

var u110 = document.getElementById('u110');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u283 = document.getElementById('u283');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u124 = document.getElementById('u124');

var u279 = document.getElementById('u279');

var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чужая_анкета_1.html" + GetQuerystring();

}

}

var u160 = document.getElementById('u160');

var u297 = document.getElementById('u297');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Оповещения_П.html" + GetQuerystring();

}

}
gv_vAlignTable['u8'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u76 = document.getElementById('u76');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u263 = document.getElementById('u263');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'top';
var u281 = document.getElementById('u281');

var u94 = document.getElementById('u94');

var u122 = document.getElementById('u122');

var u5 = document.getElementById('u5');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'top';
var u295 = document.getElementById('u295');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u253 = document.getElementById('u253');

var u172 = document.getElementById('u172');

var u267 = document.getElementById('u267');

var u46 = document.getElementById('u46');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u108 = document.getElementById('u108');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'top';
var u88 = document.getElementById('u88');

var u239 = document.getElementById('u239');

var u301 = document.getElementById('u301');

var u120 = document.getElementById('u120');

var u2 = document.getElementById('u2');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u293 = document.getElementById('u293');

var u21 = document.getElementById('u21');

var u134 = document.getElementById('u134');

var u251 = document.getElementById('u251');

var u170 = document.getElementById('u170');

var u265 = document.getElementById('u265');

var u82 = document.getElementById('u82');

var u16 = document.getElementById('u16');

var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u58 = document.getElementById('u58');

var u34 = document.getElementById('u34');

var u90 = document.getElementById('u90');

var u164 = document.getElementById('u164');

var u213 = document.getElementById('u213');

var u191 = document.getElementById('u191');

var u146 = document.getElementById('u146');

var u52 = document.getElementById('u52');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u277 = document.getElementById('u277');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u28 = document.getElementById('u28');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u118 = document.getElementById('u118');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u249 = document.getElementById('u249');

var u211 = document.getElementById('u211');

var u130 = document.getElementById('u130');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	self.location.href="Результаты_поиска.html" + GetQuerystring();

}

}

var u144 = document.getElementById('u144');

var u261 = document.getElementById('u261');

var u175 = document.getElementById('u175');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u275 = document.getElementById('u275');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u44 = document.getElementById('u44');

var u30 = document.getElementById('u30');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'top';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="Анкета.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u189 = document.getElementById('u189');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u309 = document.getElementById('u309');
gv_vAlignTable['u309'] = 'top';
var u106 = document.getElementById('u106');

var u223 = document.getElementById('u223');

var u142 = document.getElementById('u142');

var u86 = document.getElementById('u86');

var u237 = document.getElementById('u237');

var u156 = document.getElementById('u156');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u273 = document.getElementById('u273');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u209 = document.getElementById('u209');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u64 = document.getElementById('u64');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u104 = document.getElementById('u104');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u56 = document.getElementById('u56');

var u221 = document.getElementById('u221');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u235 = document.getElementById('u235');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u13 = document.getElementById('u13');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u271 = document.getElementById('u271');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'top';
var u74 = document.getElementById('u74');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'top';
var u199 = document.getElementById('u199');

var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{
windowEvent = e;


if (true) {

	self.location.href="Каталог_ресурсов.html" + GetQuerystring();

}

}
gv_vAlignTable['u319'] = 'top';
var u92 = document.getElementById('u92');

var u26 = document.getElementById('u26');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u116 = document.getElementById('u116');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u233 = document.getElementById('u233');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u247 = document.getElementById('u247');

var u68 = document.getElementById('u68');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u0 = document.getElementById('u0');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'top';
var u291 = document.getElementById('u291');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');

var u132 = document.getElementById('u132');

var u259 = document.getElementById('u259');

var u114 = document.getElementById('u114');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u187 = document.getElementById('u187');

var u38 = document.getElementById('u38');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u168 = document.getElementById('u168');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u29', 'pd0u29','none','',500,'none','',500);

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}

}
gv_vAlignTable['u32'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'top';
var u207 = document.getElementById('u207');

var u185 = document.getElementById('u185');

var u40 = document.getElementById('u40');

var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чужая_анкета_1.html" + GetQuerystring();

}

}

var u257 = document.getElementById('u257');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u289 = document.getElementById('u289');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u96 = document.getElementById('u96');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u174 = document.getElementById('u174');

var u205 = document.getElementById('u205');

var u183 = document.getElementById('u183');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="Главный_экран.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u179 = document.getElementById('u179');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u197 = document.getElementById('u197');

var u39 = document.getElementById('u39');

var u255 = document.getElementById('u255');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u128 = document.getElementById('u128');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u66 = document.getElementById('u66');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u140 = document.getElementById('u140');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u245 = document.getElementById('u245');

u245.style.cursor = 'pointer';
if (bIE) u245.attachEvent("onclick", Clicku245);
else u245.addEventListener("click", Clicku245, true);
function Clicku245(e)
{
windowEvent = e;


if (true) {

	self.location.href="Чужая_анкета_1.html" + GetQuerystring();

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u154 = document.getElementById('u154');

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u203 = document.getElementById('u203');

var u181 = document.getElementById('u181');

var u84 = document.getElementById('u84');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{
windowEvent = e;


if (true) {

	self.location.href="Мои_ресурсы.html" + GetQuerystring();

}

}
gv_vAlignTable['u320'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u217 = document.getElementById('u217');

var u195 = document.getElementById('u195');

var u225 = document.getElementById('u225');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u102 = document.getElementById('u102');

if (window.OnLoad) OnLoad();

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as a,a as e,b as r,d as o,f as _}from"./app-9e438faa.js";const h={},c=_(`<p>date是一个构造函数[[D1 原型和继承]]，而非一个内置对象，必须配合我们的new关键字才能实例化一个时间对象 具体的使用方式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var time = new Date()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下四种方法同样可以创建 Date 对象：</p><p>var d = new Date(); var d = new Date(milliseconds); // 参数为毫秒 var d = new Date(dateString); var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);</p><ul><li><p>milliseconds 参数是一个 Unix 时间戳（Unix Time Stamp），它是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC（the Unix epoch）以来的毫秒数。</p></li><li><p>dateString 参数表示日期的字符串值。</p></li><li><p>year, month, day, hours, minutes, seconds, milliseconds 分别表示年、月、日、时、分、秒、毫秒。</p></li></ul><h2 id="该对象方法" tabindex="-1"><a class="header-anchor" href="#该对象方法" aria-hidden="true">#</a> 该对象方法</h2><p>方法</p><p>描述</p>`,8),p={href:"https://www.runoob.com/jsref/jsref-getdate.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"从 Date 对象返回一个月中的某一天 (1 ~ 31)。",-1),i={href:"https://www.runoob.com/jsref/jsref-getday.html",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"从 Date 对象返回一周中的某一天 (0 ~ 6)。",-1),d={href:"https://www.runoob.com/jsref/jsref-getfullyear.html",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"从 Date 对象以四位数字返回年份。",-1),m={href:"https://www.runoob.com/jsref/jsref-gethours.html",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"返回 Date 对象的小时 (0 ~ 23)。",-1),b={href:"https://www.runoob.com/jsref/jsref-getmilliseconds.html",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"返回 Date 对象的毫秒(0 ~ 999)。",-1),D={href:"https://www.runoob.com/jsref/jsref-getminutes.html",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"返回 Date 对象的分钟 (0 ~ 59)。",-1),T={href:"https://www.runoob.com/jsref/jsref-getmonth.html",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"从 Date 对象返回月份 (0 ~ 11)。",-1),U={href:"https://www.runoob.com/jsref/jsref-getseconds.html",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"返回 Date 对象的秒数 (0 ~ 59)。",-1),v={href:"https://www.runoob.com/jsref/jsref-gettime.html",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"返回 1970 年 1 月 1 日至今的毫秒数。",-1),y={href:"https://www.runoob.com/jsref/jsref-gettimezoneoffset.html",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"返回本地时间与格林威治标准时间 (GMT) 的分钟差。",-1),Y={href:"https://www.runoob.com/jsref/jsref-getutcdate.html",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。",-1),N={href:"https://www.runoob.com/jsref/jsref-getutcday.html",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。",-1),L={href:"https://www.runoob.com/jsref/jsref-getutcfullyear.html",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,"根据世界时从 Date 对象返回四位数的年份。",-1),I={href:"https://www.runoob.com/jsref/jsref-getutchours.html",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,"根据世界时返回 Date 对象的小时 (0 ~ 23)。",-1),V={href:"https://www.runoob.com/jsref/jsref-getutcmilliseconds.html",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"根据世界时返回 Date 对象的毫秒(0 ~ 999)。",-1),E={href:"https://www.runoob.com/jsref/jsref-getutcminutes.html",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"根据世界时返回 Date 对象的分钟 (0 ~ 59)。",-1),G={href:"https://www.runoob.com/jsref/jsref-getutcmonth.html",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"根据世界时从 Date 对象返回月份 (0 ~ 11)。",-1),A={href:"https://www.runoob.com/jsref/jsref-getutcseconds.html",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"根据世界时返回 Date 对象的秒钟 (0 ~ 59)。",-1),P=e("p",null,"getYear()",-1),Q=e("p",null,"已废弃。 请使用 getFullYear() 方法代替。",-1),R={href:"https://www.runoob.com/jsref/jsref-parse.html",target:"_blank",rel:"noopener noreferrer"},W=e("p",null,"返回1970年1月1日午夜到指定日期（字符串）的毫秒数。",-1),X={href:"https://www.runoob.com/jsref/jsref-setdate.html",target:"_blank",rel:"noopener noreferrer"},Z=e("p",null,"设置 Date 对象中月的某一天 (1 ~ 31)。",-1),$={href:"https://www.runoob.com/jsref/jsref-setfullyear.html",target:"_blank",rel:"noopener noreferrer"},ee=e("p",null,"设置 Date 对象中的年份（四位数字）。",-1),te={href:"https://www.runoob.com/jsref/jsref-sethours.html",target:"_blank",rel:"noopener noreferrer"},re=e("p",null,"设置 Date 对象中的小时 (0 ~ 23)。",-1),oe={href:"https://www.runoob.com/jsref/jsref-setmilliseconds.html",target:"_blank",rel:"noopener noreferrer"},ne=e("p",null,"设置 Date 对象中的毫秒 (0 ~ 999)。",-1),se={href:"https://www.runoob.com/jsref/jsref-setminutes.html",target:"_blank",rel:"noopener noreferrer"},le=e("p",null,"设置 Date 对象中的分钟 (0 ~ 59)。",-1),ae={href:"https://www.runoob.com/jsref/jsref-setmonth.html",target:"_blank",rel:"noopener noreferrer"},_e=e("p",null,"设置 Date 对象中月份 (0 ~ 11)。",-1),he={href:"https://www.runoob.com/jsref/jsref-setseconds.html",target:"_blank",rel:"noopener noreferrer"},ce=e("p",null,"设置 Date 对象中的秒钟 (0 ~ 59)。",-1),pe={href:"https://www.runoob.com/jsref/jsref-settime.html",target:"_blank",rel:"noopener noreferrer"},ue=e("p",null,"setTime() 方法以毫秒设置 Date 对象。",-1),ie={href:"https://www.runoob.com/jsref/jsref-setutcdate.html",target:"_blank",rel:"noopener noreferrer"},fe=e("p",null,"根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。",-1),de={href:"https://www.runoob.com/jsref/jsref-setutcfullyear.html",target:"_blank",rel:"noopener noreferrer"},we=e("p",null,"根据世界时设置 Date 对象中的年份（四位数字）。",-1),me={href:"https://www.runoob.com/jsref/jsref-setutchours.html",target:"_blank",rel:"noopener noreferrer"},ge=e("p",null,"根据世界时设置 Date 对象中的小时 (0 ~ 23)。",-1),be={href:"https://www.runoob.com/jsref/jsref-setutcmilliseconds.html",target:"_blank",rel:"noopener noreferrer"},je=e("p",null,"根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。",-1),De={href:"https://www.runoob.com/jsref/jsref-setutcminutes.html",target:"_blank",rel:"noopener noreferrer"},ke=e("p",null,"根据世界时设置 Date 对象中的分钟 (0 ~ 59)。",-1),Te={href:"https://www.runoob.com/jsref/jsref-setutcmonth.html",target:"_blank",rel:"noopener noreferrer"},Se=e("p",null,"根据世界时设置 Date 对象中的月份 (0 ~ 11)。",-1),Ue={href:"https://www.runoob.com/jsref/jsref-setutcseconds.html",target:"_blank",rel:"noopener noreferrer"},Ce=e("p",null,"setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。",-1),ve=e("p",null,"setYear()",-1),xe=e("p",null,"已废弃。请使用 setFullYear() 方法代替。",-1),ye={href:"https://www.runoob.com/jsref/jsref-todatestring.html",target:"_blank",rel:"noopener noreferrer"},Me=e("p",null,"把 Date 对象的日期部分转换为字符串。",-1),Ye=e("p",null,"toGMTString()",-1),Fe=e("p",null,"已废弃。请使用 toUTCString() 方法代替。",-1),Ne={href:"https://www.runoob.com/jsref/jsref-toisostring.html",target:"_blank",rel:"noopener noreferrer"},Oe=e("p",null,"使用 ISO 标准返回字符串的日期格式。",-1),Le={href:"https://www.runoob.com/jsref/jsref-tojson.html",target:"_blank",rel:"noopener noreferrer"},He=e("p",null,"以 JSON 数据格式返回日期字符串。",-1),Ie={href:"https://www.runoob.com/jsref/jsref-tolocaledatestring.html",target:"_blank",rel:"noopener noreferrer"},Je=e("p",null,"根据本地时间格式，把 Date 对象的日期部分转换为字符串。",-1),Ve={href:"https://www.runoob.com/jsref/jsref-tolocaletimestring.html",target:"_blank",rel:"noopener noreferrer"},Be=e("p",null,"根据本地时间格式，把 Date 对象的时间部分转换为字符串。",-1),Ee={href:"https://www.runoob.com/jsref/jsref-tolocalestring.html",target:"_blank",rel:"noopener noreferrer"},ze=e("p",null,"根据本地时间格式，把 Date 对象转换为字符串。",-1),Ge={href:"https://www.runoob.com/jsref/jsref-tostring-date.html",target:"_blank",rel:"noopener noreferrer"},qe=e("p",null,"把 Date 对象转换为字符串。",-1),Ae={href:"https://www.runoob.com/jsref/jsref-totimestring.html",target:"_blank",rel:"noopener noreferrer"},Ke=e("p",null,"把 Date 对象的时间部分转换为字符串。",-1),Pe={href:"https://www.runoob.com/jsref/jsref-toutcstring.html",target:"_blank",rel:"noopener noreferrer"},Qe=e("p",null,"根据世界时，把 Date 对象转换为字符串。",-1),Re=e("p",null,"实例：",-1),We=e("p",null,"var today = new Date(); var UTCstring = today.toUTCString();",-1),Xe={href:"https://www.runoob.com/jsref/jsref-utc.html",target:"_blank",rel:"noopener noreferrer"},Ze=e("p",null,"根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。",-1),$e={href:"https://www.runoob.com/jsref/jsref-valueof-date.html",target:"_blank",rel:"noopener noreferrer"},et=e("p",null,"返回 Date 对象的原始值。",-1);function tt(rt,ot){const t=s("ExternalLinkIcon");return l(),a("div",null,[c,e("p",null,[e("a",p,[r("getDate()"),o(t)])]),u,e("p",null,[e("a",i,[r("getDay()"),o(t)])]),f,e("p",null,[e("a",d,[r("getFullYear()"),o(t)])]),w,e("p",null,[e("a",m,[r("getHours()"),o(t)])]),g,e("p",null,[e("a",b,[r("getMilliseconds()"),o(t)])]),j,e("p",null,[e("a",D,[r("getMinutes()"),o(t)])]),k,e("p",null,[e("a",T,[r("getMonth()"),o(t)])]),S,e("p",null,[e("a",U,[r("getSeconds()"),o(t)])]),C,e("p",null,[e("a",v,[r("getTime()"),o(t)])]),x,e("p",null,[e("a",y,[r("getTimezoneOffset()"),o(t)])]),M,e("p",null,[e("a",Y,[r("getUTCDate()"),o(t)])]),F,e("p",null,[e("a",N,[r("getUTCDay()"),o(t)])]),O,e("p",null,[e("a",L,[r("getUTCFullYear()"),o(t)])]),H,e("p",null,[e("a",I,[r("getUTCHours()"),o(t)])]),J,e("p",null,[e("a",V,[r("getUTCMilliseconds()"),o(t)])]),B,e("p",null,[e("a",E,[r("getUTCMinutes()"),o(t)])]),z,e("p",null,[e("a",G,[r("getUTCMonth()"),o(t)])]),q,e("p",null,[e("a",A,[r("getUTCSeconds()"),o(t)])]),K,P,Q,e("p",null,[e("a",R,[r("parse()"),o(t)])]),W,e("p",null,[e("a",X,[r("setDate()"),o(t)])]),Z,e("p",null,[e("a",$,[r("setFullYear()"),o(t)])]),ee,e("p",null,[e("a",te,[r("setHours()"),o(t)])]),re,e("p",null,[e("a",oe,[r("setMilliseconds()"),o(t)])]),ne,e("p",null,[e("a",se,[r("setMinutes()"),o(t)])]),le,e("p",null,[e("a",ae,[r("setMonth()"),o(t)])]),_e,e("p",null,[e("a",he,[r("setSeconds()"),o(t)])]),ce,e("p",null,[e("a",pe,[r("setTime()"),o(t)])]),ue,e("p",null,[e("a",ie,[r("setUTCDate()"),o(t)])]),fe,e("p",null,[e("a",de,[r("setUTCFullYear()"),o(t)])]),we,e("p",null,[e("a",me,[r("setUTCHours()"),o(t)])]),ge,e("p",null,[e("a",be,[r("setUTCMilliseconds()"),o(t)])]),je,e("p",null,[e("a",De,[r("setUTCMinutes()"),o(t)])]),ke,e("p",null,[e("a",Te,[r("setUTCMonth()"),o(t)])]),Se,e("p",null,[e("a",Ue,[r("setUTCSeconds()"),o(t)])]),Ce,ve,xe,e("p",null,[e("a",ye,[r("toDateString()"),o(t)])]),Me,Ye,Fe,e("p",null,[e("a",Ne,[r("toISOString()"),o(t)])]),Oe,e("p",null,[e("a",Le,[r("toJSON()"),o(t)])]),He,e("p",null,[e("a",Ie,[r("toLocaleDateString()"),o(t)])]),Je,e("p",null,[e("a",Ve,[r("toLocaleTimeString()"),o(t)])]),Be,e("p",null,[e("a",Ee,[r("toLocaleString()"),o(t)])]),ze,e("p",null,[e("a",Ge,[r("toString()"),o(t)])]),qe,e("p",null,[e("a",Ae,[r("toTimeString()"),o(t)])]),Ke,e("p",null,[e("a",Pe,[r("toUTCString()"),o(t)])]),Qe,Re,We,e("p",null,[e("a",Xe,[r("UTC()"),o(t)])]),Ze,e("p",null,[e("a",$e,[r("valueOf()"),o(t)])]),et])}const lt=n(h,[["render",tt],["__file","JS内置时间对象.html.vue"]]);export{lt as default};

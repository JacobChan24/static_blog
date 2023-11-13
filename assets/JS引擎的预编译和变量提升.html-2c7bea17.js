import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as s}from"./app-9e438faa.js";const i={},c=s(`<p>JS在预编译时会预处理声明的变量，但是变量的赋值操作发生在JS的执行期</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document.write(str); //显示undefined
str = http://c.biancheng.net/js/;
document.write(str); //显示 http://c.biancheng.net/js/
var str;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS引擎的解析方式：先解析代码，获取所有被声明的变量，然后一行一行地运行</p>`,3),r=[c];function a(d,_){return t(),n("div",null,r)}const m=e(i,[["render",a],["__file","JS引擎的预编译和变量提升.html.vue"]]);export{m as default};

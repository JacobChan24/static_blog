import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as i}from"./app-9e438faa.js";const l={},d=i(`<h4 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h4><ul><li>规定元素在当前viewport的位置</li><li>position: fixed还需要与其他四个属性配合使用：top,right,bottom和left，即规定元素与浏览器视口边缘的距离。如果这四个属性都定义了，那么元素的宽高也将被隐性地定义，一般不设置全，而是只设置左右的位置/设定宽度，设置top值，然后用height定义高度或者不设置，让内容决定元素高度（见[[文档流]]）</li><li>固定元素已经从文档流中移除了，所以不会影响其他元素的布局</li></ul><h4 id="_2-应用" tabindex="-1"><a class="header-anchor" href="#_2-应用" aria-hidden="true">#</a> 2. 应用</h4><ul><li>模态框：在网页的任意位置弹出，且在固定位置弹出，挡住所有网页内容，直到关闭该弹窗![[Pasted image 20220524153146.png]] 实现代码：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;header class=&quot;top-banner&quot;&gt;  
	&lt;div class=&quot;top-banner-inner&quot;&gt;  
		&lt;p&gt;Find out what&#39;s going on at Wombat Coffee each  
		month. Sign up for our newsletter:  
			&lt;button id=&quot;open&quot;&gt;Sign up&lt;/button&gt;  
		&lt;/p&gt;  
	&lt;/div&gt;  
&lt;/header&gt;  
&lt;div class=&quot;modal&quot; id=&quot;modal&quot;&gt;  
	&lt;div class=&quot;modal-backdrop&quot;&gt;&lt;/div&gt;  #模态框背后的蒙层
	&lt;div class=&quot;modal-body&quot;&gt;  
		&lt;button class=&quot;modal-close&quot; id=&quot;close&quot;&gt;close&lt;/button&gt;  
		&lt;h2&gt;Wombat Newsletter&lt;/h2&gt;  
		&lt;p&gt;Sign up for our monthly newsletter. No spam.  
		We promise!
		&lt;/p&gt;  
		&lt;form&gt;  
			&lt;p&gt;  
			&lt;label for=&quot;email&quot;&gt;Email address:&lt;/label&gt;  
			&lt;input type=&quot;text&quot; name=&quot;email&quot;/&gt;  
			&lt;/p&gt;  
			&lt;p&gt;&lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;&lt;/p&gt;  
		&lt;/form&gt;  
	&lt;/div&gt;  
&lt;/div&gt;  
  
&lt;script type=&quot;text/javascript&quot;&gt;  
var button = document.getElementById(&#39;open&#39;);  
var close = document.getElementById(&#39;close&#39;);  
var modal = document.getElementById(&#39;modal&#39;);  
  
  
button.addEventListener(&#39;click&#39;, function (event) {  
event.preventDefault();  
modal.style.display = &#39;block&#39;;  
});  
  
  
close.addEventListener(&#39;click&#39;, function (event) {  
event.preventDefault();  
modal.style.display = &#39;none&#39;;  
});  
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[d];function a(v,o){return e(),n("div",null,s)}const c=t(l,[["render",a],["__file","固定定位.html.vue"]]);export{c as default};

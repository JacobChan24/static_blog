import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,f as l}from"./app-9e438faa.js";const d={},s=l(`<p>使用[[绝对定位]]与[[相对定位]]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;container&quot;&gt;  
	&lt;nav&gt;  
		&lt;div class=&quot;dropdown&quot;&gt;  
			&lt;div class=&quot;dropdown-label&quot;&gt;Main Menu&lt;/div&gt;  
			&lt;div class=&quot;dropdown-menu&quot;&gt;  
				&lt;ul class=&quot;submenu&quot;&gt;  
					&lt;li&gt;&lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;  
					&lt;li&gt;&lt;a href=&quot;/coffees&quot;&gt;Coffees&lt;/a&gt;&lt;/li&gt;  
					&lt;li&gt;&lt;a href=&quot;/brewers&quot;&gt;Brewers&lt;/a&gt;&lt;/li&gt;  
					&lt;li&gt;&lt;a href=&quot;/specials&quot;&gt;Specials&lt;/a&gt;&lt;/li&gt;  
					&lt;li&gt;&lt;a href=&quot;/about&quot;&gt;About us&lt;/a&gt;&lt;/li&gt;  
				&lt;/ul&gt;  
			&lt;/div&gt;  
		&lt;/div&gt;  
	&lt;/nav&gt;  
	&lt;h1&gt;Wombat Coffee Roasters&lt;/h1&gt;  
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {  
width: 80%;  
max-width: 1000px;  
margin: 1em auto  
}  
  
  
.dropdown {  
display: inline-block;  
position: relative;  
}  
  
.dropdown-label {  
padding: .5em 1.5em;  
border: 1px solid #ccc;  
background-color: #eee;  
}
.dropdown-menu {  
display: none;  
position: absolute;  
left: 0;  
top: 2.1em;  
min-width: 100%;  
background-color: #eee;  
}  
  
.dropdown:hover .dropdown-menu {  
display: block;  
}  
  
  
  
.submenu {  
padding-left: 0;  
margin: 0;  
list-style-type: none;  
border: 1px solid #999;  
}  
  
  
.submenu &gt; li + li {  
border-top: 1px solid #999;  
}  
  
  
.submenu &gt; li &gt; a {  
display: block;  
padding: .5em 1.5em;  
background-color: #eee;  
color: #369;  
text-decoration: none;  
}  
  
.submenu &gt; li &gt; a:hover {  
background-color: #fff;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>下拉箭头的实现 使用标签的::after伪元素来画三角形，然后使用绝对定位将它放在标签的右边 ![[Pasted image 20220524165930.png]]</li></ul>`,4),t=[s];function v(a,r){return n(),e("div",null,t)}const m=i(d,[["render",v],["__file","下拉菜单的实现.html.vue"]]);export{m as default};

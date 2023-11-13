import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as n}from"./app-9e438faa.js";const t={},d=n(`<h3 id="_1-块级元素-block" tabindex="-1"><a class="header-anchor" href="#_1-块级元素-block" aria-hidden="true">#</a> 1.块级元素 block</h3><ul><li><p>是否独占独占一行高度？是否可做容器？ 独占一行高度，可做容器</p></li><li><p>高度、宽度、外边距和内边距，即大小设置方法？ 都可以控制</p></li></ul><h4 id="默认宽度和高度" tabindex="-1"><a class="header-anchor" href="#默认宽度和高度" aria-hidden="true">#</a> 默认宽度和高度</h4><p>如果不设置，默认为父元素宽度的100%， 默认高度为内容高度，没有内容则不显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;address&gt; // 定义地址 
&lt;caption&gt; // 定义表格标题 
&lt;dd&gt; // 定义列表中定义条目 
&lt;div&gt; // 定义文档中的分区或节 
&lt;dl&gt; // 定义列表 
&lt;dt&gt; // 定义列表中的项目 
&lt;fieldset&gt; // 定义一个框架集 
&lt;form&gt; // 创建 HTML 表单 
&lt;h1&gt; // 定义最大的标题 &lt;h2&gt; // 定义副标题 &lt;h3&gt; // 定义标题 &lt;h4&gt; // 定义标题 &lt;h5&gt; // 定义标题 &lt;h6&gt; // 定义最小的标题 
&lt;hr&gt; // 创建一条水平线 
&lt;legend&gt; // 元素为 fieldset 元素定义标题 
&lt;li&gt; // 标签定义列表项目 
&lt;noframes&gt; // 为那些不支持框架的浏览器显示文本，于 frameset 元素内部 
&lt;noscript&gt; // 定义在脚本未被执行时的替代内容 
&lt;ol&gt; // 定义有序列表 
&lt;ul&gt; // 定义无序列表 
&lt;p&gt; // 标签定义段落 
&lt;pre&gt; // 定义预格式化的文本 
&lt;table&gt; // 标签定义 HTML 表格 
&lt;tbody&gt; // 标签表格主体（正文） 
&lt;td&gt; // 表格中的标准单元格 
&lt;tfoot&gt; // 定义表格的页脚（脚注或表注）
&lt;th&gt; // 定义表头单元格 
&lt;thead&gt; // 标签定义表格的表头 
&lt;tr&gt; // 定义表格中的行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-行内元素-inline" tabindex="-1"><a class="header-anchor" href="#_2-行内元素-inline" aria-hidden="true">#</a> 2.行内元素 inline</h3><h4 id="是否独占独占一行高度-是否可做容器" tabindex="-1"><a class="header-anchor" href="#是否独占独占一行高度-是否可做容器" aria-hidden="true">#</a> 是否独占独占一行高度？是否可做容器？</h4><ul><li>不独占一行，与其他元素挤在一行，一行排不下时自动换行；</li><li>一般情况下，行内元素只能包含内容或者其他行内元素，不可放块级元素可以将其理解为仅仅是<strong>内容的容器</strong></li></ul><h4 id="高度、宽度、外边距和内边距-即大小设置方法" tabindex="-1"><a class="header-anchor" href="#高度、宽度、外边距和内边距-即大小设置方法" aria-hidden="true">#</a> 高度、宽度、外边距和内边距，即大小设置方法？</h4><ul><li>不可设置高宽，内容决定高宽</li><li>对于margin的设置仅仅<strong>左右方向有效，上下无效</strong></li><li>padding的上下左右的设置都有效</li><li>设置行高有效(line-height)，等同于给父级元素设置行高</li></ul><h4 id="默认宽度和高度-1" tabindex="-1"><a class="header-anchor" href="#默认宽度和高度-1" aria-hidden="true">#</a> 默认宽度和高度</h4><p>随内容而定，就是包含的文字或者图片的宽高</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;a&gt; // 标签可定义锚 
&lt;abbr&gt; // 表示一个缩写形式 
&lt;acronym&gt; // 定义只取首字母缩写 
&lt;b&gt; // 字体加粗 
&lt;bdo&gt; // 可覆盖默认的文本方向 
&lt;big&gt; // 大号字体加粗 
&lt;br&gt; // 换行 
&lt;cite&gt; // 引用进行定义 
&lt;code&gt; // 定义计算机代码文本 
&lt;dfn&gt; // 定义一个定义项目 
&lt;em&gt; // 定义为强调的内容 
&lt;i&gt; // 斜体文本效果 
&lt;kbd&gt; // 定义键盘文本 
&lt;label&gt; // 标签为 input 元素定义标注（标记） 
&lt;q&gt; // 定义短的引用 
&lt;samp&gt; // 定义样本文本 
&lt;select&gt; // 创建单选或多选菜单 
&lt;small&gt; // 呈现小号字体效果 
&lt;span&gt; // 组合文档中的行内元素 
&lt;strong&gt; // 加粗 
&lt;sub&gt; // 定义下标文本 
&lt;sup&gt; // 定义上标文本 
&lt;textarea&gt; // 多行的文本输入控件 
&lt;tt&gt; // 打字机或者等宽的文本效果 &lt;var&gt; // 定义变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-行内块元素-inline-block" tabindex="-1"><a class="header-anchor" href="#_3-行内块元素-inline-block" aria-hidden="true">#</a> 3.行内块元素 inline-block</h3><p>具有行内元素和块级元素的特点，不独占一行，且可以自由设置高宽</p><h4 id="是否独占独占一行高度-是否可做容器-1" tabindex="-1"><a class="header-anchor" href="#是否独占独占一行高度-是否可做容器-1" aria-hidden="true">#</a> 是否独占独占一行高度？是否可做容器？</h4><p>否，一般不用做容器</p><h4 id="高度、宽度、外边距和内边距-即大小设置方法-1" tabindex="-1"><a class="header-anchor" href="#高度、宽度、外边距和内边距-即大小设置方法-1" aria-hidden="true">#</a> 高度、宽度、外边距和内边距，即大小设置方法？</h4><p>高宽和内外边距都可以控制</p><h4 id="默认宽高" tabindex="-1"><a class="header-anchor" href="#默认宽高" aria-hidden="true">#</a> 默认宽高</h4><p>默认宽度就是本身内容的宽度，类似于行内元素，行内块元素之间会有空白间隙，设置上一级的font-size为0会消除间隙，但是这样设置就不能图文一起放了，最好的方式就是浮动布局或者用定位的方式来做了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;button&gt; 
&lt;input&gt; 
&lt;textarea&gt; 
&lt;select&gt; 
&lt;img&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),a=[d];function s(r,v){return e(),l("div",null,a)}const b=i(t,[["render",s],["__file","块级元素(block)、行内元素(inline)和行内块元素(inline-block).html.vue"]]);export{b as default};

import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as t}from"./app-9e438faa.js";const a={},s=t(`<h3 id="网页收藏图标" tabindex="-1"><a class="header-anchor" href="#网页收藏图标" aria-hidden="true">#</a> 网页收藏图标</h3><p>使用link标签，href属性是本地文件的路径 <code>&lt;link rel=&quot;shortcut icon&quot; href=&quot;favicon.ico&quot; type=&quot;image/x-icon&quot;&gt;</code></p><h3 id="网页内容中的小图标" tabindex="-1"><a class="header-anchor" href="#网页内容中的小图标" aria-hidden="true">#</a> 网页内容中的小图标</h3><h5 id="unicode的引用方法" tabindex="-1"><a class="header-anchor" href="#unicode的引用方法" aria-hidden="true">#</a> unicode的引用方法</h5><p>这是最原始的引用方法，一般分为下面三个步骤：</p><ul><li>预备工作 <ul><li>在网站比如iconfont，选好相应的图标，将图标文件下载下来</li></ul></li><li>①拷贝文件里面的<code>@font-face</code>代码，url将本地路径加入，后面的文件名不变</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@font-face {
  font-family: &quot;iconfont logo&quot;;
  src: url(&#39;https://at.alicdn.com/t/font_985780_km7mi63cihi.eot?t=1545807318834&#39;);
  src: url(&#39;https://at.alicdn.com/t/font_985780_km7mi63cihi.eot?t=1545807318834#iefix&#39;) format(&#39;embedded-opentype&#39;),
    url(&#39;https://at.alicdn.com/t/font_985780_km7mi63cihi.woff?t=1545807318834&#39;) format(&#39;woff&#39;),
    url(&#39;https://at.alicdn.com/t/font_985780_km7mi63cihi.ttf?t=1545807318834&#39;) format(&#39;truetype&#39;),
    url(&#39;https://at.alicdn.com/t/font_985780_km7mi63cihi.svg?t=1545807318834#iconfont&#39;) format(&#39;svg&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②定义使用的iconfont的样式,如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.iconfont {
  font-family: &quot;iconfont&quot; !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式是先在公用css文件里面定义好这个类的样式， ③具体使用图标 然后在html标签class属性中添加这个属性： <code>&lt;span class=&#39;iconfont&#39;&gt;字体代码&lt;/span&gt;</code></p><p>或者在单个图标元素的样式代码中添加这段代码，这样写的坏处在于每个图标元素的样式都要复制这段代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.arrow_down {
  font-family: &quot;iconfont&quot; !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以根据这段代码更改图标的大小，对应的属性为：<code>font-size</code></p><p>一般与伪元素选择器一起搭配使用，如果在文字之前想添加图标，则可以这样： 这种方式的缺点在于每次的css代码都要重新写，目前发现只要写font-family属性即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.text ::before {
  content: &quot;xxx&quot; //这里是图标代码
  font-family:
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在文字后面添加图标：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.text::after {
  content: &quot;字体代码&quot;
  font-family: &quot;iconfont&quot; !important
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样写的坏处还是一样，每一个定义图标的地方都要手写css代码</p><p><strong>最佳实践</strong> 使用一个span标签，内容是图标代码，class属性中添加iconfont即可</p>`,19),o=[s];function d(l,c){return n(),i("div",null,o)}const m=e(a,[["render",d],["__file","网页图标的添加.html.vue"]]);export{m as default};

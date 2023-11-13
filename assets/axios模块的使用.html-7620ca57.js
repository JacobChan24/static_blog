import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-9e438faa.js";const p={},e=t(`<h1 id="_1-什么是axios" tabindex="-1"><a class="header-anchor" href="#_1-什么是axios" aria-hidden="true">#</a> 1.什么是axios</h1><p><code>Axios</code> 是一个基于 <code>promise</code> 的 <code>HTTP</code> 库，可以用在浏览器和 <code>node.js</code> 中。</p><p>主要的作用：<code>axios</code>主要是用于向后台发起请求的，还有在请求中做更多是可控功能。</p><p>axios有8个特性</p><ul><li><p>从浏览器中创建 XMLHttpRequests</p></li><li><p>从 \`node.js 创建 http 请求</p></li><li><p>支持 <code>Promise API</code></p></li><li><p>拦截请求和响应</p></li><li><p>转换请求数据和响应数据</p></li><li><p>取消请求</p></li><li><p>自动转换 <code>JSON</code> 数据</p></li><li><p>客户端支持防御 <code>XSRF</code></p></li></ul><h1 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2.安装</h1><p>安装十分简单，使用 <code>npm</code>:</p><p><code>npm install axios</code></p><h1 id="_3-案例" tabindex="-1"><a class="header-anchor" href="#_3-案例" aria-hidden="true">#</a> 3.案例</h1><p>执行 <code>GET</code> 请求</p><p>JavaScript</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios  
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;请求地址&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  
    <span class="token comment">// 拼接参数写在params中  </span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token comment">// 成功后做的事情  </span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token comment">// 失败后做的事情  </span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>POST</code>请求</p><p>JavaScript</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios  
  <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;请求地址&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;jkc&quot;</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行并发请求，当我们想要同时发出2个请求，可以使用<code>axios.all()</code></p><p>JavaScript</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/user/12345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/user/12345/permissions&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
  
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码我们先定义了2个方法，每个方法都会发送一个请求，最后把2个方法都放在数组中，这样程序就会同时执行2个方法，且最后的结果是在数组中，结果如下：<br><img src="https://mmbiz.qpic.cn/mmbiz_png/Wl38ezZ1ulibgqCh7hvA0IibUSjSsrbdw6b2fpXTiaqsnX0Qehue1QLYj2YFEIFbv8HqjTeBiaMibBxH2zBicrgFibP6A/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"><br> 上面返回的结果是在数组中，到时候取结果的时候就要用<code>res[0]</code>，如果你觉得这样麻烦，如果我们想展开的话，可以使用<code>axios.spread</code>方法</p><p>JavaScript</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>  
  axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res1<span class="token punctuation">,</span> res2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span>  
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，我们返回的结果就不是一个数组了，会分开来，结果如下：<br><img src="https://mmbiz.qpic.cn/mmbiz_png/Wl38ezZ1ulibgqCh7hvA0IibUSjSsrbdw6rcLKicZYKhCdxWZwpVFc0fFXL1rZA7fpianhW02NznRwFaFnu5nyvJbQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" loading="lazy"></p><h1 id="axios请求配置" tabindex="-1"><a class="header-anchor" href="#axios请求配置" aria-hidden="true">#</a> axios请求配置</h1><p>以下是创建请求时可以用的配置选项。只有 <code>url</code> 是必需的。如果没有指定 <code>method</code>，请求将默认使用 <code>get</code> 方法。</p><p>Java</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>  
  <span class="token comment">// \`url\` 是用于请求的服务器 URL  </span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`method\` 是创建请求时使用的方法  </span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
  
  <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。  </span>
  <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL  </span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`headers\` 是即将被发送的自定义请求头  </span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`params\` 是即将与请求一起发送的 URL 参数  </span>
  <span class="token comment">// 必须是一个无格式对象(plain object)或 URLSearchParams 对象  </span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`data\` 是作为请求主体被发送的数据  </span>
  <span class="token comment">// 只适用于这些请求方法 &#39;PUT&#39;, &#39;POST&#39;, 和 &#39;PATCH&#39;  </span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`timeout\` 指定请求超时的毫秒数(0 表示无超时时间)  </span>
  <span class="token comment">// 如果请求话费了超过 \`timeout\` 的时间，请求将被中断  </span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`auth\` 表示应该使用 HTTP 基础验证，并提供凭据  </span>
  <span class="token comment">// 这将设置一个 \`Authorization\` 头，覆写掉现有的任意使用 \`headers\` 设置的自定义 \`Authorization\`头  </span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="响应结构" tabindex="-1"><a class="header-anchor" href="#响应结构" aria-hidden="true">#</a> 响应结构</h1><p>发送网络请求成功后，返回的响应结构如下：</p><p>Java</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>  
  <span class="token comment">// \`data\` 由服务器提供的响应  </span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`status\` 来自服务器响应的 HTTP 状态码  </span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>  
  
    <span class="token comment">// \`statusText\` 来自服务器响应的 HTTP 状态信息  </span>
    <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`headers\` 服务器响应的头  </span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
  
  <span class="token comment">// \`config\` 是为请求提供的配置信息  </span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token comment">// &#39;request&#39;  </span>
  <span class="token comment">// \`request\` is the request that generated this response  </span>
  <span class="token comment">// It is the last ClientRequest instance in node.js (in redirects)  </span>
  <span class="token comment">// and an XMLHttpRequest instance the browser  </span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="配置默认值" tabindex="-1"><a class="header-anchor" href="#配置默认值" aria-hidden="true">#</a> 配置默认值</h1><p>配置网络请求时，你可以指定将被用在各个请求的配置默认值</p><h2 id="全局的-axios-默认值" tabindex="-1"><a class="header-anchor" href="#全局的-axios-默认值" aria-hidden="true">#</a> 全局的 axios 默认值</h2><p>Java</p><p>axios.defaults.baseURL = &#39;https://api.example.com&#39;; // 配置默认的baseURL<br> axios.defaults.headers.common[&#39;Authorization&#39;] = AUTH_TOKEN; // 配置默认请求头中的Authorization<br> axios.defaults.headers.post[&#39;Content-Type&#39;] = &#39;application/x-www-form-urlencoded&#39;; // 配置默认的post请求方式</p><h2 id="自定义实例默认值" tabindex="-1"><a class="header-anchor" href="#自定义实例默认值" aria-hidden="true">#</a> 自定义实例默认值</h2><p>Java</p><p>// 创建实例时配置默认值<br> const instance = axios.create({<br> baseURL: &#39;https://api.example.com&#39;<br> });</p><p>// 创建实例后更改默认值<br> instance.defaults.headers.common[&#39;Authorization&#39;] = AUTH_TOKEN;</p><h1 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h1><p>在请求或响应被 <code>then</code> 或 <code>catch</code> 处理前拦截它们。</p><p>JavaScript</p><p>// 2.1.请求拦截器<br> instance.interceptors.request.use(<br> (config) =&gt; {<br> console.log(config);<br> // 1.比如config中的一些信息不符合服务器的要求<br> // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标<br> // 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息<br> return config;<br> },<br> (error) =&gt; {<br> console.log(error);<br> }<br> );</p><p>// 2.2.响应拦截<br> instance.interceptors.response.use(<br> (res) =&gt; {<br> return res.data;<br> },<br> (error) =&gt; {<br> console.log(error);<br> }<br> );</p><h1 id="项目中axios完整的封装" tabindex="-1"><a class="header-anchor" href="#项目中axios完整的封装" aria-hidden="true">#</a> 项目中axios完整的封装</h1><p>在真实项目开发中，我们会在<code>src</code>文件夹中创建一个<code>utils</code>文件夹，然后在文件夹中创建一个<code>request.js</code>文件，写入如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>  
  
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token comment">// 1.创建axios的实例  </span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&quot;http://xxx.xxx.xx.xx:8000&quot;</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token comment">// 2.1.请求拦截器  </span>
  instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>  
    <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token comment">// 1.比如config中的一些信息不符合服务器的要求  </span>
      <span class="token comment">// 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标  </span>
      <span class="token comment">// 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息  </span>
      <span class="token keyword">return</span> config<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  <span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token comment">// 2.2.响应拦截  </span>
  instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>  
    <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
      <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  <span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token comment">// 3.发送真正的网络请求  </span>
  <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>

最后我们在<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">main.js</span><span class="token template-punctuation string">\`</span></span>中给网络请求配置下全局属性即可

Python

<span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/request&quot;</span><span class="token punctuation">;</span>  
  
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$request <span class="token operator">=</span> request<span class="token punctuation">;</span>

这样以后，我们在任何目录下，都可以直接使用<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">request</span><span class="token template-punctuation string">\`</span></span>网络请求，不需要每次都导入了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","axios模块的使用.html.vue"]]);export{d as default};

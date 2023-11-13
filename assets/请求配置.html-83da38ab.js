import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as s,d as e,f as t}from"./app-9e438faa.js";const c={},r=t(`<h2 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置" aria-hidden="true">#</a> 请求配置</h2><p>这些是创建请求时可以用的配置选项。只有 <code>url</code> 是必需的。如果没有指定 <code>method</code>，请求将默认使用 <code>get</code> 方法。</p><p>{</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// \`url\` 是用于请求的服务器 URL  </span>
 <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`method\` 是创建请求时使用的方法  </span>
 <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
 <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。  </span>
 <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL  </span>
 <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`transformRequest\` 允许在向服务器发送前，修改请求数据  </span>
 <span class="token comment">// 只能用在 &#39;PUT&#39;, &#39;POST&#39; 和 &#39;PATCH&#39; 这几个请求方法  </span>
 <span class="token comment">// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream  </span>
 <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token comment">// 对 data 进行任意转换处理  </span>
   <span class="token keyword">return</span> data<span class="token punctuation">;</span>  
 <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`transformResponse\` 在传递给 then/catch 前，允许修改响应数据  </span>
 <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token comment">// 对 data 进行任意转换处理  </span>
   <span class="token keyword">return</span> data<span class="token punctuation">;</span>  
 <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`headers\` 是即将被发送的自定义请求头  </span>
 <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`params\` 是即将与请求一起发送的 URL 参数  </span>
 <span class="token comment">// 必须是一个无格式对象(plain object)或 URLSearchParams 对象  </span>
 <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
   <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>  
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
  <span class="token comment">// \`paramsSerializer\` 是一个负责 \`params\` 序列化的函数  </span>
 <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)  </span>
 <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`data\` 是作为请求主体被发送的数据  </span>
 <span class="token comment">// 只适用于这些请求方法 &#39;PUT&#39;, &#39;POST&#39;, 和 &#39;PATCH&#39;  </span>
 <span class="token comment">// 在没有设置 \`transformRequest\` 时，必须是以下类型之一：  </span>
 <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams  </span>
 <span class="token comment">// - 浏览器专属：FormData, File, Blob  </span>
 <span class="token comment">// - Node 专属： Stream  </span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
   <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>  
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`timeout\` 指定请求超时的毫秒数(0 表示无超时时间)  </span>
 <span class="token comment">// 如果请求话费了超过 \`timeout\` 的时间，请求将被中断  </span>
 <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>  
 
  <span class="token comment">// \`withCredentials\` 表示跨域请求时是否需要使用凭证  </span>
 <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
 <span class="token comment">// \`adapter\` 允许自定义处理请求，以使测试更轻松  </span>
 <span class="token comment">// 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).  </span>
 <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token comment">/* ... */</span>  
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
<span class="token comment">// \`auth\` 表示应该使用 HTTP 基础验证，并提供凭据  </span>
 <span class="token comment">// 这将设置一个 \`Authorization\` 头，覆写掉现有的任意使用 \`headers\` 设置的自定义 \`Authorization\`头  </span>
 <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
   <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>  
   <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>  
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
  <span class="token comment">// \`responseType\` 表示服务器响应的数据类型，可以是 &#39;arraybuffer&#39;, &#39;blob&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;  </span>
 <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
 <span class="token comment">// \`responseEncoding\` indicates encoding to use for decoding responses  </span>
 <span class="token comment">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests  </span>
 <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
  <span class="token comment">// \`xsrfCookieName\` 是用作 xsrf token 的值的cookie的名称  </span>
 <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
 <span class="token comment">// \`xsrfHeaderName\` is the name of the http header that carries the xsrf token value  </span>
 <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
  <span class="token comment">// \`onUploadProgress\` 允许为上传处理进度事件  </span>
 <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token comment">// Do whatever you want with the native progress event  </span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`onDownloadProgress\` 允许为下载处理进度事件  </span>
 <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token comment">// 对原生进度事件的处理  </span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
  <span class="token comment">// \`maxContentLength\` 定义允许的响应内容的最大尺寸  </span>
 <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`validateStatus\` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，promise 将被 resolve; 否则，promise 将被 rejecte  </span>
 <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
   <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// default  </span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`maxRedirects\` 定义在 node.js 中 follow 的最大重定向数目  </span>
 <span class="token comment">// 如果设置为0，将不会 follow 任何重定向  </span>
 <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
 <span class="token comment">// \`socketPath\` defines a UNIX Socket to be used in node.js.  </span>
 <span class="token comment">// e.g. &#39;/var/run/docker.sock&#39; to send requests to the docker daemon.  </span>
 <span class="token comment">// Only either \`socketPath\` or \`proxy\` can be specified.  </span>
 <span class="token comment">// If both are specified, \`socketPath\` is used.  </span>
 <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default  </span>
 
 <span class="token comment">// \`httpAgent\` 和 \`httpsAgent\` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：  </span>
 <span class="token comment">// \`keepAlive\` 默认没有启用  </span>
 <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
 <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// &#39;proxy&#39; 定义代理服务器的主机名称和端口  </span>
 <span class="token comment">// \`auth\` 表示 HTTP 基础验证应当用于连接代理，并提供凭据  </span>
 <span class="token comment">// 这将会设置一个 \`Proxy-Authorization\` 头，覆写掉已有的通过使用 \`header\` 设置的自定义 \`Proxy-Authorization\` 头。  </span>
 <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
   <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>  
   <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>  
   <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
     <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;mikeymike&#39;</span><span class="token punctuation">,</span>  
     <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;rapunz3l&#39;</span>  
   <span class="token punctuation">}</span>  
 <span class="token punctuation">}</span><span class="token punctuation">,</span>  
 
 <span class="token comment">// \`cancelToken\` 指定用于取消请求的 cancel token  </span>
 <span class="token comment">// （查看后面的 Cancellation 这节了解更多）  </span>
 <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
 <span class="token punctuation">}</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>}</p>`,5),d={id:"响应结构",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#响应结构","aria-hidden":"true"},"#",-1),m={href:"http://axios-js.com/zh-cn/docs/#%E5%93%8D%E5%BA%94%E7%BB%93%E6%9E%84",title:"响应结构",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>某个请求的响应包含以下信息</p><p>{</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// \`data\` 由服务器提供的响应  
 data: {},  
 
 // \`status\` 来自服务器响应的 HTTP 状态码  
 status: 200,  
 
 // \`statusText\` 来自服务器响应的 HTTP 状态信息  
 statusText: &#39;OK&#39;,  
 
 // \`headers\` 服务器响应的头  
 headers: {},  
 
  // \`config\` 是为请求提供的配置信息  
 config: {},  
// &#39;request&#39;  
 // \`request\` is the request that generated this response  
 // It is the last ClientRequest instance in node.js (in redirects)  
 // and an XMLHttpRequest instance the browser  
 request: {}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>}</p><p>使用 <code>then</code> 时，你将接收下面这样的响应 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.get(&#39;/user/12345&#39;)  
  .then(function(response) {  
    console.log(response.data);  
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.headers);  
    console.log(response.config);  
  });  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=n("code",null,"catch",-1),b={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"then",-1),f=n("code",null,"error",-1),y={href:"https://www.kancloud.cn/yunye/axios/234845#handling-errors",target:"_blank",rel:"noopener noreferrer"},g={id:"配置默认值",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#配置默认值","aria-hidden":"true"},"#",-1),x={href:"http://axios-js.com/zh-cn/docs/#%E9%85%8D%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC",title:"配置默认值",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"你可以指定将被用在各个请求的配置默认值",-1),A={id:"全局的-axios-默认值",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#全局的-axios-默认值","aria-hidden":"true"},"#",-1),T={href:"http://axios-js.com/zh-cn/docs/#%E5%85%A8%E5%B1%80%E7%9A%84-axios-%E9%BB%98%E8%AE%A4%E5%80%BC",title:"全局的 axios 默认值",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.defaults.baseURL = &#39;https://api.example.com&#39;;  
axios.defaults.headers.common[&#39;Authorization&#39;] = AUTH_TOKEN;  
axios.defaults.headers.post[&#39;Content-Type&#39;] = &#39;application/x-www-form-urlencoded&#39;;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),R={id:"自定义实例默认值",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#自定义实例默认值","aria-hidden":"true"},"#",-1),P={href:"http://axios-js.com/zh-cn/docs/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%9E%E4%BE%8B%E9%BB%98%E8%AE%A4%E5%80%BC",title:"自定义实例默认值",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Set config defaults when creating the instance  
const instance = axios.create({  
  baseURL: &#39;https://api.example.com&#39;  
});  
  
// Alter defaults after instance has been created  
instance.defaults.headers.common[&#39;Authorization&#39;] = AUTH_TOKEN;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S={id:"配置的优先顺序",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#配置的优先顺序","aria-hidden":"true"},"#",-1),C={href:"http://axios-js.com/zh-cn/docs/#%E9%85%8D%E7%BD%AE%E7%9A%84%E4%BC%98%E5%85%88%E9%A1%BA%E5%BA%8F",title:"配置的优先顺序",target:"_blank",rel:"noopener noreferrer"},L=t(`<p>配置会以一个优先顺序进行合并。这个顺序是：在 <code>lib/defaults.js</code> 找到的库的默认值，然后是实例的 <code>defaults</code> 属性，最后是请求的 <code>config</code> 参数。后者将优先于前者。这里是一个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 使用由库提供的配置的默认值来创建实例  
// 此时超时配置的默认值是 \`0\`  
var instance = axios.create();  
  
// 覆写库的超时默认值  
// 现在，在超时前，所有请求都会等待 2.5 秒  
instance.defaults.timeout = 2500;  
  
// 为已知需要花费很长时间的请求覆写超时设置  
instance.get(&#39;/longRequest&#39;, {  
  timeout: 5000  
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function N(z,H){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,n("h2",d,[u,s(),n("a",m,[e(a)]),s("响应结构")]),v,n("p",null,[s("在使用 "),k,s(" 时，或传递 "),n("a",b,[s("rejection callback"),e(a)]),s(" 作为 "),h,s(" 的第二个参数时，响应可以通过 "),f,s(" 对象可被使用，正如在"),n("a",y,[s("错误处理"),e(a)]),s("这一节所讲。")]),n("h2",g,[_,s(),n("a",x,[e(a)]),s("配置默认值")]),E,n("h3",A,[w,s(),n("a",T,[e(a)]),s("全局的 axios 默认值")]),B,n("h3",R,[j,s(),n("a",P,[e(a)]),s("自定义实例默认值")]),U,n("h3",S,[q,s(),n("a",C,[e(a)]),s("配置的优先顺序")]),L])}const F=p(c,[["render",N],["__file","请求配置.html.vue"]]);export{F as default};

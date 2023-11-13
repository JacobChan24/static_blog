const t=JSON.parse('{"key":"v-99325ed2","path":"/Tech/Front-end/03_VUE/axios%E6%A8%A1%E5%9D%97/%E7%BD%91%E7%BB%9C%E6%8B%A6%E6%88%AA%E5%99%A8%20-%20interceptor.html","title":"","lang":"en-US","frontmatter":{"description":"在请求被then或者catch处理前拦截 请求拦截器 axios.interceptors.request.use( \\tconfig =&gt; { //在发送请求之前做什么 \\t\\tif (store.state.token) { //如果存在token，那么每个请求头的http header都加上token \\t\\t\\tconfig.headers.Authorization = token \\t\\t\\t} \\t\\t} \\tfunction(error) { \\t\\treturn Promise.reject(error) //对请求错误做些什么 \\t} )","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Tech/Front-end/03_VUE/axios%E6%A8%A1%E5%9D%97/%E7%BD%91%E7%BB%9C%E6%8B%A6%E6%88%AA%E5%99%A8%20-%20interceptor.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"在请求被then或者catch处理前拦截 请求拦截器 axios.interceptors.request.use( \\tconfig =&gt; { //在发送请求之前做什么 \\t\\tif (store.state.token) { //如果存在token，那么每个请求头的http header都加上token \\t\\t\\tconfig.headers.Authorization = token \\t\\t\\t} \\t\\t} \\tfunction(error) { \\t\\treturn Promise.reject(error) //对请求错误做些什么 \\t} )"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Jacob"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jacob\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.4,"words":121},"filePathRelative":"Tech/Front-end/03_VUE/axios模块/网络拦截器 - interceptor.md","excerpt":"<p>在请求被<code>then</code>或者<code>catch</code>处理前拦截</p>\\n<h5> 请求拦截器</h5>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>axios.interceptors.request.use(\\n\\tconfig =&gt; {         //在发送请求之前做什么\\n\\t\\tif (store.state.token) {   //如果存在token，那么每个请求头的http header都加上token\\n\\t\\t\\tconfig.headers.Authorization = token\\n\\t\\t\\t}\\n\\t\\t} \\n\\tfunction(error) {\\n\\t\\treturn Promise.reject(error) //对请求错误做些什么\\n\\t}\\n)\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

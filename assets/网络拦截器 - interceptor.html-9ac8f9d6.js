import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as t}from"./app-9e438faa.js";const s={},r=t(`<p>在请求被<code>then</code>或者<code>catch</code>处理前拦截</p><h5 id="请求拦截器" tabindex="-1"><a class="header-anchor" href="#请求拦截器" aria-hidden="true">#</a> 请求拦截器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.interceptors.request.use(
	config =&gt; {         //在发送请求之前做什么
		if (store.state.token) {   //如果存在token，那么每个请求头的http header都加上token
			config.headers.Authorization = token
			}
		} 
	function(error) {
		return Promise.reject(error) //对请求错误做些什么
	}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="响应拦截器" tabindex="-1"><a class="header-anchor" href="#响应拦截器" aria-hidden="true">#</a> 响应拦截器</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.interceptors.response.use(
	response =&gt; return response, //对响应数据做点什么
	error =&gt; {
		if (error.response.status = 401) {
		//清除缓存里面的token并登出，到登陆页面
			store.commit(logout方法)
			router.push(&#39;/home&#39;) 
		}
	}
	
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>见：[[响应结构]]</p>`,6),d=[r];function a(l,c){return n(),i("div",null,d)}const u=e(s,[["render",a],["__file","网络拦截器 - interceptor.html.vue"]]);export{u as default};

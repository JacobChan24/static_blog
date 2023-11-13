import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,f as i}from"./app-9e438faa.js";const d={},l=i(`<p>某个请求的响应包含以下信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{  
  // \`data\` 由服务器提供的响应  
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
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>then</code> 时，你将接收下面这样的响应 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>axios.get(&#39;/user/12345&#39;)  
  .then(function(response) {  
    console.log(response.data);  
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.headers);  
    console.log(response.config);  
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function t(r,c){return n(),s("div",null,a)}const o=e(d,[["render",t],["__file","响应结构.html.vue"]]);export{o as default};

import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as d}from"./app-9e438faa.js";const a={},s=d(`<h2 id="_1-云数据库" tabindex="-1"><a class="header-anchor" href="#_1-云数据库" aria-hidden="true">#</a> 1.云数据库</h2><p>云数据库在使用之前一定要进行初始化的操作 <code>const db = cloud.database();</code></p><h4 id="_1-1增加一条记录" tabindex="-1"><a class="header-anchor" href="#_1-1增加一条记录" aria-hidden="true">#</a> 1.1增加一条记录</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const db = cloud.database()
db.collection(&#39;table_name&#39;).add({
	data: {                //需要插入的字段内容需要包在data对象里面
		content: &quot;qwed&quot;,
		poster: &quot;Jacob&quot;
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2获取集合所有数据" tabindex="-1"><a class="header-anchor" href="#_1-2获取集合所有数据" aria-hidden="true">#</a> 1.2获取集合所有数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection(&quot;table_name&quot;).get()
//降序获取集合所有数据，order语句要写在get之前
db.collection(&quot;table_name&quot;)..orderBy(&quot;time&quot;,&quot;desc&quot;)get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3查询某条记录" tabindex="-1"><a class="header-anchor" href="#_1-3查询某条记录" aria-hidden="true">#</a> 1.3查询某条记录</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//where方法接受的是一个对象参数，各个条件之间的关系是与的关系
//最后调用get方法
db.collection(&quot;table_name&quot;).where({
	字段1：xxx
	字段2：xxx
})
.get({    //也可以用promise的方式调用
	success: res=&gt;console.log(res)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-云函数" tabindex="-1"><a class="header-anchor" href="#_2-云函数" aria-hidden="true">#</a> 2.云函数</h2><p>将数据库操作的所有逻辑写在云函数里面，将前端和后端分离，前端只需要管逻辑就可以了，云函数就相当于后端的接口，每次的返回里面，云函数都会默认返回<code>openid</code>和<code>appid</code></p><h4 id="云函数的调用方法" tabindex="-1"><a class="header-anchor" href="#云函数的调用方法" aria-hidden="true">#</a> 云函数的调用方法;</h4><p>云函数调用之前，一定要进行上传部署的操作，每次有任何的修改都需要重新上传部署， 在调用云函数页面js代码中要完成初始化： <code>wx. cloud. init()</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.cloud.callFunction({
  // 云函数名称
  name: &#39;add&#39;,
  // 传给云函数的参数
  data: {
    a: 1,
    b: 2,
  },
  success: function(res) {
    console.log(res.result.sum) // 3
  },
  fail: console.error
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用Promise的方式调用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.cloud.callFunction({
  // 云函数名称
  name: &#39;add&#39;,
  // 传给云函数的参数
  data: {
    a: 1,
    b: 2,
  },
})
.then(res =&gt; {
  console.log(res.result) // 3
})
.catch(console.error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="小程序前端向云函数传递参数" tabindex="-1"><a class="header-anchor" href="#小程序前端向云函数传递参数" aria-hidden="true">#</a> 小程序前端向云函数传递参数</h4><p>如下图：云函数的event参数就是用来接收参数的 云函数返回的数据就是我们return的数据 ![[Pasted image 20230304220518.png]]</p><p>而在我们小程序的前端页面上，我们通过data参数来传递参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.cloud.callFunction({
	name: &quot;getData()&quot;,  //云函数的名称
	data:{              //云函数的参数
		name: &quot;张三&quot;,
		age: 18
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>云函数端获取参数的方式： <code>event.name/event.age</code></p><h2 id="_3-云存储" tabindex="-1"><a class="header-anchor" href="#_3-云存储" aria-hidden="true">#</a> 3.云存储</h2><h4 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h4><h6 id="小程序函数-一次只能上传一张图片" tabindex="-1"><a class="header-anchor" href="#小程序函数-一次只能上传一张图片" aria-hidden="true">#</a> 小程序函数（一次只能上传一张图片）</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wx.cloud.uploadFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![[Pasted image 20230304234640.png]] 微信里面的上传图像其实分为两步：</p><ol><li>选择本地的文件上传并且获得本地文件的临时路径（将其封装为一个函数）</li><li>将文件上传到云存储中</li><li>上传成功再进行本地渲染的操作</li><li>上传的时候先showloading，在success回调中关闭loading，或者失败回调中toast提示失败原因等等</li></ol><p>一次性上传多张图片的解决方案，如果一次性从本地上传了多张图片的话，我们就通过循环遍历的方式，将每张图调用上传的接口给上传（<code>forEach</code>方法），这种方式需要注意，应该优化前端，只调取一次setData方式</p><h6 id="云函数" tabindex="-1"><a class="header-anchor" href="#云函数" aria-hidden="true">#</a> 云函数</h6>`,28),l=[s];function r(t,c){return i(),n("div",null,l)}const o=e(a,[["render",r],["__file","云开发.html.vue"]]);export{o as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as t}from"./app-9e438faa.js";const e={},c=t(`<ul><li><p>并发 单纯指计算机同时处理多项任务</p></li><li><p>并行 在不同的核心上同时处理任务</p></li></ul><hr><p>同步和异步是两种不同的编程模型</p><ul><li>同步 前一个任务执行完成之后才能够进行下一个任务，在同步中没有并发或者并行的概念</li><li>异步 两个任务可以同时进行</li></ul><ol><li>多线程编程</li><li>单线程异步编程（javascript）：js没有多线程的概念，但是我们可以通过函数回调的机制实现，比如fetch函数读取网络资源的时候，程序不会等待，而是会继续运行下去，当获取到网络资源之后，回调函数才会被执行</li></ol><p>多线程编程和单线程的异步编程如何选择？ web应用适用于单线程的异步编程</p><h4 id="js实现单线程异步编程的方式" tabindex="-1"><a class="header-anchor" href="#js实现单线程异步编程的方式" aria-hidden="true">#</a> JS实现单线程异步编程的方式：</h4><ol><li>回调函数；但是会有回调地狱的问题，即在依次执行多个异步操作的时候，代码的可读性很差</li><li>Promise；解决回调地狱的问题，用链式结构将多个异步操作串联起来</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://xxx.xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg1</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token keyword">function</span> body<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>.catch() r //错误处理 <code>fetch().then().then.catch((error)={console.log(error)})</code> 加在链式结构的末尾，之前任意一个阶段发生了错误，catch将会触发，之后的then不会被触发 .finally() //清理 无论失败与否，会在链式结构结束之后调用，进行一些清理工作。</p><ol start="4"><li>async/await语法糖；async关键词声明一个异步函数（就是返回值为promise对象的函数，如fetch（）），然后在函数体里面使用await关键字（相当于promise里面的.then）</li></ol>`,11),o=[c];function p(l,i){return a(),s("div",null,o)}const d=n(e,[["render",p],["__file","并发并行异步同步.html.vue"]]);export{d as default};

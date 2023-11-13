import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as s,f as n}from"./app-9e438faa.js";const t={},i=n(`<p>Promise的resolve是异步的操作，只会在宏观任务执行完之后才执行，JS的微观任务always会加到当前宏观任务的末尾，下一个宏观任务在上一个宏观任务里面的微观任务执行完之后才会执行</p><p>Promise的resolve之前的代码只是正常的函数调用而已</p><p>setTimeout是浏览器API，会产生一个宏任务：微任务始终会先于宏任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    var r = new Promise(function(resolve, reject){
        console.log(&quot;a&quot;);
        resolve()
    });
    setTimeout(()=&gt;console.log(&quot;d&quot;), 0)
    r.then(() =&gt; console.log(&quot;c&quot;));
    console.log(&quot;b&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>d会在c之后执行</p>`,5),l=[i];function r(c,a){return o(),s("div",null,l)}const m=e(t,[["render",r],["__file","Promise的异步过程.html.vue"]]);export{m as default};

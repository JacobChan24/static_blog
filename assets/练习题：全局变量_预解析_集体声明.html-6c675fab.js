import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as l}from"./app-9e438faa.js";const s={},d=l(`<p>下面的代码会输出什么结果？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function f1() {
  var a = b = c = 9;
  console.log(a)
  console.log(b)
  console.log(c)
}
f1()
console.log(c)
console.log(b)
console.log(a)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>9
9
9
9
9
a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点：</p><ol><li>集体声明</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = b = c =9 相当于：
var a = 9;
b = 9;
c = 9
//如果这种写法是在函数里面的话，b和c会变成全局变量，因为没有声明就直接赋值了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),a=[d];function c(v,r){return n(),i("div",null,a)}const u=e(s,[["render",c],["__file","练习题：全局变量_预解析_集体声明.html.vue"]]);export{u as default};

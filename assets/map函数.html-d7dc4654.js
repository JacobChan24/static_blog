import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9e438faa.js";const a={},l=d(`<p>有时，你可能需要获取一个数组并将一些操作应用于其子项，以便获得具有已修改元素的新数组。</p><p>无需使用循环手动遍历数组，你可以简单地使用内置<code>Array.map()</code>方法。</p><p>该<code>Array.map()</code>方法允许你遍历数组并使用回调函数修改其元素。然后，将对数组的每个元素执行回调函数。</p><p>例如，假设你具有以下数组元素：</p><p><code>let arr = [3, 4, 5, 6];</code></p><p>现在，假设你需要将数组的每个元素乘以<code>3</code>。你可以考虑<code>for</code>如下使用循环：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [3, 4, 5, 6];

for (let i = 0; i &lt; arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是实际上可以使用该<code>Array.map()</code>方法来达到相同的结果。这是一个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该<code>Array.map()</code>方法通常用于对元素进行一些更改，无论是乘以上面的代码中的特定数字，还是进行应用程序可能需要的任何其他操作。</p><h2 id="如何在对象数组上使用map" tabindex="-1"><a class="header-anchor" href="#如何在对象数组上使用map" aria-hidden="true">#</a> 如何在对象数组上使用map()</h2><p>例如，您可能有一个对象数组，这些对象存储<code>firstName</code>和存储<code>lastName</code>您的朋友的值，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let users = [
  {firstName : &quot;Susan&quot;, lastName: &quot;Steward&quot;},
  {firstName : &quot;Daniel&quot;, lastName: &quot;Longbottom&quot;},
  {firstName : &quot;Jacob&quot;, lastName: &quot;Black&quot;}
]; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以使用<code>map()</code>在阵列上的方法来迭代和加入的价值观 <code>firstName</code>和<code>lastName</code>如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let users = [
  {firstName : &quot;Susan&quot;, lastName: &quot;Steward&quot;},
  {firstName : &quot;Daniel&quot;, lastName: &quot;Longbottom&quot;},
  {firstName : &quot;Jacob&quot;, lastName: &quot;Black&quot;}
];

let userFullnames = users.map(function(element){
    return \`\${element.firstName} \${element.lastName}\`;
})

console.log(userFullnames);
// [&quot;Susan Steward&quot;, &quot;Daniel Longbottom&quot;, &quot;Jacob Black&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该<code>map()</code>方法传递的不仅仅是一个元素。让我们看看传递<code>map()</code>给回调函数的所有参数。</p><h2 id="完整的map-方法语法" tabindex="-1"><a class="header-anchor" href="#完整的map-方法语法" aria-hidden="true">#</a> 完整的map()方法语法</h2><p>该<code>map()</code>方法的语法如下：</p><p><code>arr.map(function(element, index, array){ }, this);</code></p><p><code>function()</code>在每个数组元素上调用该回调，并且该<code>map()</code>方法始终将current <code>element</code>，<code>index</code>当前元素的of和整个<code>array</code>对象传递给它。</p><p>该<code>this</code>参数将在回调函数中使用。默认情况下，其值为<code>undefined</code>。例如，下面是将<code>this</code>值更改为数字的方法<code>80</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(this) // 80
}, 80);

console.log()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你有兴趣，还可以使用测试其他参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),s=[l];function r(t,c){return n(),i("div",null,s)}const m=e(a,[["render",r],["__file","map函数.html.vue"]]);export{m as default};

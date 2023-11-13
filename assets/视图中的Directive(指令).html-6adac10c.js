import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as l,f as a}from"./app-9e438faa.js";const d={},r=a('<p>指令只能与标签结合使用，Directive包括：</p><ul><li>v-on</li><li>v-bind</li><li>v-if</li><li>v-for</li><li>所有以v开头的都是指令</li></ul><p>在directive中只能使用表达式，如a&gt;1，不能使用普通的语句，如a=1，也不能使用控制语句</p><h4 id="v-for-循环" tabindex="-1"><a class="header-anchor" href="#v-for-循环" aria-hidden="true">#</a> v-for 循环-</h4><ul><li>首先在JS代码里面定义一个数组： ![[Pasted image 20220713231030.png]]</li><li>然后在template标签中写一个循环 ![[Pasted image 20220713231257.png]]</li><li>然后就看到页面中这个数组被循环打印出来了 ![[Pasted image 20220713231447.png]]</li></ul><h4 id="v-if-判断" tabindex="-1"><a class="header-anchor" href="#v-if-判断" aria-hidden="true">#</a> v-if 判断</h4><p>这条指定的使用是v-if, v-else-if,v-else配合完成的 注意：判断相等一般用<code>===</code></p><ul><li>先在script标签里面用JS定义一个变量name ![[Pasted image 20220713232005.png]]</li><li>然后在HTML代码里面写相应的逻辑 <ul><li>注意指令里面的单双引号</li><li>v-else指令里面不需要属性值了，只有v-else-if才需要写<code>v-else-if=&quot;表达式&quot;</code> ![[Pasted image 20220713232800.png]]</li></ul></li><li>最后页面上的效果如下 ![[Pasted image 20220713232844.png]]</li></ul><h4 id="v-if与v-for的优先级" tabindex="-1"><a class="header-anchor" href="#v-if与v-for的优先级" aria-hidden="true">#</a> v-if与v-for的优先级</h4><p>当这两者一起使用的时候，v-for比v-if有更高的优先级，如下是一个完整的例子： 拿到一个姓名的数组，所有人里面，只有符合条件的小钦才能被打印出来</p><ul><li>先定义一个这样的数组 ![[Pasted image 20220713233342.png]]</li><li>然后写相应的HTML代码： ![[Pasted image 20220713233817.png]]</li><li>页面上的结果为： ![[Pasted image 20220713233838.png]]</li></ul><h4 id="v-bind-属性绑定" tabindex="-1"><a class="header-anchor" href="#v-bind-属性绑定" aria-hidden="true">#</a> v-bind 属性绑定</h4><p>v-bind 用于将某个属性绑定到对应的元素属性，当我们需要用变量来控制元素的属性的时候，我们需要用这个指令来进行绑定，不能直接将变量写在属性的值里面</p><ul><li><p>首先在JS代码中定义一个my_color变量，用来控制文字颜色： ![[Pasted image 20220713234527.png]]</p></li><li><p>然后在HTML代码里面写一个标题，用v-bind将style属性与变量联系起来：</p><ul><li>内联样式的写法为<code>style=&quot;color: red margin-left: 20px&quot;</code> ![[Pasted image 20220713235618.png]]</li></ul></li><li><p>页面的效果为： ![[Pasted image 20220713235640.png]]</p></li><li><p>这样的话，我在console里面修改，让app.my_color = &#39;red&#39;就可以更改文字的颜色了</p></li></ul><h4 id="v-on-用于绑定事件" tabindex="-1"><a class="header-anchor" href="#v-on-用于绑定事件" aria-hidden="true">#</a> v-on 用于绑定事件</h4><h4 id="v-model双向绑定" tabindex="-1"><a class="header-anchor" href="#v-model双向绑定" aria-hidden="true">#</a> [[v-model双向绑定]]</h4><p>why we need two way binding?</p><ol><li>用户可以通过表单来修改某个变量的值</li><li>可以通过程序的运算来修改某个变量的值 官方文档：https://v2.cn.vuejs.org/v2/guide/forms.html</li></ol>',18),t=[r];function o(n,s){return i(),l("div",null,t)}const h=e(d,[["render",o],["__file","视图中的Directive(指令).html.vue"]]);export{h as default};

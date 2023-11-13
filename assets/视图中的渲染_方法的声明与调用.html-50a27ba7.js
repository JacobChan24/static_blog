import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as n}from"./app-9e438faa.js";const d={},t=n(`<h6 id="_1-渲染某个变量" tabindex="-1"><a class="header-anchor" href="#_1-渲染某个变量" aria-hidden="true">#</a> 1.渲染某个变量</h6><p>在vue文件的script标签里面定义一个变量 ![[Pasted image 20220809143524.png]]</p><p>然后在上面的html代码中引用即可： <code>&lt;h1&gt;{{my_variable}}&lt;/h1&gt;</code></p><h6 id="_2-方法的声明与调用" tabindex="-1"><a class="header-anchor" href="#_2-方法的声明与调用" aria-hidden="true">#</a> 2.方法的声明与调用</h6><p>同样在定义变量的script标签里面定义一个方法</p><p>在VUE组件里面，变量统一在data(){}里面定义且初始化，方法在methods: {}里定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
export default {
  data () {
  //定义的变量写在这里
  },
  methods: {
  //定义的方法都写在这里
  }
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[t];function r(l,c){return i(),a("div",null,s)}const v=e(d,[["render",r],["__file","视图中的渲染_方法的声明与调用.html.vue"]]);export{v as default};

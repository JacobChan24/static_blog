import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as d}from"./app-9e438faa.js";const n={},t=d(`<h2 id="_1-prop透传问题" tabindex="-1"><a class="header-anchor" href="#_1-prop透传问题" aria-hidden="true">#</a> 1.Prop透传问题</h2><p>回想一下，我们现在从父组件向子组件传递数据是怎么传递的？</p><ol><li>子组件定义Prop选项</li><li>子组件将定义的Prop里面的属性写到自己的代码逻辑(使用this关键字)或者模板里面（模板语法）</li><li>父组件在使用子组件的使用利用定义的属性传递特定数据 <code>&lt;myComponent v-bind:customProp =&quot;data&quot; &gt;&lt;/myComponent&gt;</code> 如果一个父组件想要将数据传递给更深一级、两级、三级甚至更多层级的子组件的时候，上述方法就会非常繁琐，那我们应该怎么办呢？这就是Prop逐级透传的问题</li></ol><h2 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案" aria-hidden="true">#</a> 2.解决方案</h2><p>如下图，<code>provide</code>和<code>inject</code>可以帮助我们解决这个问题，一个父组件可以作为<strong>依赖</strong>提供源提供依赖，任何后代的组件树都可以<strong>注入</strong>父组件的依赖 ![[Pasted image 20220927230717.png]]</p><h2 id="_3-provide提供" tabindex="-1"><a class="header-anchor" href="#_3-provide提供" aria-hidden="true">#</a> 3.Provide提供</h2><p>Provide选项，为后代组件提供数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
	provide: {
		message: &quot;hello&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们需要获取当前组件实例的状态，将此提供给后代组件，则可以使用this关键字搭配函数的形式来提供：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
	data() {
		message: &quot;本组件的数据&quot;
	}
	provide() {
		return {
		  message: this message
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者用api的形式提供当前实例的某个数据 但是这样写不会让注入保持响应式，即若实例相关属性发生变化，父组件提供的依赖不会发生变化，子组件注入的属性也是老属性</p><ul><li>应用层提供 若想要在整个应用层面提供依赖，我们可以使用api的方式来写: app.provide()</li></ul><h2 id="_4-注入" tabindex="-1"><a class="header-anchor" href="#_4-注入" aria-hidden="true">#</a> 4.注入</h2><p>提供是声明一个provide选项，相同地，注入是在子组件里面声明一个inject选项，可以用数组的方式注入，也可以用对象的方式（更多控制）注入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  inject: [&quot;message1&quot;,&quot;message2&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入的数据会在子组件实例状态之前被解析，所以<code>data()</code>中可以访问使用到注入的数据（this.message1/2），计算属性中当然也可以用到</p><h3 id="注入别名" tabindex="-1"><a class="header-anchor" href="#注入别名" aria-hidden="true">#</a> 注入别名</h3><p>就要使用对象的形式写inject选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
	inject: {
		localMessage : {
			from: &#39;message&#39; //提供时的名字
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象形式写注入的时候的其他属性，比如default属性</p><h2 id="_5-响应式注入" tabindex="-1"><a class="header-anchor" href="#_5-响应式注入" aria-hidden="true">#</a> 5.响应式注入</h2>`,21),s=[t];function r(l,c){return i(),a("div",null,s)}const u=e(n,[["render",r],["__file","依赖注入.html.vue"]]);export{u as default};

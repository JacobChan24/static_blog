import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as i,f as t}from"./app-9e438faa.js";const a={},d=t(`<p>参考文档： https://element-plus.gitee.io/zh-CN/component/form.html#%E5%85%B8%E5%9E%8B%E8%A1%A8%E5%8D%95</p><h3 id="_1基本使用方式" tabindex="-1"><a class="header-anchor" href="#_1基本使用方式" aria-hidden="true">#</a> ①基本使用方式</h3><ol><li><p>model属性 最外层用一个el-form元素包裹，这个元素里面需要用到model属性，model属性需要绑定我们表单所有数据字段的对象，比如在data选项里面定义一个form对象，所有填入字段都有一个key值，定义的value值都作为表单初始值 <code>:model=&#39;form&#39;</code></p></li><li><p><code>el-form-item</code>包裹 每一个form的输入组件都必须用一个<code>form-item</code>包裹</p></li><li><p>输入元素双向绑定数据 具体的输入元素上面需要双向绑定初始值，如下： <code>v-model=&#39;form.name&#39;</code> form对象已经与表单model属性绑定过了</p></li></ol><h3 id="_2输入时的表单验证" tabindex="-1"><a class="header-anchor" href="#_2输入时的表单验证" aria-hidden="true">#</a> ②输入时的表单验证</h3><ol><li>在el-form属性上定义rules属性，这个属性可以绑定一个对象来规定验证规则</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;el-form :rules=&#39;myRules&#39;&gt;
...
...
&lt;/el-form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在data选项中定义我的表单验证规则</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data(){
	return{
		myRules
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个定义的数据对应一个数组，包含了多条输入规则，每条输入规则包含具体规则(max,min,type,required),报错信息(required: true/false)，相应的报错信息(message)和触发验证的事件(trigger: change/blur 只有这两个值)</p><ol start="3"><li>在输入框外层的form-item元素的prop属性设置为规则里面对应数据的键值即可，对应的规则则会运用到此输入值上</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form-item prop=&quot;name&quot;&gt;  //在rules里面需要有name这个键值
	&lt;el-input&gt;&lt;/el-input&gt;
&lt;/form-item&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3提交时的表单验证" tabindex="-1"><a class="header-anchor" href="#_3提交时的表单验证" aria-hidden="true">#</a> ③提交时的表单验证</h3><p>暂时没搞懂 实际开发过程中，一般由后端来做这个验证</p>`,13),n=[d];function r(s,o){return l(),i("div",null,n)}const u=e(a,[["render",r],["__file","使用element-plus的表单.html.vue"]]);export{u as default};

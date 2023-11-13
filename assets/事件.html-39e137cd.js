import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as i,f as l}from"./app-9e438faa.js";const n={},d=l(`<h4 id="_1-子组件的触发与监听" tabindex="-1"><a class="header-anchor" href="#_1-子组件的触发与监听" aria-hidden="true">#</a> 1.子组件的触发与监听</h4><ul><li><p>使用<code>&amp;emit</code>来向父组件抛出自定义事件，父组件则监听</p></li><li><p>自定义事件的监听也支持修饰符</p></li><li><p>在父组件上，监听子组件的抛出的事件没有冒泡 <code>@customEvent.once=handler</code></p></li><li><p>抛出 方式一：HTML原生元素事件被动触发 <code>&lt;button @click=&quot;$emit(&#39;customEvent&#39;)&quot;&gt; &lt;/button&gt;</code> 方式二：JS中主动触发 <code>this.$emit(&#39;customEvent&#39;)</code></p></li><li><p>父元素监听 HTML元素监听 <code>&lt;div @customEvent=handler&gt;&lt;/div&gt;</code> JS监听 <code>element.addEventListener(&#39;customEvent&#39;,handler)</code></p></li></ul><h4 id="_2-事件传参" tabindex="-1"><a class="header-anchor" href="#_2-事件传参" aria-hidden="true">#</a> 2.事件传参</h4><p>子组件抛出事件的时候可以传参： <code>&lt;button @click = &quot;$emit(&#39;customEvent&#39;, param)&quot;&gt; Increase by 1 &lt;/button&gt;</code></p><p>父组件接受子组件抛出的事件和参数： 事件句柄写一个箭头函数或者方法名称，在methods option里面处理参数 <code>&lt;div @click = &#39;(n) = &gt; {function body}&#39;&gt; &lt;/div&gt;</code></p><p>所有传入<code>$emit()</code>的参数都会被直接传向监听器</p><h4 id="_3-对事件进行校验" tabindex="-1"><a class="header-anchor" href="#_3-对事件进行校验" aria-hidden="true">#</a> 3.对事件进行校验</h4><p>组件要抛出的事件，我们可以通过emits选项来声明（不是必需），形式可以为数组或者对象，用对象声明，key为组件抛出的事件名称，value是一个校验函数，通过返回false/true来校验跟事件一起抛出的参数是否合法：</p><ul><li>声明方式一：数组 <code>emits: [&#39;event1&#39;,&#39;event2&#39;]</code></li><li>声明方式二：对象</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>emits: {
  event1: null, //没有参数校验
  event2: (param) = &gt; {           //用一个箭头函数来验证一起抛出的参数
    if (param == 1) {
	cosole.warn(&quot;参数不能为1&quot;)
      return false
    } else {
	return true
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-与-v-model-配合使用" tabindex="-1"><a class="header-anchor" href="#_4-与-v-model-配合使用" aria-hidden="true">#</a> 4. 与[[v-model]]配合使用</h4><p>v-model会自动将input/text等元素的内容(value)和定义的数据双向绑定，本身用户的输入改变之后，数据的值也会发生改变，改变数据本身时，元素的内容也会发生改变。 但是思考一个问题，如果input/textarea等这些输入元素是包含在子组件中的时候，我们怎么在父组件中实现这样的逻辑呢：</p><ol><li>将子组件内部的input/textarea等元素的内容(value)属性绑定到子组件的[[Props选项]]，这样的话，父组件上的任何数据可以传到子组件里面，控制子组件相应元素的value(父组件数据==&gt;子组件元素内容)</li><li>当内部输入元素的值更新的时候，子元素带着新的值为参数一起抛出一个事件让父元素接受，父元素接收到此事件之后更新相应的数据（子组件元素内容==&gt;父组件数据） 实现代码(子组件):</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
export default {
	props: [&quot;modelValue&quot;], //父组件用这个属性将它的数据传进来
	emits: [&quot;update:modelValue&quot;]
}
&lt;/script&gt;

&lt;template&gt;
	&lt;input
		v-bind:value = &#39;modelvalue&#39;
		v-on:input = &quot;$emit(&#39;updateModelValue&#39;,$event.target.value)&quot;
	/&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;customer-input modelValue = &quot;initialValue&quot;
		    @updateModelValue = &quot;newValue = &gt; initialValue = newValue &quot;		

&lt;/customer-input&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但实际上，只要子组件写好了相应props和emits代码，父组件就只需要直接使用v-model就可以了： <code>&lt;customer-input v-model = &quot;initialValue&quot;&gt;&lt;/customer-input&gt;</code></p><p>默认情况下，子组件里面都是使用<code>modelValue</code>和<code>update:modelValue</code>作为默认的prop和抛出事件，这在父组件的代码中没有体验，依靠的是这样的默认行为，如果想在子组件里面自定义参数的名称，则要做相应的改动 子组件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: [&#39;customValue&#39;],
emits: [&#39;update:customValue&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件： <code>&lt;customer-input v-model:customeValue = &quot;initialValue&quot;&gt;&lt;/customer-input&gt;</code></p>`,20),a=[d];function s(u,o){return t(),i("div",null,a)}const v=e(n,[["render",s],["__file","事件.html.vue"]]);export{v as default};

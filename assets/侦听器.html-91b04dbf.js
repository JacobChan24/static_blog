import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as d}from"./app-9e438faa.js";const a={},s=d(`<h2 id="inbox" tabindex="-1"><a class="header-anchor" href="#inbox" aria-hidden="true">#</a> INBOX</h2><p>https://blog.csdn.net/wwf1225/article/details/106590301</p><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用？</h3><p>[[计算属性]]允许我们声明性地计算某些衍生值，但是仅仅限于一些值的计算，我们不会在计算属性里面去做异步请求或者操控DOM，所以计算属性在响应式的操作中有很多局限，所以这个时候我们就需要用到VUE的侦听器，它能响应式地操作DOM、修改状态等。侦听器专注于监听一个数据，计算属性可以实时关联多个计算的属性</p><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3><h6 id="_1选项式api" tabindex="-1"><a class="header-anchor" href="#_1选项式api" aria-hidden="true">#</a> ①选项式API</h6><p>将watch写成VUE实例中的一个选项，如el, methods, data和钩子函数一样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data () {
	return {
		question: &quot;&quot;
	}
},
watch: {
//每当question变化时，这个函数就会执行,只有一个函数时就是新值
	question (oldValue,newValue ) {
		function body
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以直接写一个侦听处理函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data() {
	return {
	listenedKey: &quot;初始值&quot;
	}
},
methods: {
	keyChangeHandler: function() {}
}
watch: {
	listenedKey : keyChangeHandler
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="_2组合式api写法" tabindex="-1"><a class="header-anchor" href="#_2组合式api写法" aria-hidden="true">#</a> ②组合式API写法</h6><h6 id="_3imediate-和-handler" tabindex="-1"><a class="header-anchor" href="#_3imediate-和-handler" aria-hidden="true">#</a> ③imediate 和 handler</h6><p>我们常规使用watch有一个特点，就是当被侦听的值第一次被绑定的时候，我们不会执行侦听函数，只有它发生改变的时候才会执行，如果我们需要在最开始绑定值的时候就执行侦听函数的话，我们需要使用imediate属性，用到imediate属性的时候，我们需要把handler也写出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>el: &#39;&#39;,
data() {
	return {
		listenedValue: &quot;&quot;
	}
},
methods: {

},
watch:{
	listenedValue: {
		handler(newValue,oldValue) {},
		imediate: true
	}
}
	
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深层侦听" tabindex="-1"><a class="header-anchor" href="#深层侦听" aria-hidden="true">#</a> 深层侦听</h3><p>watch是浅层的侦听，只有在被侦听的属性/对象被赋予新的值的时候才会触发回调函数，但是嵌套在对象里面的属性的变化不会触发回调，如果想侦听所有嵌套的属性的变更，我们需要深度监听:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch: {
	someObj: {
		handler(newValue, oldValue){},
		imediate: true/false,
		deep: true
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：如果对象数据很大呢，监听所有嵌套的属性是一个很耗性能的写法，一定要在必要时才使用，如果不想监听所有的嵌套属性，只想监听指定的嵌套属性的话，可以仅仅表层监听该特定属性：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch : {
	someObj.targetedProp: {
		handler(newValue,oldValue) {},
		imediate: true/false,
		deep: false	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![[Pasted image 20221005225819.png]]</p>`,20),l=[s];function t(r,v){return i(),n("div",null,l)}const m=e(a,[["render",t],["__file","侦听器.html.vue"]]);export{m as default};

const t=JSON.parse(`{"key":"v-784a0703","path":"/Tech/Front-end/03_VUE/%E4%BA%8B%E4%BB%B6.html","title":"","lang":"en-US","frontmatter":{"description":"1.子组件的触发与监听 使用&amp;emit来向父组件抛出自定义事件，父组件则监听 自定义事件的监听也支持修饰符 在父组件上，监听子组件的抛出的事件没有冒泡 @customEvent.once=handler 抛出 方式一：HTML原生元素事件被动触发 &lt;button @click=\\"$emit('customEvent')\\"&gt; &lt;/button&gt; 方式二：JS中主动触发 this.$emit('customEvent') 父元素监听 HTML元素监听 &lt;div @customEvent=handler&gt;&lt;/div&gt; JS监听 element.addEventListener('customEvent',handler)","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Tech/Front-end/03_VUE/%E4%BA%8B%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"1.子组件的触发与监听 使用&amp;emit来向父组件抛出自定义事件，父组件则监听 自定义事件的监听也支持修饰符 在父组件上，监听子组件的抛出的事件没有冒泡 @customEvent.once=handler 抛出 方式一：HTML原生元素事件被动触发 &lt;button @click=\\"$emit('customEvent')\\"&gt; &lt;/button&gt; 方式二：JS中主动触发 this.$emit('customEvent') 父元素监听 HTML元素监听 &lt;div @customEvent=handler&gt;&lt;/div&gt; JS监听 element.addEventListener('customEvent',handler)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Jacob"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jacob\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.75,"words":825},"filePathRelative":"Tech/Front-end/03_VUE/事件.md","excerpt":"<h4> 1.子组件的触发与监听</h4>\\n<ul>\\n<li>\\n<p>使用<code>&amp;emit</code>来向父组件抛出自定义事件，父组件则监听</p>\\n</li>\\n<li>\\n<p>自定义事件的监听也支持修饰符</p>\\n</li>\\n<li>\\n<p>在父组件上，监听子组件的抛出的事件没有冒泡\\n<code>@customEvent.once=handler</code></p>\\n</li>\\n<li>\\n<p>抛出\\n方式一：HTML原生元素事件被动触发\\n<code>&lt;button @click=\\"$emit('customEvent')\\"&gt; &lt;/button&gt;</code>\\n方式二：JS中主动触发\\n<code>this.$emit('customEvent')</code></p>\\n</li>\\n<li>\\n<p>父元素监听\\nHTML元素监听\\n<code>&lt;div @customEvent=handler&gt;&lt;/div&gt;</code>\\nJS监听\\n<code>element.addEventListener('customEvent',handler)</code></p>\\n</li>\\n</ul>","autoDesc":true}`);export{t as data};

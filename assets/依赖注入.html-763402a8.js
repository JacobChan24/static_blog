const t=JSON.parse('{"key":"v-14d901d6","path":"/Tech/Front-end/03_VUE/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5.html","title":"","lang":"en-US","frontmatter":{"description":"1.Prop透传问题 回想一下，我们现在从父组件向子组件传递数据是怎么传递的？ 子组件定义Prop选项 子组件将定义的Prop里面的属性写到自己的代码逻辑(使用this关键字)或者模板里面（模板语法） 父组件在使用子组件的使用利用定义的属性传递特定数据 &lt;myComponent v-bind:customProp =\\"data\\" &gt;&lt;/myComponent&gt; 如果一个父组件想要将数据传递给更深一级、两级、三级甚至更多层级的子组件的时候，上述方法就会非常繁琐，那我们应该怎么办呢？这就是Prop逐级透传的问题","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Tech/Front-end/03_VUE/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"1.Prop透传问题 回想一下，我们现在从父组件向子组件传递数据是怎么传递的？ 子组件定义Prop选项 子组件将定义的Prop里面的属性写到自己的代码逻辑(使用this关键字)或者模板里面（模板语法） 父组件在使用子组件的使用利用定义的属性传递特定数据 &lt;myComponent v-bind:customProp =\\"data\\" &gt;&lt;/myComponent&gt; 如果一个父组件想要将数据传递给更深一级、两级、三级甚至更多层级的子组件的时候，上述方法就会非常繁琐，那我们应该怎么办呢？这就是Prop逐级透传的问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Jacob"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jacob\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1.Prop透传问题","slug":"_1-prop透传问题","link":"#_1-prop透传问题","children":[]},{"level":2,"title":"2.解决方案","slug":"_2-解决方案","link":"#_2-解决方案","children":[]},{"level":2,"title":"3.Provide提供","slug":"_3-provide提供","link":"#_3-provide提供","children":[]},{"level":2,"title":"4.注入","slug":"_4-注入","link":"#_4-注入","children":[{"level":3,"title":"注入别名","slug":"注入别名","link":"#注入别名","children":[]}]},{"level":2,"title":"5.响应式注入","slug":"_5-响应式注入","link":"#_5-响应式注入","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.97,"words":590},"filePathRelative":"Tech/Front-end/03_VUE/依赖注入.md","excerpt":"<h2> 1.Prop透传问题</h2>\\n<p>回想一下，我们现在从父组件向子组件传递数据是怎么传递的？</p>\\n<ol>\\n<li>子组件定义Prop选项</li>\\n<li>子组件将定义的Prop里面的属性写到自己的代码逻辑(使用this关键字)或者模板里面（模板语法）</li>\\n<li>父组件在使用子组件的使用利用定义的属性传递特定数据\\n<code>&lt;myComponent v-bind:customProp =\\"data\\" &gt;&lt;/myComponent&gt;</code>\\n如果一个父组件想要将数据传递给更深一级、两级、三级甚至更多层级的子组件的时候，上述方法就会非常繁琐，那我们应该怎么办呢？这就是Prop逐级透传的问题</li>\\n</ol>","autoDesc":true}');export{t as data};

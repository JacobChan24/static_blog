const t=JSON.parse(`{"key":"v-2e0df68e","path":"/Tech/Front-end/03_VUE/%E8%B7%AF%E7%94%B1/Router%E8%B7%AF%E7%94%B1.html","title":"","lang":"en-US","frontmatter":{"description":"Router会将router-link元素转换成a元素，但是会拦截点击事件，不会引发刷新，在单页面应用中 router-view组件会根据不同的path渲染相应的组件 router-link元素其实就等于a属性，to属性等于href属性，区别在于router-link元素不会引起页面整体刷新 历史模式 createWebHistory() createWebHashHistory() ①lazy loading / code splitting/动态导入 index.js //记得删除上面的import语句 const routes = [ \\t{ \\tpath: '/about', \\tname: 'about', \\tcomponent: ()=&gt; import('path') \\t}, \\t{ \\tpath: '/detail', \\tname: 'detail', \\tcomponent: ()=&gt; import('path \\t \\t \\t') \\t} ]","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Tech/Front-end/03_VUE/%E8%B7%AF%E7%94%B1/Router%E8%B7%AF%E7%94%B1.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"Router会将router-link元素转换成a元素，但是会拦截点击事件，不会引发刷新，在单页面应用中 router-view组件会根据不同的path渲染相应的组件 router-link元素其实就等于a属性，to属性等于href属性，区别在于router-link元素不会引起页面整体刷新 历史模式 createWebHistory() createWebHashHistory() ①lazy loading / code splitting/动态导入 index.js //记得删除上面的import语句 const routes = [ \\t{ \\tpath: '/about', \\tname: 'about', \\tcomponent: ()=&gt; import('path') \\t}, \\t{ \\tpath: '/detail', \\tname: 'detail', \\tcomponent: ()=&gt; import('path \\t \\t \\t') \\t} ]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Jacob"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jacob\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"历史模式","slug":"历史模式","link":"#历史模式","children":[]},{"level":3,"title":"①lazy loading / code splitting/动态导入","slug":"_1lazy-loading-code-splitting-动态导入","link":"#_1lazy-loading-code-splitting-动态导入","children":[]},{"level":3,"title":"②router-link-active 类","slug":"_2router-link-active-类","link":"#_2router-link-active-类","children":[]},{"level":3,"title":"动态路线 - Route Parameters（路由参数）","slug":"动态路线-route-parameters-路由参数","link":"#动态路线-route-parameters-路由参数","children":[]},{"level":3,"title":"Router name","slug":"router-name","link":"#router-name","children":[]},{"level":3,"title":"注意：参数变换时的注意事项","slug":"注意-参数变换时的注意事项","link":"#注意-参数变换时的注意事项","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.41,"words":722},"filePathRelative":"Tech/Front-end/03_VUE/路由/Router路由.md","excerpt":"<p>Router会将router-link元素转换成a元素，但是会拦截点击事件，不会引发刷新，在单页面应用中\\nrouter-view组件会根据不同的path渲染相应的组件\\nrouter-link元素其实就等于a属性，to属性等于href属性，区别在于router-link元素不会引起页面整体刷新</p>\\n<h3> 历史模式</h3>\\n<p>createWebHistory()\\ncreateWebHashHistory()</p>\\n<h3> ①lazy loading / code splitting/动态导入</h3>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>index.js\\n\\n//记得删除上面的import语句\\nconst routes = [\\n\\t{\\n\\tpath: '/about',\\n\\tname: 'about',\\n\\tcomponent: ()=&gt; import('path')\\n\\t},\\n\\t{\\n\\tpath: '/detail',\\n\\tname: 'detail',\\n\\tcomponent: ()=&gt; import('path\\n\\t\\n\\t\\n\\t')\\n\\t}\\n]\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};

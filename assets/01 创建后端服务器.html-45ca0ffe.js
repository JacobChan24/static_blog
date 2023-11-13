const e=JSON.parse(`{"key":"v-7cb8de6b","path":"/Tech/Backend/nodeJS/%E5%9F%BA%E7%A1%80/01%20%E5%88%9B%E5%BB%BA%E5%90%8E%E7%AB%AF%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"","lang":"en-US","frontmatter":{"description":"服务器端口 创建服务器的时候，需要设置端口，服务器会一直监听这个端口，看是否有请求进来，有请求进来之后根据不同的请求来返回特定的内容； 一般服务器都会运行好几个服务，像邮件服务和ftp服务，这些服务都有自己的端口，邮件服务的端口是25，FTP的服务端口是21 端口0-1023都是系统保留的端口号，我们不能用，我们可以自定义用3000/5000类似的 使用http module创建服务器 导入模块 const http = require('http') http模块会返回一个object，我们将其赋予给一个const变量 创建服务器 const server = http.createServer() 函数返回一个server的object 在服务器中创建请求监听器 监听器的本质就是一个函数","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Tech/Backend/nodeJS/%E5%9F%BA%E7%A1%80/01%20%E5%88%9B%E5%BB%BA%E5%90%8E%E7%AB%AF%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"服务器端口 创建服务器的时候，需要设置端口，服务器会一直监听这个端口，看是否有请求进来，有请求进来之后根据不同的请求来返回特定的内容； 一般服务器都会运行好几个服务，像邮件服务和ftp服务，这些服务都有自己的端口，邮件服务的端口是25，FTP的服务端口是21 端口0-1023都是系统保留的端口号，我们不能用，我们可以自定义用3000/5000类似的 使用http module创建服务器 导入模块 const http = require('http') http模块会返回一个object，我们将其赋予给一个const变量 创建服务器 const server = http.createServer() 函数返回一个server的object 在服务器中创建请求监听器 监听器的本质就是一个函数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Jacob"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jacob\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":3,"title":"服务器端口","slug":"服务器端口","link":"#服务器端口","children":[]},{"level":3,"title":"使用http module创建服务器","slug":"使用http-module创建服务器","link":"#使用http-module创建服务器","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"Tech/Backend/nodeJS/基础/01 创建后端服务器.md","excerpt":"<h3> 服务器端口</h3>\\n<ul>\\n<li>创建服务器的时候，需要设置端口，服务器会一直监听这个端口，看是否有请求进来，有请求进来之后根据不同的请求来返回特定的内容；</li>\\n<li>一般服务器都会运行好几个服务，像邮件服务和ftp服务，这些服务都有自己的端口，邮件服务的端口是25，FTP的服务端口是21</li>\\n<li>端口0-1023都是系统保留的端口号，我们不能用，我们可以自定义用3000/5000类似的</li>\\n</ul>\\n<h3> 使用http module创建服务器</h3>\\n<ol>\\n<li>\\n<p>导入模块\\n<code>const http = require('http')</code>\\nhttp模块会返回一个object，我们将其赋予给一个const变量</p>\\n</li>\\n<li>\\n<p>创建服务器\\n<code>const server = http.createServer()</code>\\n函数返回一个server的object</p>\\n</li>\\n<li>\\n<p>在服务器中创建请求监听器\\n监听器的本质就是一个函数</p>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};

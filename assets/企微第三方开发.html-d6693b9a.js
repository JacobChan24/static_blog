const e=JSON.parse('{"key":"v-130225a8","path":"/Tech/%E4%BC%81%E5%BE%AE%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91.html","title":"","lang":"en-US","frontmatter":{"description":"理解第三方应用开发的流程与概念 最后更新：2022/06/10 总结： 创建应用时获取应用标识和密钥suite_id和suite_secret，搭配企微定时发送的suite_ticket，换取第三方应用凭证suite_access_token，企微管理员授权关联安装这个应用的时候会生成一个临时授权码auth_code，第三方应用通过管理员授权时临时生成的auth_code和之前的suite_access_token就可以换取企业永久授权码permanent_code，这个码是企业授权第三方应用的唯一凭证，第三方应用在调用企业业务的接口的时候，需要通过接口用permanent_code换取access_token，所有接口的调用都依赖于有效的access_token。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Tech/%E4%BC%81%E5%BE%AE%E7%AC%AC%E4%B8%89%E6%96%B9%E5%BC%80%E5%8F%91.html"}],["meta",{"property":"og:site_name","content":"Blog Demo"}],["meta",{"property":"og:description","content":"理解第三方应用开发的流程与概念 最后更新：2022/06/10 总结： 创建应用时获取应用标识和密钥suite_id和suite_secret，搭配企微定时发送的suite_ticket，换取第三方应用凭证suite_access_token，企微管理员授权关联安装这个应用的时候会生成一个临时授权码auth_code，第三方应用通过管理员授权时临时生成的auth_code和之前的suite_access_token就可以换取企业永久授权码permanent_code，这个码是企业授权第三方应用的唯一凭证，第三方应用在调用企业业务的接口的时候，需要通过接口用permanent_code换取access_token，所有接口的调用都依赖于有效的access_token。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Mr.Jacob"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Jacob\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"应用接入流程","slug":"应用接入流程","link":"#应用接入流程","children":[{"level":3,"title":"一、应用开发阶段","slug":"一、应用开发阶段","link":"#一、应用开发阶段","children":[]},{"level":3,"title":"二、应用推广阶段","slug":"二、应用推广阶段","link":"#二、应用推广阶段","children":[]}]},{"level":2,"title":"基本流程","slug":"基本流程","link":"#基本流程","children":[{"level":3,"title":"一、前期应用准备","slug":"一、前期应用准备","link":"#一、前期应用准备","children":[]},{"level":3,"title":"二、基础环境搭建","slug":"二、基础环境搭建","link":"#二、基础环境搭建","children":[]},{"level":3,"title":"三、企业授权安装","slug":"三、企业授权安装","link":"#三、企业授权安装","children":[]},{"level":3,"title":"四、调用企业接口","slug":"四、调用企业接口","link":"#四、调用企业接口","children":[]}]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"第三方应用相关","slug":"第三方应用相关","link":"#第三方应用相关","children":[]},{"level":3,"title":"企业授权相关","slug":"企业授权相关","link":"#企业授权相关","children":[]},{"level":3,"title":"企业相关","slug":"企业相关","link":"#企业相关","children":[]},{"level":3,"title":"成员相关","slug":"成员相关","link":"#成员相关","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.65,"words":2294},"filePathRelative":"Tech/企微第三方开发.md","excerpt":"<p>理解第三方应用开发的流程与概念</p>\\n<p>最后更新：2022/06/10</p>\\n<p>总结：\\n创建应用时获取应用标识和密钥suite_id和suite_secret，搭配企微定时发送的suite_ticket，换取第三方应用凭证suite_access_token，企微管理员授权关联安装这个应用的时候会生成一个临时授权码auth_code，第三方应用通过管理员授权时临时生成的auth_code和之前的suite_access_token就可以换取企业永久授权码permanent_code，这个码是企业授权第三方应用的唯一凭证，第三方应<mark style=\\"background: #FF5582A6;\\">用在调用企业业务的接口的时候，需要通过接口用</mark>permanent_code换取access_token，所有接口的调用都依赖于有效的access_token。</p>","autoDesc":true}');export{e as data};

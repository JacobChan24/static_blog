import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as d,f as t}from"./app-9e438faa.js";const a={},r=t(`<h4 id="往远端推送代码" tabindex="-1"><a class="header-anchor" href="#往远端推送代码" aria-hidden="true">#</a> 往远端推送代码</h4><p><code>git remote add orgin https://xxx.xx</code> origin指向此远程仓库，别名可以不叫origin <code>git push -u origin master</code> 把master分支推向远端，<code>-u</code>指定默认推送到远端的master分支 <code>git push origin dev</code>把dev分支推送到远端仓库 如何一次性将所有分支都推送到远端？</p><h4 id="从远端拉代码" tabindex="-1"><a class="header-anchor" href="#从远端拉代码" aria-hidden="true">#</a> 从远端拉代码</h4><p><code>git clone https://xxx.xx</code> 把代码仓库克隆下来，用git branch查看只有一个master分支，但是其实所有分支都克隆下来了，我们checkout就可以正常切换分支（内部实现了别名设置为origin） <code>git pull origin dev</code> 从远端更新dev分支代码</p><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull origin dev 可以拆分为下面两条命令：
git fetch origin dev
git merge origin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),n=[r];function o(c,s){return i(),d("div",null,n)}const u=e(a,[["render",o],["__file","2.0 Github 代码仓库.html.vue"]]);export{u as default};

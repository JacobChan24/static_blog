import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,f as s}from"./app-9e438faa.js";const l={},d=s(`<p>三角形就是一个盒子，用伪元素做，用定改变位置，只给两条相邻的边border，hover上去旋转这个盒子，再加上transition元素即可实现过渡动画![[Pasted image 20230129060908.png]]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;style&gt;

        .one {

            position: relative;

            border: 1px solid black;

            width: 300px;

            height: 50px;

            /* transform: translateX(-50%); */

            /* transform: translateY(30px); */

            transform: translate(300px,300px);

        }

  

        .one:after {

            content: &#39;&#39;;

            position: absolute;

            width: 13px;

            height: 13px;

            border-right: 1px black solid;

            border-bottom: 1px black solid;

            top: 15px;

            right: 15px;

            transform: rotate(45deg);

            transition: all 0.5s;

        }

  

        .one:hover::after {

            transform: rotate(225deg);

        }

    &lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[d];function r(a,c){return i(),e("div",null,v)}const b=n(l,[["render",r],["__file","下拉框三角形.html.vue"]]);export{b as default};

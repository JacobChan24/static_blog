import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,f as _}from"./app-9e438faa.js";const e={},c=_("<p>内联样式&gt;ID选择器&gt;类和伪类选择器&gt;元素选择器&gt;通配选择器(星号)&gt;继承的样式（没有优先级）</p><ul><li>比较优先级时，需要将所有选择器的优先级进行相加运算，计算出优先级 <ul><li>1000 100 10 1</li></ul></li><li>分组选择器是单独计算的 <ul><li><code>div,p,span {background-color: orange;}</code></li></ul></li><li>如果选择器的优先级相同，此时优先使用在代码中后出现的选择器相应的样式</li><li><code>!important</code> 这个标志将对应的样式提到最高的优先级，甚至超过内联样式，但是这个声明尽量不使用</li></ul>",2),i=[c];function r(n,a){return t(),o("div",null,i)}const u=l(e,[["render",r],["__file","选择器的权重_优先级.html.vue"]]);export{u as default};

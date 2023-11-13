import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as r}from"./app-9e438faa.js";const d={},s=r(`<h5 id="_1-声明" tabindex="-1"><a class="header-anchor" href="#_1-声明" aria-hidden="true">#</a> 1.声明</h5><p>props选项声明：</p><ul><li>字符串数组声明 <code>props: [&quot;props1&quot;,&quot;props2&quot;]</code></li><li>对象声明 <code>props : {&quot;props1&quot;:Number, &quot;props2&quot;: String}</code> 推荐写为kebab-case的形式</li></ul><h5 id="_2-静态-动态props" tabindex="-1"><a class="header-anchor" href="#_2-静态-动态props" aria-hidden="true">#</a> 2.静态&amp;动态Props</h5><p>到现在为止，我们在父组件中使用的是静态的参数传给props（子组件内部属性） <code>&lt;Blogpost customized-property=&quot;This is my title&quot;/&gt;</code> 但除此之外，我们还可以使用<code>v-bind</code>绑定父组件上的动态数据，来动态地向子组件内部单向传递数据： <code>&lt;Blogpost v-bind:customized-property=&quot;post.title&quot;/&gt;</code></p><h5 id="_3-传递不同的值类型" tabindex="-1"><a class="header-anchor" href="#_3-传递不同的值类型" aria-hidden="true">#</a> 3.传递不同的值类型</h5><h5 id="_4-使用一个对象绑定多个prop" tabindex="-1"><a class="header-anchor" href="#_4-使用一个对象绑定多个prop" aria-hidden="true">#</a> 4.使用一个对象绑定多个prop</h5><p>父组件使用一个对象向子组件传递多个prop的值， <code>&lt;Blogpost v-bind=&quot;obj&quot;/&gt;</code> obj是一个父组件的对象，这样写将所有obj的属性自动作为子组件的prop传入： <code>&lt;Blogpost prop1=&#39;obj.prop1&#39; prop2=&quot;obj.prop2&quot;&gt;</code></p><h5 id="_5-单向绑定" tabindex="-1"><a class="header-anchor" href="#_5-单向绑定" aria-hidden="true">#</a> 5.单向绑定</h5><p>props的属性是只读的，如果我们在子组件里面尝试更改一个prop，VUE则会抛出报错说prop是只读的，prop本来就是用于父组件向子组件传递数据的，所以数据只是单向流动的，父组件更新后，子组件里面的prop也会相应地更新，但是子组件里的更新（计算属性）不会同步到父组件，当然一般情况下子组件也不能更改prop</p><h5 id="_6-子组件更改自身的prop属性" tabindex="-1"><a class="header-anchor" href="#_6-子组件更改自身的prop属性" aria-hidden="true">#</a> 6.子组件更改自身的prop属性</h5><p>如果有一些情况下，子组件需要更改父组件传过来的prop怎么办？ 首先，访问props属性值的方式为this关键字\`this.prop 一般有两种场景：</p><ol><li>在子组件中定义局部的数据，但是使用传入的prop做为该数据的初始值</li><li>根据传入子组件的prop计算一个计算属性</li></ol><h5 id="_7-prop校验" tabindex="-1"><a class="header-anchor" href="#_7-prop校验" aria-hidden="true">#</a> 7.Prop校验</h5><p>prop的校验发生在组件的实例被创建之前，所以实例的属性不可用(data,computed等) type属性 required属性 default属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
  props: {
    // 基础类型检查
    //（给出 \`null\` 和 \`undefined\` 值则会跳过任何类型检查）
    propA: Number,
    // 多种可能的类型
    propB: [String, Number],
    // 必传，且为 String 类型
    propC: {
      type: String,
      required: true
    },
    // Number 类型的默认值
    propD: {
      type: Number,
      default: 100
    },
    // 对象类型的默认值
    propE: {
      type: Object,
      // 对象或者数组应当用工厂函数返回。
      // 工厂函数会收到组件所接收的原始 props
      // 作为参数
      default(rawProps) {
        return { message: &#39;hello&#39; }
      }
    },
    // 自定义类型校验函数
    propF: {
      validator(value) {
        // The value must match one of these strings
        return [&#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;].includes(value)
      }
    },
    // 函数类型的默认值
    propG: {
      type: Function,
      // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
      default() {
        return &#39;Default function&#39;
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[s];function a(o,p){return i(),n("div",null,l)}const c=e(d,[["render",a],["__file","Props选项.html.vue"]]);export{c as default};

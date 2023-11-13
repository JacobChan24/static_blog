import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9e438faa.js";const a={},l=d(`<h2 id="_1-构造函数-constructor-function" tabindex="-1"><a class="header-anchor" href="#_1-构造函数-constructor-function" aria-hidden="true">#</a> 1.构造函数 constructor function</h2><p>在JS中，构造函数是一种特殊的函数，用于创建和初始化批量同质化对象。构造函数其实跟函数没有差别，差别在于如下两点： [[创建对象的三种方式]]</p><ol><li>我们会认为地将构造函数首字母大写</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name,age){
	this.name = name
	this.age = age
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>我们搭配<code>new</code>关键字使用构造函数，否则就是普通的函数调用</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var john = new Person(&quot;john&quot;,24)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们使用关键字<code>new</code>调用一个构造函数时，JavaScript会创建一个新的对象，并将该对象的原型设置为构造函数的原型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name, age) {
  this.name = name;
  this.age = age;
}

var john = new Person(&#39;John&#39;, 30);
console.log(john.name); // 输出：&#39;John&#39;
console.log(john.age); // 输出：30

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，构造函数和普通函数在语法上没有任何区别，它们之间的区别在于它们的使用方式。当我们以构造函数的方式调用一个函数时，JavaScript会创建一个新的对象并将该对象的原型设置为构造函数的原型，然后将该对象作为函数的<code>this</code>上下文，并执行函数体中的代码。最后，如果该函数没有返回值或返回值不是对象，JavaScript会将该对象返回。</p><p>在实践中，构造函数常常用来创建对象模板，我们可以通过构造函数来创建多个对象，这些对象都具有相同的属性和方法。例如，在前端开发中，我们可以使用构造函数来创建多个UI组件对象，这些对象都具有相同的属性和方法。</p><h2 id="_2-原型" tabindex="-1"><a class="header-anchor" href="#_2-原型" aria-hidden="true">#</a> 2.原型</h2><h3 id="prototype和-proto" tabindex="-1"><a class="header-anchor" href="#prototype和-proto" aria-hidden="true">#</a> prototype和__proto__</h3><ol><li><p><code>prototype</code>属性 当我们创建一个函数时，JavaScript会为该函数自动添加一个名为 <code>prototype</code> 的属性，该属性的值是一个对象。我们可以将该对象看作是该函数的原型对象，即该函数的所有实例都可以访问该原型对象中的属性和方法。</p></li><li><p><code>__proto__</code> 而 <code>__proto__</code> 是每个 JavaScript 对象都具有的属性，用于指向该对象的原型。当我们创建一个对象时，JavaScript会自动为该对象添加一个名为 <code>__proto__</code> 的属性，并将该属性设置为构造函数的原型对象。</p></li></ol><p>简单来说，<code>.prototype</code> 是一个函数拥有的属性，它指向该函数的原型对象，而 <code>.__proto__</code> 则是每个对象都拥有的属性，它指向该对象的原型。</p><h2 id="_3-继承" tabindex="-1"><a class="header-anchor" href="#_3-继承" aria-hidden="true">#</a> 3.继承</h2><p>继承有两种方式：</p><ol><li>原型链继承</li><li>构造函数继承</li></ol><h4 id="_1原型链继承" tabindex="-1"><a class="header-anchor" href="#_1原型链继承" aria-hidden="true">#</a> ①原型链继承</h4><p>原型链继承就是：</p><blockquote><p>原型链继承是通过将子类的原型对象指向父类的实例来实现的。这样，子类就可以继承父类的属性和方法。</p></blockquote><p>具体的实现代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Parent() {
  this.name = &#39;Parent&#39;;
}
//构造函数可以通过.prototype来更改其原型
Parent.prototype.sayHello = function() {
  console.log(&#39;Hello from Parent&#39;);
};

function Child() {
  this.name = &#39;Child&#39;;
}
//这一行代码最重要
Child.prototype = new Parent();

var child = new Child();
console.log(child.name);  // &#39;Child&#39;
child.sayHello();  // &#39;Hello from Parent&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Child.prototype = new Parent()</code></p><p>在这个例子中，我们定义了 <code>Parent</code> 和 <code>Child</code> 两个构造函数。通过将 <code>Child</code> 的原型对象指向 <code>Parent</code> 的实例，<code>Child</code> 就可以继承 <code>Parent</code> 的属性和方法。</p><h4 id="_2构造函数继承" tabindex="-1"><a class="header-anchor" href="#_2构造函数继承" aria-hidden="true">#</a> ②构造函数继承</h4><p>构造函数继承是通过在子类的构造函数中调用父类的构造函数来实现的。这样，子类就可以继承父类的属性和方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function() {
  console.log(&#39;Hello from Parent&#39;);
};

function Child(name) {
  Parent.call(this, name);
}

var child = new Child(&#39;Child&#39;);
console.log(child.name);  // &#39;Child&#39;
child.sayHello();  // TypeError: child.sayHello is not a function

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上所述，原型链继承和构造函数继承都可以实现继承，但它们各有优缺点。原型链继承可以方便地继承父类的属性和方法，但是会有原型链共享和无法传递参数等问题；而构造函数继承可以解决上述问题，但是无法继承父类原型对象上的属性和方法。</p>`,28),s=[l];function o(r,c){return n(),i("div",null,s)}const u=e(a,[["render",o],["__file","D1 原型和继承.html.vue"]]);export{u as default};

import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as p}from"./app-9e438faa.js";const t={},r=p('<blockquote><p>权限系统是每位后台产品产品经理绕不过去的问题，好的权限系统可以明确公司内不同人员、不同部门的分工，降低操作风险发生概率，便于管理等优势。笔者曾负责过若干种后台系统的搭建，其中都绕不开“权限管理”，现愿意将我个人经验和工作中所产生的的思考与大家进行分享。</p></blockquote><figure><img src="https://image.woshipm.com/wp-files/2019/09/XoT26tDbB6j1T8eQSFE3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1-权限系统是什么" tabindex="-1"><a class="header-anchor" href="#_1-权限系统是什么" aria-hidden="true">#</a> 1. 权限系统是什么</h2><p>一句话概括，我个人认为权限系统就是：明确操作人员可在平台内能做什么。即什么样的人，可以做什么样的事，这并不难理解，我们的用户是所有可以登录该平台的人员。</p><h2 id="_2-权限系统应该怎么做" tabindex="-1"><a class="header-anchor" href="#_2-权限系统应该怎么做" aria-hidden="true">#</a> 2. 权限系统应该怎么做</h2><p>在这笔者先介绍一下“RBAC”结构的含义，所谓RBAC即：权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限。</p><p>由此可见，通常的权限管理，可分为三个部分及“用户管理”、“角色管理”和“权限管理”三个部分。</p><p>通常来说，用户与角色一一对应，一个用户对应一个角色；同一个角色可对应多个后台操作页面；若公司具有多个产品线，那么多个角色对应同一个产品。其结构如下图所示：</p><figure><img src="https://image.woshipm.com/wp-files/2019/09/8vRxoU9hRfIzrOMyWg82.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有些读者可能会有疑问，如果去掉“角色”概念，直接将用户与权限进行绑定是否可以减轻工作步骤？</p><p>表面上看来，如果没有“角色”，也可以为用户分配权限，但仔细思考后，会发现如下问题：</p><ol><li>若不同用户拥有相同权限，那么后台操作人员将重复配置多次。</li><li>若用户身份变更，需重新梳理权限。</li><li>若用户离职，将出现多个无用权限，造成垃圾数据。</li></ol><p>综上所述，RBAC结构可通过“角色”搭建用户与权限之间的关系，可在创建角色时绑定相应权限，再匹配到用户，可提高整体的效率以及稳定性。</p><h2 id="_3-权限系统三要素" tabindex="-1"><a class="header-anchor" href="#_3-权限系统三要素" aria-hidden="true">#</a> 3. 权限系统三要素</h2><p>前文已经讲过，权限系统的核心三个功能为：用户、角色和权限，下图为简要的脑图，可辅助理解。</p><figure><img src="https://image.woshipm.com/wp-files/2019/09/sncePQuoLWxCDzYT6Pmo.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-1-用户管理" tabindex="-1"><a class="header-anchor" href="#_3-1-用户管理" aria-hidden="true">#</a> 3.1 用户管理</h3><p>通常企业的后台管理系统，可以同企业内部OA或企业微信等系统间打通，当用新员工入职时，可主动申请后台相应权限，高级管理员（即权限分配者）根据用户的职责，分配具体的角色。若后台系统暂未与系统打通，则需管理员手动创建用户。</p><figure><img src="https://image.woshipm.com/wp-files/2019/09/6Qr1gbY0WPzdLcMrcuXd.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>用户界面原型图如上所示，该原型内为尚未连接企业OA，需手动创建用户，所有可登录后台的用户都将在表中展示。</p><p>添加用户的界面如下图所示：</p><figure><img src="https://image.woshipm.com/wp-files/2019/09/Al8AUKapuKqIdOZcxpL2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在创建用户时，需输入用户的基本信息，并直接为用户绑定角色，那么如何设定角色呢？这是我们下一步需要说明的问题。</p><p>细心的同学不难发现，上图页面中存在“修改权限”的按钮，该功能的存在是为了避免角色与权限的绑定过于僵化，可针对同一角色在不同用户使用时，进行微调，避免每次都产生新的角色。</p><h3 id="_3-2-角色管理" tabindex="-1"><a class="header-anchor" href="#_3-2-角色管理" aria-hidden="true">#</a> 3.2 角色管理</h3><p>角色可由两个维度确认：</p><ol><li>业务维度</li><li>等级维度</li></ol><p><strong>所谓业务</strong>相对来说方便理解，即不同的角色负责不同的功能，例如：配置专员，负责内容物料的配置以及上架；审核专员，负责上架前的审核工作。</p><p><strong>等级维度</strong>，即超级管理员、普通管理员和XX专员，超级管理员拥有针对所有用户添加角色、添加用户的权限，普通专员只能围绕自身业务进行管理，而专员的权限最弱，只负责基础的执行工作。</p><p>业务维度视平台的功能和业务定义，等级维度可按照系统复杂度以及人员架构方向确定。</p><figure><img src="https://image.woshipm.com/wp-files/2019/09/EwDrQtyGGG8L1vj2Ef6q.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>角色列表同用户列表一样，将展示平台内所有的角色，以及该角色对应的说明、人数以及状态（开启/关闭）。</p><p>创建角色的过程中，可为该角色配置相应的权限。可采用双向树结构或列表勾选的方式快速添加。</p><h3 id="_3-3-权限说明" tabindex="-1"><a class="header-anchor" href="#_3-3-权限说明" aria-hidden="true">#</a> 3.3 权限说明</h3><p>权限系统，离不开具体的权限，之所以放到最后，是因为权限相比较前面两个元素来说更为复杂。通常后台的权限分为：页面权限、操作权限和数据权限。</p><ul><li>**页面权限：**用户是否具备进入/浏览该页面的权限，例如，负责物料上传的运营人员，应有物料上架的页面权限，但无需数据埋点反馈的页面权限。</li><li>**操作权限：**在拥有页面权限后，是否可拥有对该页面进行操作的权限。例如，数据专员可以对数据统计后台的报表进行整合、下载等，但无法更改数据统计规则。</li><li>**数据权限：**数据权限较比于其他两个权限较为抽象。指的是用户是否有针对某些数据的浏览权限。例如，同一个管理后台内，可看到公司不同产品产品线的下载率、DAU、Crash率等等，但是作为某条产品线的员工，只能看到该产品线的数据，而无法对其他产品线的数据进行观测。</li></ul><p>通常页面权限和操作权限将会在权限列表中拉取系统内的所有页面和可进行的操作，通过树状图展示给操作人员，进行配置，而数据权限则需要贴合公司的业务进行分析。</p><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4. 总结</h2><p>以上就是笔者对于权限系统设计的思考与总结，后台系统的设计，没有绝对的好与坏，也没有DAU、MAU的压力，但是也有自己的独特之处即一定要围绕业务来做，以满足业务为核心，提高效率为目标。</p><p>如有机会，后续将会介绍CRM系统以及内容管理CMS系统。</p>',40),o=[r];function n(l,c){return a(),e("div",null,o)}const d=i(t,[["render",n],["__file","后台设计之权限管理.html.vue"]]);export{d as default};

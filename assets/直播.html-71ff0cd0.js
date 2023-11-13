import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as a,c as h,a as e,b as t,d as r,f as n}from"./app-9e438faa.js";const s={},p=n('<p>随着近些年技术及基础设施的迅猛发展，网络直播的核心技术体系已经趋于成熟，通过简单购买第三方厂商的服务，可以快速搭建起一个直播系统。</p><p>透过厂商们的兴旺，可以发现他们主要在解决三个问题：</p><ul><li>如何采集直播的内容</li><li>如何让用户看到直播的内容</li><li>如何让整个过程体验更好 (秒开、流畅、低延迟、美颜、更多互动)</li></ul><p>简单推演整个过程，可以总结为几大流程：</p><ol><li>音视频内容采集、处理 [主播端]</li><li>音视频内容编码 [主播端]</li><li>音视频编码结果混合 [主播端]</li><li>推流到中转站 [主播端] [网络]</li><li>从内容中转站拉取直播内容 [用户端] [网络]</li><li>音视频内容分离 [用户端]</li><li>音视频解码 [用户端]</li><li>用屏幕渲染视频，喇叭播放声音 [用户端]</li></ol><p>1～3 和 6～8 两组过程互逆， [流程 4] 推的内容和 [流程 5] 拉到的内容一样，通过网络传递数据。各个流程依次进行，流程间相互独立，各自分离，依赖不同的技术。</p><p>整个过程涉及了庞大的工业体系，每一个环节深入下去都是浩瀚的协议、算法，几十年沉淀的智慧结晶。</p><h2 id="采集" tabindex="-1"><a class="header-anchor" href="#采集" aria-hidden="true">#</a> <strong>采集</strong></h2><p>视频播放的本质，是一张张图片的连续滚动，1 张图片也被称做 1 帧，当每秒变化的图像数达到 24 帧/秒时，人眼就会认为是连续的画面。</p><p>视频的拍摄也就是每秒拍照 24 次以上，将照片依次播放即可看到 “画面” 被原样记录下来了。其中每秒拍摄的频率越高，播放时画面越流畅逼真。这是帧率 [1] 的含义。</p><p>现代数码相机 [2]，通过组合光敏二极管 [3] 构成感光元件，元件包含很多像素点，当光照打在感光元件上时，每个像素点会因为光照强度不同而产生不同强度的电流，借此就将光信号转换为电信号，同时在感光元件前置红绿蓝滤光片可以记录颜色 [4]，一缕光照可记录为一组包含光照强度和颜色的数字信号，即为一张照片。</p><p>其中每张图片的清晰度可以用像素密度 (PPI)[5] 来衡量，PPI 表示每英寸图像内有多少个像素点，像素点越多，图片越精细，对细节的还原度越高。每个像素点会被填充一种颜色，颜色值可由 RGB 二进制数据来表达。总之越精细，数据体越大。</p><p>帧率和 PPI 决定了视频的品质，品质高也意味着占用空间大。</p><p>音频作为一种模拟量，需要先进行数字化后才能进行保存和传输。声音是振动产生的声波，通过介质进行传播，将话筒置于声音之下，话筒中的线圈或电容会随着声波振荡，进而产生电信号。以固定频率采集电信号的值，即可记录声波的形态，进而将声波数字化，实现对模拟量进行采样 [6]，输出为一串数字序列。</p><p>采样的频率越高，对声音的还原度也越高。 将数字信号输入功放，通过数字量的变化控制喇叭鼓膜的震动幅度，即可还原出声波。</p><p>直播内容的采集，也就是对视频和音频的采集。由摄像头和话筒分别进行，可分别保存为二进制数据，这得益于已经成熟多年的技术。</p><p>简而言之，就是将人类能理解的自然信号 (音频、视频) 进行数字化，目的是进行储存和传输。</p><h2 id="处理" tabindex="-1"><a class="header-anchor" href="#处理" aria-hidden="true">#</a> <strong>处理</strong></h2><p>一般基于美颜、水印、连麦、滤镜、降噪、其他干预等等需求，会对采集到的原始数据进行加工处理，最常见的有美颜和连麦两个场景。</p><p><strong>直播的兴起很大程度上是因为有了美颜</strong>，把一些本来不能看的脸瞬间变成了颜值担当，一方面丰富了观众端的观看体验，也极大抚慰了主播对美的心里需求。</p><p>美颜主要是通过 [磨皮 + 美白 ] 来达到整体的效果。磨皮的技术术语是 [去噪]，也即对图像中的噪点进行去除或者模糊化处理，常见的去噪算法有均值模糊、高斯模糊和中值滤波等。 由于面部画面的复杂性，脸上的斑可能呈现出类似眼睛的形状，对整张图像 [去噪] 时可能会误伤眼睛，因此这个环节中需要使用到人脸和皮肤识别，这一般由深度学习和计算机视觉来搞定。</p><p>连麦是多个主播或用户之间的互动，一般直播画面里面只有一个主播。在商业上的考量，有时会创造两个主播 PK 的场景，此时观众端能在画面中同时看到超过一个主播或用户，而他们并没有在一起录制。</p><p>这其实是将多路直播的数据流在一处汇集，分别进行编解码后，按照标准进行实时合成，一般是各占半屏。然后将合并后的数据推送到数据中转站，用户看到的画面是经过合并处理后的内容。</p><p>相较于常规直播，这多了一次加工和传输的步骤，在音视频同步、实时合成数据、低延迟传输上有不小的挑战，一般都是有专业的第三方公司提供服务。</p><h2 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> <strong>编码</strong></h2><p>将采集处理后的二进制数据通过网络传输给观众，终端用硬件设备将视频和音频分别播放出来，这就是直播的过程。</p><p>然而直接录制的音视频数据体积很大，一小段高清视频可以有几百 M，网络传输负担非常大，这直接会影响播放体验，所以在进行网络传输前，需要将数据极力压缩，在保证质量的前提下让网络传输的数据最小。由此诞生了众多精妙光辉的编码算法，目前 H.264/H.265[7] 就是广泛使用的编解码标准之一。</p><p>相机拍摄视频中的每一帧都是一幅高清的图片，在播放过程中，相邻的帧之前有大部分画面内容是相似的，这就有很多数据的冗余。 <strong>编码压缩的本质就是将冗余的数据移除，只保留关键的部分</strong>，有两个方向：</p><ul><li>帧内压缩，图片本身局部有很多相似的地方，可以将图片分块，然后将冗余的地方去掉，相似的地方引用同一块数据，这可能会造成图片质量损失 [8]</li><li>[[帧间压缩]]，帧与帧之间有也有很多相似的地方，下一帧的部分内容完全可以由上一帧推算出来，**于是后面的帧数据就可以只记录一些偏移量，**压缩比可以非常大，且对质量影响有限</li></ul><p>H.264 非常复杂，其基本点是认为，一段时间内相邻的图像之间内容是相似渐变的，所以没有必要对每帧数据都进行完整记录，可以有一个参考点 (完整的一张图片)，后面的帧数据只记录变化的偏移量，基于参考点，叠加上偏移量和预测值，即可还原出真实的画面。</p><p>对一段时间内变化不大的画面可以组成一个[[序列]]，序列头部有一个基准图片，后面的帧数据基于基准进行还原。 当画面数据差异大到一定程度时，可以新起另一段序列，其中又包含一个新的基准图片和偏移数据，依次重复。</p><p>每个序列可以理解为一个画面组 (GOP)，也就是一段内容变化不大的画面。 一个 GOP 中即是一组帧数据，其帧数量可以自由定义。其中帧的分类有三种：</p><ul><li>IDR 帧或 I 帧，为了简单可以将两者理解为一回事。 IDR 帧就是上面所说的基准图片，代表了一段新的序列开始</li><li>P 帧，记录了偏移量和预测数据，基于 IDR 帧或前面的 P 帧进行图像还原，单向还原</li><li>B 帧，记录偏移量等数据，基于前面的 IDR 或 P 帧和后面的 P 帧进行数据还原，需要进行双向还原</li></ul><p>一组 GOP 的帧序列可以类似： IBBPBBPBBPBB， P 帧只依赖左边的 I 帧或 P 帧，B 帧则左右都依赖，还原中间状态的帧数据，这将视频数据压缩率极大提高。</p><p>播放端会收到一组组的 GOP 数据，对于每组数据，都将 I 帧加载到缓冲之中，后面的帧数据都基于此进行还原，当下一组 GOP 到来时，将缓冲区清空，换成下一组的 I 帧，依次递进。</p><p>基于 IDR 帧的关键地位，所以也被称为<strong>关键帧</strong>。 <strong>秒开的本质</strong>就是当用户端第一次拉流时，CDN 保证给的第一帧数据必须是 IDR 帧，这样播放端就可以立即将其加载到缓冲，并顺序还原后面的帧数据，并播放出来。</p><p>因为用户打开页面拉流的时机是完全随机的，大概率第一次拉流时是非 IDR 帧，拉到 IDR 帧的概率仅为： 1/GOP 帧的数量。当拉到非 IDR 帧时，其后面的帧数据由于没有基准点，就会是一堆无用的数据，无法进行还原，此时页面就会黑屏，直到下一组 GOP 到来。</p><p><strong>秒开地址</strong>为了解决这个黑屏问题，会在本地缓冲最近一组 GOP 中的 IDR 帧和 P 帧，当某个用户首次打开秒开地址时，会将缓冲的帧数据合并到当前的数据中，这样保证了第一次打开拉到的肯定是 IDR 帧，这样便解决黑屏问题，实现了 “秒开”。(或者二次解码重新设置很小的 GOP，这样下一个 IDR 帧会很快到来)</p><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> <strong>封装</strong></h2><p>音视频数据通过不同的硬件进行采集，并经过不同编码处理后，需要将两者打包到一起。合并有多个好处：</p><ul><li>音视频数据天然同步</li><li>打包在一起方便存放、处理</li><li>可以方便用一路网络通道进行传输</li><li>对播放器友好，不用单独分别加载视频和音频数据</li></ul><p>合并后的数据被称为多媒体容器，一个多媒体的内容集合，天然就包含了音视频数据。 多媒体容器有很多不同的实现，反正就是将音视频数据打包在一起，各有千秋。 而对这些容器的命名就是我们常常听说但又不甚了解的 .avi/.mp4/.flv/.rmvb 等等。</p><h2 id="传输" tabindex="-1"><a class="header-anchor" href="#传输" aria-hidden="true">#</a> <strong>传输</strong></h2><p>直播是典型的一对多的场景。 一般一个主播创造数据，却有海量的用户在观看，而且分散在大江南北。这在网络传输上就需要一个中转站 [13]，主播将数据推流到中转站，由中转站对数据进行转储分发，为海量用户提供服务。不像参与者有限的视频会议，可以简单多端直连。</p><p>主播端推流一般使用 RTMP[9] 协议，由于其的开放性和 CDN 厂商的广泛支持，普及度非常高。其基于 TCP 协议，有着复杂的协议配置，可以将数据分成一个个小块实时传输到 CDN 节点，CDN 服务器一般会对数据进行处理：</p><ul><li>生成不同清晰度的数据，高清、原画、标清···</li><li>转成多种协议 (HTTP-FLV/HLS/RTMP 等)</li><li>推送至专门的数据中转节点，供边缘节点拉取</li></ul><p>为多种终端提供差异化拉流服务，在 H5 或苹果终端上可以直接使用 HLS[10] 协议直接播放，它通过隔段时间下载一份视频索引文件，然后依次下载文件播放，这也使得延时较高，一般可以达到 10s 以上。</p><p>由于 Flash Player 及其广泛的存在和 HTTP 协议 (80 或 443 端口) 不容易被防火墙拦截的特点，HTTP-FLV[11] 目前被广泛使用，它通过 HTTP 长连接实时传输 FlV 文件，也使得延时可降低到 1～3 秒，播放端通过 HTTP 实时拉取到 FLV 文件后，通过 Flash Player 即可直接播放，接受度很高。</p><p>由于用户的海量性和分散性，让大部分用户低延迟、流畅地看到直播画面是相当大的挑战，需要根据网络拓扑进行优化，这是众多 CDN 厂商的核心价值。</p><p>要想直播数据更快、更稳定地传送到天南地北的用户端，无非两点：</p><ul><li>走更短的路，少路由转发 (BGP 网络 [15])</li><li>走更宽阔的路，少拥塞</li></ul><p>理想的场景是让用户连接上离自己最近、网络情况最好的 CDN 节点，然后 CDN 节点内部根据网络状况选择最佳路径或专线互联，避开各种拥堵的路线。</p><p>同时，CDN 节点之间传输数据时，可以将 TCP 传输窗口调到最大，用相对激进的方式传输数据，发挥以太网的传输能力。避免普通公网由于网络拥堵触发拥塞避免策略 [12]，TCP 窗口上不去，传输缓慢的问题。[13]</p><p>传统的 DNS 策略，对一个域名如果本地有缓存则直接使用对应的 IP，如果没有缓存，则向 DNS 服务器获取 IP，然后向 IP 发起请求。 在 CDN 策略下，这个过程稍有不同。</p>',54),c={href:"https://link.zhihu.com/?target=http%3A//www.live.com",target:"_blank",rel:"noopener noreferrer"},d={href:"https://link.zhihu.com/?target=http%3A//www.cdn.live.com",target:"_blank",rel:"noopener noreferrer"},u={href:"https://link.zhihu.com/?target=http%3A//www.live.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://link.zhihu.com/?target=http%3A//www.cdn.live.com",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[t("本地 DNS 继续获取全局负载均衡器域名的解析 IP 地址，全局负载均衡器 DNS 服务会根据用户的 IP 地址、所处运营商、访问的路径等信息，返回"),e("strong",null,"一个最适合用户访问的 IP 地址"),t("(一般是离用户最近的节点，在上海就返回上海的节点，你在新疆就返回新疆的节点，退而求其次也会返回附近如成都的节点)")],-1),m=e("li",null,"用户向这个边缘节点发起请求",-1),b=e("li",null,"边缘节点选择一条最佳的回源路径到数据节点，获取到数据后返回给用户",-1),f=n('<p>对于直播的海量流式数据，当新的数据产生时，CDN 也会选择主动将数据推送到边缘节点，用户可以直接从离自己最近的边缘节点获取数据，避免全流程回源，得到低延迟稳定的服务。这比静态资源访问策略稍微复杂些，不像 js/css 这种资源可以简单逐层缓存，直播的每一份数据时效性都非常低，过时即焚。</p><p>CDN 厂商散部在大江南北乃至全球的边缘节点，和其内部节点网络间优质的连通策略和路径，就是最核心的竞争力。因为对 CDN 网络的依赖，很多基于 UDP 的自建协议来提高网络传输效率的方案很难实施，因为标准不统一，要让各家 CDN 厂商支持，难度极大。</p><h2 id="播放" tabindex="-1"><a class="header-anchor" href="#播放" aria-hidden="true">#</a> <strong>播放</strong></h2><ol><li>通过成熟的技术采集音视频数据</li><li>用复杂编码算法降低数据体积</li><li>经过高度优化的 CDN 网络传输数据</li></ol><p>接下来就是直播的最后一步： 播放，现代播放器 [14] 也是个超级复杂的东西，它主要做三件事情：</p><ul><li>拉取到直播流数据，处理网络等问题</li><li>对数据类型进行实时解码，要覆盖各种编解码协议并做兼容</li><li>将解码后的音视频呈现出来，并叠加上一些业务数据 (如弹幕、广告)</li></ul><p>其核心流程可以归纳为：</p><ol><li>从播放地址，用对应的协议拉取实时数据，可能需要对数据排序</li><li>根据封装协议将多媒体数据分解为音频、视频 (flv)</li><li>根据音视频数据编码协议，对数据进行解码 (H.264)</li><li>根据解码后的帧数据播放，渲染画面，播放音频</li><li>叠加显示业务数据，如弹幕、广告、水印等</li></ol><p>可以看出上面的过程就是采集、编码、封装的逆过程。将数字化的东西转换为视觉、听觉信号，供人类观看。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> <strong>总结</strong></h2><p>行文至此，可以看到直播的这些技术，<strong>本质上是在打破自然界光线、声音传播的绝对性约束</strong>(音速、光线散射)， 将一个时空中的人类信号，变换到另一个时空进行重放，并在此基础上叠加上商业的元素，对原本简单朴素的东西 (主播侧的内容) 进行无限价值放大。</p><p><strong>这只有人类能够做到</strong>。</p><p>由于整个体系庞大复杂，个人水平有限，即糙述至此，建议到参考资料中深入了解。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> <strong>参考资料</strong></h2>',14),P={href:"https://link.zhihu.com/?target=https%3A//baike.baidu.com/item/%25E5%25B8%25A7%25E7%258E%2587/1052590%3Ffr%3Daladdin",target:"_blank",rel:"noopener noreferrer"},w={href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/HelloZEX/article/details/80901766",target:"_blank",rel:"noopener noreferrer"},k={href:"https://link.zhihu.com/?target=https%3A//baike.so.com/doc/6665185-6879013.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/youmingyu/article/details/52572977",target:"_blank",rel:"noopener noreferrer"},I={href:"https://link.zhihu.com/?target=https%3A//baike.baidu.com/item/PPI/7922913",target:"_blank",rel:"noopener noreferrer"},N={href:"https://link.zhihu.com/?target=https%3A//www.cnblogs.com/MaxWoods/archive/2006/11/01/547070.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/go_str/article/details/80340564",target:"_blank",rel:"noopener noreferrer"},C={href:"https://zhuanlan.zhihu.com/p/22544282",target:"_blank",rel:"noopener noreferrer"},A={href:"https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/b2144f9bbe28",target:"_blank",rel:"noopener noreferrer"},T={href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/u011857683/article/details/84863250",target:"_blank",rel:"noopener noreferrer"},B={href:"https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/bfdba8ab903a",target:"_blank",rel:"noopener noreferrer"},v={href:"https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/a1f6bde61053",target:"_blank",rel:"noopener noreferrer"},H={href:"https://link.zhihu.com/?target=https%3A//blog.csdn.net/zhanglong_4444/article/details/89157854",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhuanlan.zhihu.com/p/22693248",target:"_blank",rel:"noopener noreferrer"},R={href:"https://link.zhihu.com/?target=https%3A//www.cnblogs.com/Anker/p/8166294.html",target:"_blank",rel:"noopener noreferrer"};function E(G,S){const l=i("ExternalLinkIcon");return a(),h("div",null,[p,e("p",null,[t("对于某个公司的直播域名，如 "),e("a",c,[t("http://www.live.com"),r(l)]),t("，在权威 DNS 服务器上，它不会直接指向某个 IP，而是会 CNAME 到一个新的域名，类似 "),e("a",d,[t("http://www.cdn.live.com"),r(l)]),t("，这是 CND 服务商自己的域名，整个过程如下：")]),e("ol",null,[e("li",null,[t("本地 DNS 服务尝试获取 "),e("a",u,[t("http://www.live.com"),r(l)]),t(" 的解析 IP 地址，会得到 CNAME 结果")]),e("li",null,[t("本地 DNS 继续尝试获取 "),e("a",g,[t("http://www.cdn.live.com"),r(l)]),t(" 的解析 IP 地址，这个域名的解析还是 CNAME 到一个新的域名，一般是 CDN 服务商的全局负载均衡器的域名，具体解析依赖 CDN 自己的域名服务")]),_,m,b]),f,e("ul",null,[e("li",null,[t("[1] 帧率 "),e("a",P,[t("https://baike.baidu.com/item/%E5%B8%A7%E7%8E%87/1052590?fr=aladdin"),r(l)])]),e("li",null,[t("[2] 现代数码相机原理 ("),e("a",w,[t("https://blog.csdn.net/HelloZEX/article/details/80901766"),r(l)])]),e("li",null,[t("[3] 光敏二极管 "),e("a",k,[t("https://baike.so.com/doc/6665185-6879013.html"),r(l)])]),e("li",null,[t("[4] 拜耳滤镜 "),e("a",D,[t("https://blog.csdn.net/youmingyu/article/details/52572977"),r(l)])]),e("li",null,[t("[5] PPI "),e("a",I,[t("https://baike.baidu.com/item/PPI/7922913"),r(l)])]),e("li",null,[t("[6] 音频采样 "),e("a",N,[t("https://www.cnblogs.com/MaxWoods/archive/2006/11/01/547070.html"),r(l)])]),e("li",null,[t("[7] H264 编码 "),e("a",z,[t("https://blog.csdn.net/go_str/article/details/80340564"),r(l)])]),e("li",null,[t("[8] 视频中的编码 "),e("a",C,[t("https://zhuanlan.zhihu.com/p/22544282"),r(l)])]),e("li",null,[t("[9] RTMP 协议 "),e("a",A,[t("https://www.jianshu.com/p/b2144f9bbe28"),r(l)])]),e("li",null,[t("[10] HLS 协议 "),e("a",T,[t("https://blog.csdn.net/u011857683/article/details/84863250"),r(l)])]),e("li",null,[t("[11] HTTP-FLV "),e("a",B,[t("https://www.jianshu.com/p/bfdba8ab903a"),r(l)])]),e("li",null,[t("[12] 滑动窗口 "),e("a",v,[t("https://www.jianshu.com/p/a1f6bde61053"),r(l)])]),e("li",null,[t("[13] 刘超-CDN 原理 "),e("a",H,[t("https://blog.csdn.net/zhanglong_4444/article/details/89157854"),r(l)])]),e("li",null,[t("[14] 现代播放器原理 "),e("a",x,[t("https://zhuanlan.zhihu.com/p/22693248"),r(l)])]),e("li",null,[t("[15] BGP "),e("a",R,[t("https://www.cnblogs.com/Anker/p/816"),r(l)])])])])}const O=o(s,[["render",E],["__file","直播.html.vue"]]);export{O as default};

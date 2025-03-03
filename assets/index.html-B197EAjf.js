import{_ as s,c,a as n,e as o,b as t,w as l,d as r,r as i,o as p}from"./app-B-I4GUly.js";const g={};function m(u,e){const d=i("LinkCard"),a=i("CardGrid");return p(),c("div",null,[e[0]||(e[0]=n('<h2 id="什么是域名" tabindex="-1"><a class="header-anchor" href="#什么是域名"><span>什么是域名?</span></a></h2><p><strong>域名</strong> 是互联网上用于标识一个网站或网络服务的名称，方便用户访问。它由多个部分组成，通常包括顶级域（TLD）、二级域名和子域名。</p><ul><li><strong>顶级域（TLD）</strong>：如 <code>.com</code>、<code>.org</code>、<code>.cn</code> 等。</li><li><strong>二级域名</strong>：如 <code>google</code> 在 <code>google.com</code> 中。</li><li><strong>子域名</strong>：如 <code>www</code>、<code>mail</code> 等，位于二级域名左边。</li></ul><p>域名通过 <strong>DNS（域名系统）</strong> 进行解析，将域名转换为 IP 地址，使得浏览器可以访问对应的服务器。</p><p>简而言之，域名是便于人们记忆的互联网地址，替代了数字化的 IP 地址，帮助用户轻松访问网站。</p><h2 id="相关网站便捷跳转" tabindex="-1"><a class="header-anchor" href="#相关网站便捷跳转"><span>相关网站便捷跳转</span></a></h2>',6)),o(a,null,{default:l(()=>[o(d,{icon:"devicon:cloudflare",title:"Cloudflare",href:"https://www.cloudflare.com/zh-cn"})]),_:1}),o(a,null,{default:l(()=>[o(d,{icon:"logos:namecheap",title:"Namecheap",href:"https://www.namecheap.com"})]),_:1}),e[1]||(e[1]=t("h2",{id:"github-page-配置自定义域名",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github-page-配置自定义域名"},[t("span",null,"Github Page 配置自定义域名")])],-1)),e[2]||(e[2]=t("p",null,[t("mark",null,"自定义域名配置指南")],-1)),e[3]||(e[3]=t("p",null,"对于 GitHub 的 Pages 页的自定义域名配置，可以参考以下的文章：",-1)),o(a,null,{default:l(()=>[o(d,{title:"🌈 GitHub Pages 自定义域名配置指南",href:"https://blog.csdn.net/qq_34902437/article/details/140298754"})]),_:1}),e[4]||(e[4]=t("p",null,[t("mark",null,"如何在 Namecheap 上购买国外域名?")],-1)),e[5]||(e[5]=t("p",null,"你可以按照以下链接中的指南，了解如何在 Namecheap 上购买域名：",-1)),o(a,null,{default:l(()=>[o(d,{title:"🌈 如何在 Namecheap 上购买国外域名?",href:"https://blog.csdn.net/qq_21955513/article/details/136906944"})]),_:1}),e[6]||(e[6]=t("hr",null,null,-1)),e[7]||(e[7]=t("p",null,[t("mark",null,"在国内购买 Namecheap 域名的支付方式")],-1)),e[8]||(e[8]=t("p",null,[r("由于国内无法直接使用支付软件进行支付，你需要使用 "),t("strong",null,"Wildcard"),r(" 网站申请虚拟信用卡。详细注册流程可以参考以下链接：")],-1)),o(a,null,{default:l(()=>[o(d,{title:"🌈 虚拟信用卡 WildCard 官方详细注册流程",href:"https://www.laodengai.com/register-wildcard"})]),_:1}),e[9]||(e[9]=t("p",null,[t("mark",null,"GitHub Pages启用 Cloudflare加速及HTTPS")],-1)),o(a,null,{default:l(()=>[o(d,{title:"🌈 GitHub Pages启用 Cloudflare加速及HTTPS",href:"https://siriusq.top/github-pages-%E5%90%AF%E7%94%A8-cloudflare-%E5%8A%A0%E9%80%9F%E5%8F%8A-https.html"})]),_:1}),e[10]||(e[10]=n('<hr><p>Namecheap Advanced DNS 配置</p><p>以下是 Namecheap 的 Advanced DNS 配置，适用于将域名与 GitHub Pages 关联：</p><table><thead><tr><th><strong>Type</strong></th><th><strong>Host</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>A</td><td>@</td><td>185.199.109.153</td></tr><tr><td>A</td><td>@</td><td>185.199.110.153</td></tr><tr><td>A</td><td>@</td><td>185.199.111.153</td></tr><tr><td>CNAME</td><td>www</td><td>your-username.github.io</td></tr></tbody></table><blockquote><p>请确保将 <code>your-username</code> 替换为你的 GitHub 用户名。</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>A 记录 将根域名 paiad.online 指向 GitHub Pages 的 IP 地址。</p><p>CNAME 记录 将 www.paiad.online 指向你的 GitHub Pages 页面。</p></div><h2 id="关于域名的介绍" tabindex="-1"><a class="header-anchor" href="#关于域名的介绍"><span>关于域名的介绍</span></a></h2><h3 id="_1-域名层级结构" tabindex="-1"><a class="header-anchor" href="#_1-域名层级结构"><span>1. <strong>域名层级结构</strong></span></a></h3><ul><li><p><strong>一级域名（顶级域名 TLD）</strong>：是域名的最后部分，例如 <code>.com</code>、<code>.org</code>、<code>.net</code>，还有国家代码顶级域名（如 <code>.cn</code>、<code>.us</code>、<code>.jp</code> 等）。例如在 <code>example.com</code> 中，<code>com</code> 就是顶级域名。</p></li><li><p><strong>二级域名（Second-level Domain）</strong>：是紧跟在顶级域名前面的部分。一般情况下，二级域名是指企业、网站或个人的域名名称。例如，<code>example.com</code> 中的 <code>example</code> 就是二级域名。也可以理解为一个品牌或者一个主域名。</p></li><li><p><strong>三级域名（Third-level Domain）</strong>：是紧跟在二级域名之前的部分。通常，三级域名用于表示网站的不同子部分或子服务，例如 <code>blog.example.com</code>、<code>mail.example.com</code>，其中 <code>blog</code> 和 <code>mail</code> 就是三级域名。</p></li></ul><h3 id="_2-层级示例" tabindex="-1"><a class="header-anchor" href="#_2-层级示例"><span>2. <strong>层级示例</strong></span></a></h3><p>以 <code>blog.example.com</code> 为例：</p><ul><li><code>com</code> 是<strong>顶级域名</strong>（TLD）。</li><li><code>example</code> 是<strong>二级域名</strong>（Second-level Domain）。</li><li><code>blog</code> 是<strong>三级域名</strong>（Third-level Domain）。</li></ul><h3 id="_3-功能和使用" tabindex="-1"><a class="header-anchor" href="#_3-功能和使用"><span>3. <strong>功能和使用</strong></span></a></h3><ul><li><p><strong>二级域名</strong>：通常是主域名，代表网站的品牌或主题，是网站的主要入口。例如，你的公司域名 <code>company.com</code> 就是一个二级域名，代表你的公司。你可以通过购买二级域名来构建你的品牌和网站。</p></li><li><p><strong>三级域名</strong>：用于为不同的子服务、子网站或不同部门创建子域。通常，三级域名用来区分不同的功能部分。例如：</p><ul><li><code>blog.example.com</code>：指向一个专门的博客页面。</li><li><code>shop.example.com</code>：指向商店页面。</li><li><code>mail.example.com</code>：指向邮件服务。</li></ul></li></ul><h3 id="_4-dns-配置" tabindex="-1"><a class="header-anchor" href="#_4-dns-配置"><span>4. <strong>DNS 配置</strong></span></a></h3><ul><li><strong>二级域名</strong>：你购买的域名通常是二级域名，例如 <code>example.com</code>。你可以为它配置各种服务，比如邮件服务、网页托管等。</li><li><strong>三级域名</strong>：在二级域名下你可以创建任意数量的三级域名。例如，你可以在 <code>example.com</code> 下创建 <code>blog.example.com</code>，并将其指向特定的 IP 地址或服务。</li></ul><h3 id="_5-区别总结" tabindex="-1"><a class="header-anchor" href="#_5-区别总结"><span>5. <strong>区别总结</strong></span></a></h3><table><thead><tr><th>级别</th><th>例子</th><th>描述</th></tr></thead><tbody><tr><td>一级域名</td><td><code>.com</code>、<code>.org</code>、<code>.cn</code></td><td>顶级域名，表示域名的类型或国家/地区</td></tr><tr><td>二级域名</td><td><code>example.com</code></td><td>主域名，通常用于表示网站或公司名称</td></tr><tr><td>三级域名</td><td><code>blog.example.com</code></td><td>子域名，表示该域名下的特定服务或部分</td></tr></tbody></table><p>总结：</p><ul><li><strong>二级域名</strong>：是你购买的域名，通常是代表某个网站、公司或品牌。</li><li><strong>三级域名</strong>：是你在二级域名下创建的子域，用来指向网站的不同部分或服务。</li></ul>',20))])}const b=s(g,[["render",m],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/article/p9ts1au1/","title":"🎈域名购买与配置","lang":"zh-CN","frontmatter":{"title":"🎈域名购买与配置","tags":["DNS","Wildcard","Namecheap"],"createTime":"2025/1/10 01:33:57","excerpt":"GitHub Pages 是 GitHub 提供的免费托管静态网页的服务，可以用来展示个人网站、项目文档或博客，适合 HTML、CSS 和 JavaScript 文件。用户只需将网页文件上传到 GitHub 仓库并启用 GitHub Pages，GitHub 就会自动提供访问链接。","permalink":"/article/p9ts1au1/"},"headers":[],"readingTime":{"minutes":4.13,"words":1240},"git":{"updatedTime":1738508802000,"contributors":[{"name":"paiad","username":"paiad","email":"2369538173@qq.com","commits":10,"avatar":"https://avatars.githubusercontent.com/paiad?v=4","url":"https://github.com/paiad"}]},"filePathRelative":"learning/multi/DNS.md","categoryList":[{"id":"25a9ac","sort":10005,"name":"learning"},{"id":"e7f12e","sort":10007,"name":"multi"}]}');export{b as comp,f as data};

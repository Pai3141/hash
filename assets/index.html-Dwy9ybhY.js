import{_ as a,c as n,a as e,o as i}from"./app-B-I4GUly.js";const l={};function t(p,s){return i(),n("div",null,s[0]||(s[0]=[e(`<blockquote><p>🌈 项目地址： <a href="https://gitee.com/redemptionad/hash" target="_blank" rel="noopener noreferrer">Hash后端(Hash Back-end)</a></p></blockquote><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2><p>本项目旨在构建一个通用的后端框架，涵盖了MyBatisPlus、WebSocket、RabbitMQ等多种技术栈，并融入了代码生成器。 我们的目标是通过一系列强大的工具和技术，使开发者能够专注于业务逻辑的实现，而不是在基础设施的构建和维护上浪费时间。 我们致力于提供一个高效、可扩展的后端框架，帮助开发者快速构建稳定、可靠的后端服务。</p><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h2><ul><li>☕️ <strong>Java 17</strong> 或更高版本</li><li>🌱 <strong>Spring Boot 3.0.0</strong> 或更高版本</li><li>🐬 <strong>MySQL 8.0</strong> 或更高版本</li><li>🚀 <strong>Redis 6.0</strong> 或更高版本</li><li>📦 <strong>Maven 3.9.6</strong> 或以上</li><li>📖 <strong>Git</strong> (Gitee、GitHub)</li></ul><h2 id="五大模块" tabindex="-1"><a class="header-anchor" href="#五大模块"><span>五大模块</span></a></h2><h3 id="依赖的传递关系" tabindex="-1"><a class="header-anchor" href="#依赖的传递关系"><span>依赖的传递关系</span></a></h3><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash-common</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] → [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash-system</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] → [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash-framework</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] → [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash-server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash-common</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] → [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hash-generator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-通用工具模块-hash-common-🛠️" tabindex="-1"><a class="header-anchor" href="#_1-通用工具模块-hash-common-🛠️"><span>1. 通用工具模块 (hash-common) 🛠️</span></a></h3><div class="language-plaintext line-numbers-mode" data-ext="plaintext" data-title="plaintext"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── hash-common</span></span>
<span class="line"><span>    └── annotation   # 注解</span></span>
<span class="line"><span>    └── constant     # 常量</span></span>
<span class="line"><span>    └── enums        # 枚举类</span></span>
<span class="line"><span>    └── exception    # 异常类</span></span>
<span class="line"><span>    └── result       # 封装的返回结果</span></span>
<span class="line"><span>    └── utils        # 工具类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-系统模块-hash-system-🏗️" tabindex="-1"><a class="header-anchor" href="#_2-系统模块-hash-system-🏗️"><span>2. 系统模块 (hash-system) 🏗️</span></a></h3><div class="language-plaintext line-numbers-mode" data-ext="plaintext" data-title="plaintext"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── hash-system</span></span>
<span class="line"><span>    └── holder       # 线程变量</span></span>
<span class="line"><span>    └── mapper       # 持久层</span></span>
<span class="line"><span>    └── pojo         # 实体类</span></span>
<span class="line"><span>         └── dto     # 数据传输对象</span></span>
<span class="line"><span>         └── po      # 实体类</span></span>
<span class="line"><span>         └── vo      # 视图对象</span></span>
<span class="line"><span>    └── service      # 业务层</span></span>
<span class="line"><span>    └── validate     # 校验接口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-核心模块-hash-framework-⚙️" tabindex="-1"><a class="header-anchor" href="#_3-核心模块-hash-framework-⚙️"><span>3. 核心模块 (hash-framework) ⚙️</span></a></h3><div class="language-plaintext line-numbers-mode" data-ext="plaintext" data-title="plaintext"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── hash-framework</span></span>
<span class="line"><span>    └── aspect          # 切面类</span></span>
<span class="line"><span>    └── config          # 配置类</span></span>
<span class="line"><span>         └── listener   # 监听器</span></span>
<span class="line"><span>    └── handler         # 处理器</span></span>
<span class="line"><span>    └── interceptor     # 拦截器</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-服务入口模块-hash-server-🚪" tabindex="-1"><a class="header-anchor" href="#_4-服务入口模块-hash-server-🚪"><span>4. 服务入口模块 (hash-server) 🚪</span></a></h3><div class="language-plaintext line-numbers-mode" data-ext="plaintext" data-title="plaintext"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── hash-server</span></span>
<span class="line"><span>    └── controller       # 控制层</span></span>
<span class="line"><span>    └── core.config      # 核心配置类</span></span>
<span class="line"><span>    └── 🚀HashApplication  # 启动类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-代码生成模块-hash-generator-🔧" tabindex="-1"><a class="header-anchor" href="#_5-代码生成模块-hash-generator-🔧"><span>5. 代码生成模块 (hash-generator) 🔧</span></a></h3><div class="language-plaintext line-numbers-mode" data-ext="plaintext" data-title="plaintext"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── hash-generator</span></span>
<span class="line"><span>    └── template       # 模板文件夹</span></span>
<span class="line"><span>    └── utils          # 工具类</span></span>
<span class="line"><span>    └── CodeGenerator  # 启动类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器"><span><strong>代码生成器</strong></span></a></h2><blockquote><ol><li>使用 Java 的模板引擎 Velocity 实现了 Controller 层的初步构建。</li><li>对于 Service、Mapper 和 Pojo 层的生成，使用 MybatisX 插件自动生成代码。</li></ol></blockquote>`,20)]))}const d=a(l,[["render",t],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/article/pjnsvz2j/","title":"🚀Hash后端","lang":"zh-CN","frontmatter":{"title":"🚀Hash后端","tags":["SpringBoot","Mysql","Redis"],"createTime":"2024/11/04 12:36:04","permalink":"/article/pjnsvz2j/"},"headers":[],"readingTime":{"minutes":1.48,"words":443},"git":{"updatedTime":1737466414000,"contributors":[{"name":"paiad","username":"paiad","email":"2369538173@qq.com","commits":5,"avatar":"https://avatars.githubusercontent.com/paiad?v=4","url":"https://github.com/paiad"}]},"filePathRelative":"learning/project/Hash.md","categoryList":[{"id":"25a9ac","sort":10005,"name":"learning"},{"id":"01d76d","sort":10006,"name":"project"}]}');export{d as comp,h as data};

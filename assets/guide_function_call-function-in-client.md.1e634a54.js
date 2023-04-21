import{_ as n,c as l,x as s,a as e,t as o,U as p,o as t}from"./chunks/framework.6f6f51de.js";const m=JSON.parse('{"title":"在客户端中调用","description":"","frontmatter":{"title":"在客户端中调用"},"headers":[],"relativePath":"guide/function/call-function-in-client.md"}'),c={name:"guide/function/call-function-in-client.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=p(`<p>云函数编写完成并发布后，客户端可通过 <code>laf-client-sdk</code> 进行调用。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>目前 SDK 暂时只支持发送 POST 请求</p></div><h2 id="前端项目中安装sdk" tabindex="-1">前端项目中安装sdk <a class="header-anchor" href="#前端项目中安装sdk" aria-label="Permalink to &quot;前端项目中安装sdk&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">laf-client-sdk</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="初始化-cloud-对象" tabindex="-1">初始化 <code>cloud</code> 对象 <a class="header-anchor" href="#初始化-cloud-对象" aria-label="Permalink to &quot;初始化 \`cloud\` 对象&quot;">​</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cloud</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">laf-client-sdk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cloud </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Cloud</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">baseUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://APPID.laf.run</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// APPID 在首页应用列表获取</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">getAccessToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// 这里不需要授权，先填空</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="调用云函数" tabindex="-1">调用云函数 <a class="header-anchor" href="#调用云函数" aria-label="Permalink to &quot;调用云函数&quot;">​</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 这里的第一个参数就是云函数的名字，第二个参数是传入的数据，对应云函数中的 ctx.body</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> cloud</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">invoke</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get-user-info</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> userid </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res)     </span><span style="color:#676E95;font-style:italic;">// 这里的 res 是云函数中 return 的内容</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>怎么样，是不是很方便， 只需简单的配置和一行代码即可实现对云函数的调用。</p><h2 id="laf-client-sdk-详细文档" tabindex="-1">laf-client-sdk 详细文档 <a class="header-anchor" href="#laf-client-sdk-详细文档" aria-label="Permalink to &quot;laf-client-sdk 详细文档&quot;">​</a></h2><p>查看详细文档：<a href="/guide/client-sdk/">client-sdk</a></p>`,11);function D(a,d,C,A,F,u){return t(),l("div",null,[s("h1",r,[e(o(a.$frontmatter.title)+" ",1),i]),y])}const h=n(c,[["render",D]]);export{m as __pageData,h as default};

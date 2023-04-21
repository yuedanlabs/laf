import{_ as a,c as l,x as s,a as p,t as e,U as o,o as t}from"./chunks/framework.6f6f51de.js";const A=JSON.parse('{"title":"云函数Cloud SDK API文档","description":"","frontmatter":{"title":"云函数Cloud SDK API文档"},"headers":[],"relativePath":"api/cloud.md"}'),c={name:"api/cloud.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=o(`<h2 id="cloudsdkinterface" tabindex="-1">CloudSdkInterface <a class="header-anchor" href="#cloudsdkinterface" aria-label="Permalink to &quot;CloudSdkInterface&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CloudSdkInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 发送 HTTP 请求，实为 Axios 实例，使用可直接参考 axios 文档</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">fetch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AxiosStatic</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取 database ORM 实例</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">database</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Db</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 调用云函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">invoke</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InvokeFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 抛出云函数事件，其它云函数可设置触发器监听此类事件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">emit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EmitFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 云函数全局内存单例对象，可跨多次调用、不同云函数之间共享数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 1. 可将一些全局配置初始化到 shared 中，如微信开发信息、短信发送配置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 2. 可共享一些常用方法，如 checkPermission 等，以提升云函数性能</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 3. 可做热数据的缓存，建议少量使用（此对象是在 node vm 堆中分配，因为 node vm 堆内存限制）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">shared</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 获取 JWT Token，若缺省 \`secret\`，则使用当前服务器的密钥做签名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GetTokenFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 解析 JWT Token，若缺省 \`secret\`，则使用当前服务器的密钥做签名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">parseToken</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ParseTokenFunctionType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 当前应用的 MongoDb Node.js Driver 实例对象。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 由于 Laf database ORM 对象只有部分数据操作能力，故暴露此对象给云函数，让云函数拥有完整的数据库操作能力：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 1. 事务操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   const session = mongo.client.startSession()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   try {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *     await session.withTransaction(async () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *       await mongo.db.collection(&#39;xxx&#39;).updateOne({}, { session })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *       await mongo.db.collection(&#39;yyy&#39;).deleteMany({}, { session })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *       // ...</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *     })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   } finally {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *     await session.endSession()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 2. 索引管理</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   *    mongo.db.collection(&#39;admins&#39;).createIndex(&#39;username&#39;, { unique: true })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   * 3. 聚合操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mongo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MongoDriverObject</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,2);function b(n,u,m,D,C,F){return t(),l("div",null,[s("h1",r,[p(e(n.$frontmatter.title)+" ",1),i]),y])}const d=a(c,[["render",b]]);export{A as __pageData,d as default};

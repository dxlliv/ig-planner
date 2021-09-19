import{o as a,c as n,a as s}from"./app.ea3a41a5.js";const e='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Set up a new profile","slug":"set-up-a-new-profile"},{"level":3,"title":"Add some media","slug":"add-some-media"},{"level":2,"title":"Keyboard shortcuts","slug":"keyboard-shortcuts"}],"relativePath":"getting-started.md","lastUpdated":1632089904796}',t={},o=[s('<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Clone the repository and enter the directory:</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/dvilla8/ig-planner.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ig-planner\n</code></pre></div><p>Install dependencies and run this project with <code>yarn</code> or <code>npm</code>:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run dev\n\n<span class="token comment"># or use yarn</span>\n<span class="token function">yarn</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> dev\n</code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>You can find profiles configuration in <code>config/profiles.json</code>.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;dxlliv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;details&quot;</span><span class="token operator">:</span>  <span class="token punctuation">{</span>\n      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dxlliv&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Developer of things&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avatar.jpg&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;followers&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;following&quot;</span><span class="token operator">:</span> <span class="token number">50</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;media&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;3.jpg&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;2.jpg&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;1.jpg&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="set-up-a-new-profile" tabindex="-1">Set up a new profile <a class="header-anchor" href="#set-up-a-new-profile" aria-hidden="true">#</a></h3><p>Define in the profiles configuration a new profile <code>id</code> (it can be your username) and copy the profile object structure. Then create a folder in <code>public/profiles</code> with the id <code>id</code> of the profile you added.</p><p>An avatar should be placed as <code>avatar.jpg</code> in your profile folder.<br> Create also a folder called <code>media</code> in <code>public/profiles/{id}/</code>.</p><h3 id="add-some-media" tabindex="-1">Add some media <a class="header-anchor" href="#add-some-media" aria-hidden="true">#</a></h3><p>Instagram Planner supports all kind of media: images, videos, albums and reels.<br> Just add your files in the media profiles folder in <code>public/profiles/{id}/media/</code>.</p><h2 id="keyboard-shortcuts" tabindex="-1">Keyboard shortcuts <a class="header-anchor" href="#keyboard-shortcuts" aria-hidden="true">#</a></h2><p>Press <strong>R</strong> to show some rulers.<br> Press <strong>D</strong> to toggle dark theme.</p>',16)];t.render=function(s,e,t,p,r,i){return a(),n("div",null,o)};export{e as __pageData,t as default};
